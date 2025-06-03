/**
 * 蜜养源平台主要JavaScript功能
 */

/**
 * 加载HTML组件
 */
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = html;
        }
    } catch (error) {
        console.error('加载组件失败:', componentPath, error);
    }
}

/**
 * 加载所有组件
 */
async function loadAllComponents() {
    const components = [
        { id: 'header-placeholder', path: 'components/header.html' },
        { id: 'footer-placeholder', path: 'components/footer.html' }
    ];
    
    await Promise.all(components.map(component => 
        loadComponent(component.id, component.path)
    ));
}

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', async function() {
    // 加载组件
    await loadAllComponents();
    
    // 初始化移动端菜单
    initMobileMenu();
    
    // 初始化表单验证
    initFormValidation();
    
    // 初始化数量选择器
    initQuantitySelectors();
    
    // 初始化溯源码查询功能
    initTraceCodeSearch();
    
    // 初始化切换选项卡
    initTabs();
    
    console.log('蜜养源平台初始化完成');
});

/**
 * 移动端菜单功能
 */
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

/**
 * 表单验证功能
 */
function initFormValidation() {
    const forms = document.querySelectorAll('form.validate');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            let isValid = true;
            const requiredInputs = form.querySelectorAll('[required]');
            
            requiredInputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('border-red-500');
                    
                    // 添加或更新错误信息
                    let errorMsg = input.nextElementSibling;
                    if (!errorMsg || !errorMsg.classList.contains('error-message')) {
                        errorMsg = document.createElement('span');
                        errorMsg.className = 'error-message text-red-500 text-sm mt-1 block';
                        input.parentNode.insertBefore(errorMsg, input.nextSibling);
                    }
                    errorMsg.textContent = '此字段不能为空';
                } else {
                    input.classList.remove('border-red-500');
                    const errorMsg = input.nextElementSibling;
                    if (errorMsg && errorMsg.classList.contains('error-message')) {
                        errorMsg.textContent = '';
                    }
                }
            });
            
            // 验证邮箱格式
            const emailInputs = form.querySelectorAll('[type="email"]');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            emailInputs.forEach(input => {
                if (input.value && !emailRegex.test(input.value)) {
                    isValid = false;
                    input.classList.add('border-red-500');
                    
                    let errorMsg = input.nextElementSibling;
                    if (!errorMsg || !errorMsg.classList.contains('error-message')) {
                        errorMsg = document.createElement('span');
                        errorMsg.className = 'error-message text-red-500 text-sm mt-1 block';
                        input.parentNode.insertBefore(errorMsg, input.nextSibling);
                    }
                    errorMsg.textContent = '请输入有效的电子邮箱地址';
                }
            });
            
            if (!isValid) {
                event.preventDefault();
            }
        });
    });
}

/**
 * 数量选择器功能
 */
function initQuantitySelectors() {
    const quantitySelectors = document.querySelectorAll('.quantity-selector');
    
    quantitySelectors.forEach(selector => {
        const input = selector.querySelector('input');
        const decreaseBtn = selector.querySelector('.decrease');
        const increaseBtn = selector.querySelector('.increase');
        
        if (input && decreaseBtn && increaseBtn) {
            decreaseBtn.addEventListener('click', function() {
                const currentValue = parseInt(input.value, 10);
                if (currentValue > parseInt(input.min || 1, 10)) {
                    input.value = currentValue - 1;
                    // 触发change事件，以便其他监听器可以响应
                    input.dispatchEvent(new Event('change'));
                }
            });
            
            increaseBtn.addEventListener('click', function() {
                const currentValue = parseInt(input.value, 10);
                const max = parseInt(input.max || 99, 10);
                if (currentValue < max) {
                    input.value = currentValue + 1;
                    // 触发change事件
                    input.dispatchEvent(new Event('change'));
                }
            });
            
            // 确保输入的是数字
            input.addEventListener('input', function() {
                let value = parseInt(input.value.replace(/[^0-9]/g, ''), 10);
                if (isNaN(value)) {
                    value = 1;
                }
                
                const min = parseInt(input.min || 1, 10);
                const max = parseInt(input.max || 99, 10);
                
                if (value < min) {
                    value = min;
                } else if (value > max) {
                    value = max;
                }
                
                input.value = value;
            });
        }
    });
}

/**
 * 溯源码查询功能
 */
function initTraceCodeSearch() {
    const traceForm = document.getElementById('trace-code-form');
    const traceInput = document.getElementById('trace-code-input');
    const traceHistory = document.getElementById('trace-history');
    
    if (traceForm && traceInput) {
        traceForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const code = traceInput.value.trim();
            if (code) {
                // 这里应该是发送到后端API的请求
                // 示例中使用模拟数据
                console.log('查询溯源码:', code);
                
                // 添加到查询历史
                saveTraceHistory(code);
                
                // 重定向到溯源结果页面
                // window.location.href = `trace-result.html?code=${encodeURIComponent(code)}`;
                
                // 为了演示，显示模拟消息
                alert(`正在查询溯源码: ${code}，这个功能需要后端API支持。`);
            }
        });
        
        // 加载历史查询记录
        loadTraceHistory();
    }
}

/**
 * 保存溯源码查询历史到本地存储
 */
function saveTraceHistory(code) {
    // 从本地存储获取现有历史记录
    const history = JSON.parse(localStorage.getItem('traceHistory') || '[]');
    
    // 如果已存在相同的代码，则移除它（稍后会添加到最前面）
    const index = history.indexOf(code);
    if (index !== -1) {
        history.splice(index, 1);
    }
    
    // 将新代码添加到历史记录的开头
    history.unshift(code);
    
    // 只保留最近的5条记录
    const recentHistory = history.slice(0, 5);
    
    // 保存回本地存储
    localStorage.setItem('traceHistory', JSON.stringify(recentHistory));
    
    // 更新UI
    loadTraceHistory();
}

/**
 * 从本地存储加载溯源码历史并更新UI
 */
function loadTraceHistory() {
    const traceHistory = document.getElementById('trace-history');
    if (!traceHistory) return;
    
    const history = JSON.parse(localStorage.getItem('traceHistory') || '[]');
    
    // 清除现有内容
    traceHistory.innerHTML = '';
    
    // 添加历史记录按钮
    history.forEach(code => {
        const button = document.createElement('button');
        button.className = 'bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-xs text-gray-700 transition-colors';
        button.textContent = code;
        button.addEventListener('click', function() {
            const traceInput = document.getElementById('trace-code-input');
            if (traceInput) {
                traceInput.value = code;
            }
        });
        
        traceHistory.appendChild(button);
    });
}

/**
 * 初始化选项卡功能
 */
function initTabs() {
    const tabContainers = document.querySelectorAll('.tab-container');
    
    tabContainers.forEach(container => {
        const tabs = container.querySelectorAll('.tab-button');
        const contents = container.querySelectorAll('.tab-content');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const target = this.getAttribute('data-target');
                
                // 更新选项卡状态
                tabs.forEach(t => t.classList.remove('tab-active'));
                this.classList.add('tab-active');
                
                // 更新内容状态
                contents.forEach(content => {
                    if (content.id === target) {
                        content.classList.remove('hidden');
                    } else {
                        content.classList.add('hidden');
                    }
                });
            });
        });
    });
}