/**
 * 蜜养源平台轮播图功能
 */

class Swiper {
    /**
     * 初始化轮播图
     * @param {string} containerId - 轮播容器的ID
     * @param {Object} options - 配置选项
     */
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;
        
        this.slideContainer = this.container.querySelector('.slide-container');
        if (!this.slideContainer) return;
        
        this.slides = this.slideContainer.children;
        this.slidesCount = this.slides.length;
        if (this.slidesCount <= 1) return;
        
        // 默认配置
        this.options = {
            autoplay: true,
            interval: 5000, // 自动播放间隔（毫秒）
            duration: 500, // 动画持续时间（毫秒）
            loop: true, // 循环播放
            slidesPerView: 1, // 同时显示的幻灯片数量
            spaceBetween: 0, // 幻灯片间距
            ...options
        };
        
        this.currentIndex = 0;
        this.isAnimating = false;
        this.autoplayTimer = null;
        
        this.init();
    }
    
    /**
     * 初始化轮播图
     */
    init() {
        // 计算和设置每张幻灯片的宽度
        this.slideWidth = this.container.offsetWidth / this.options.slidesPerView;
        
        // 设置幻灯片容器的总宽度
        this.slideContainer.style.width = `${this.slideWidth * this.slidesCount}px`;
        
        // 设置每个幻灯片的宽度和边距
        for (let i = 0; i < this.slidesCount; i++) {
            const slide = this.slides[i];
            slide.style.width = `${this.slideWidth - this.options.spaceBetween}px`;
            slide.style.marginRight = `${this.options.spaceBetween}px`;
        }
        
        // 创建导航点
        this.createPagination();
        
        // 添加导航按钮
        this.createNavButtons();
        
        // 如果需要自动播放，则启动自动播放
        if (this.options.autoplay) {
            this.startAutoplay();
            
            // 当鼠标悬停在轮播图上时，暂停自动播放
            this.container.addEventListener('mouseenter', () => this.stopAutoplay());
            this.container.addEventListener('mouseleave', () => this.startAutoplay());
        }
        
        // 监听窗口大小变化，调整轮播图宽度
        window.addEventListener('resize', this.handleResize.bind(this));
    }
    
    /**
     * 创建分页导航点
     */
    createPagination() {
        let pagination = this.container.querySelector('.swiper-pagination');
        if (!pagination) {
            pagination = document.createElement('div');
            pagination.className = 'swiper-pagination flex justify-center mt-4';
            this.container.appendChild(pagination);
        } else {
            pagination.innerHTML = '';
        }
        
        for (let i = 0; i < this.slidesCount; i++) {
            const dot = document.createElement('span');
            dot.className = `swiper-pagination-bullet mx-1 w-2 h-2 rounded-full bg-gray-300 cursor-pointer ${i === this.currentIndex ? 'bg-primary' : ''}`;
            
            dot.addEventListener('click', () => {
                this.goToSlide(i);
            });
            
            pagination.appendChild(dot);
        }
        
        this.pagination = pagination;
    }
    
    /**
     * 创建前进/后退按钮
     */
    createNavButtons() {
        // 检查是否已经存在按钮
        let prevButton = this.container.querySelector('.swiper-button-prev');
        let nextButton = this.container.querySelector('.swiper-button-next');
        
        if (!prevButton) {
            prevButton = document.createElement('button');
            prevButton.className = 'swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 w-10 h-10 rounded-full flex items-center justify-center z-10 shadow-md';
            prevButton.innerHTML = '<i class="ri-arrow-left-s-line text-lg"></i>';
            this.container.appendChild(prevButton);
        }
        
        if (!nextButton) {
            nextButton = document.createElement('button');
            nextButton.className = 'swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 w-10 h-10 rounded-full flex items-center justify-center z-10 shadow-md';
            nextButton.innerHTML = '<i class="ri-arrow-right-s-line text-lg"></i>';
            this.container.appendChild(nextButton);
        }
        
        prevButton.addEventListener('click', () => this.prev());
        nextButton.addEventListener('click', () => this.next());
    }
    
    /**
     * 更新分页导航点的激活状态
     */
    updatePagination() {
        const bullets = this.pagination.querySelectorAll('.swiper-pagination-bullet');
        bullets.forEach((bullet, index) => {
            if (index === this.currentIndex) {
                bullet.classList.add('bg-primary');
                bullet.classList.remove('bg-gray-300');
            } else {
                bullet.classList.remove('bg-primary');
                bullet.classList.add('bg-gray-300');
            }
        });
    }
    
    /**
     * 前往指定索引的幻灯片
     * @param {number} index - 目标幻灯片的索引
     */
    goToSlide(index) {
        if (this.isAnimating) return;
        
        // 处理循环逻辑
        if (this.options.loop) {
            if (index < 0) {
                index = this.slidesCount - 1;
            } else if (index >= this.slidesCount) {
                index = 0;
            }
        } else {
            // 不循环时，确保索引在有效范围内
            if (index < 0 || index >= this.slidesCount) {
                return;
            }
        }
        
        this.isAnimating = true;
        const translateValue = -index * this.slideWidth;
        
        this.slideContainer.style.transition = `transform ${this.options.duration}ms ease`;
        this.slideContainer.style.transform = `translateX(${translateValue}px)`;
        
        // 动画完成后更新当前索引并重置动画状态
        setTimeout(() => {
            this.currentIndex = index;
            this.updatePagination();
            this.isAnimating = false;
        }, this.options.duration);
    }
    
    /**
     * 前往下一张幻灯片
     */
    next() {
        this.goToSlide(this.currentIndex + 1);
    }
    
    /**
     * 前往上一张幻灯片
     */
    prev() {
        this.goToSlide(this.currentIndex - 1);
    }
    
    /**
     * 启动自动播放
     */
    startAutoplay() {
        if (this.autoplayTimer) return;
        
        this.autoplayTimer = setInterval(() => {
            this.next();
        }, this.options.interval);
    }
    
    /**
     * 停止自动播放
     */
    stopAutoplay() {
        if (this.autoplayTimer) {
            clearInterval(this.autoplayTimer);
            this.autoplayTimer = null;
        }
    }
    
    /**
     * 处理窗口大小变化事件
     */
    handleResize() {
        // 重新计算幻灯片宽度
        this.slideWidth = this.container.offsetWidth / this.options.slidesPerView;
        
        // 设置幻灯片容器的总宽度
        this.slideContainer.style.width = `${this.slideWidth * this.slidesCount}px`;
        
        // 设置每个幻灯片的宽度
        for (let i = 0; i < this.slidesCount; i++) {
            const slide = this.slides[i];
            slide.style.width = `${this.slideWidth - this.options.spaceBetween}px`;
        }
        
        // 确保保持在当前索引的幻灯片上
        this.slideContainer.style.transition = 'none';
        this.slideContainer.style.transform = `translateX(${-this.currentIndex * this.slideWidth}px)`;
    }
}

// 当DOM加载完成后，初始化所有轮播图
document.addEventListener('DOMContentLoaded', function() {
    // 初始化蜂蜜产品轮播图
    const honeySwiper = new Swiper('carousel-container', {
        slidesPerView: 1,
        spaceBetween: 16,
        autoplay: true,
        interval: 3000,
        loop: true
    });
    
    // 根据屏幕宽度调整每屏显示数量
    function updateSlidesPerView() {
        if (window.innerWidth >= 1024) {
            honeySwiper.options.slidesPerView = 3;
        } else if (window.innerWidth >= 768) {
            honeySwiper.options.slidesPerView = 2;
        } else {
            honeySwiper.options.slidesPerView = 1;
        }
        honeySwiper.handleResize();
    }
    
    // 初始设置和窗口大小变化时更新
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
});