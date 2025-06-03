/**
 * 蜜养源平台模拟数据
 */

// 蜂蜜产品数据
const honeyProducts = [
    {
        id: 1,
        name: "黄陂荆蜜 - 春季百花蜜",
        description: "采自黄陂木兰山区的春季百花，口感清香甘甜，富含多种维生素和矿物质。",
        price: 158.00,
        originalPrice: 188.00,
        image: "https://cbu01.alicdn.com/img/ibank/2016/444/165/3665561444_170154041.jpg",
        rating: 4.8,
        reviews: 256,
        ecoRating: 5,        origin: "湖北黄陂木兰山",
        harvestDate: "2024-04-15",
        traceCode: "HBM240415001",
        beekeeper: "李师傅",
        volume: "500g",
        category: "百花蜜",
        type: "百花蜜",
        certification: "有机认证",
        tags: ["有机", "纯天然", "非遗技艺"],
        stock: 120
    },
    {
        id: 2,
        name: "青海高原 - 野生枸杞蜜",
        description: "来自青海无污染高原的野生枸杞花蜜，具有独特的枸杞香味和丰富的营养价值。",
        price: 228.00,
        originalPrice: 268.00,
        image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=300&fit=crop&crop=center",
        rating: 4.9,
        reviews: 189,
        ecoRating: 5,        origin: "青海柴达木盆地",
        harvestDate: "2024-07-20",
        traceCode: "QHG240720002",
        beekeeper: "扎西师傅",
        volume: "500g",
        category: "单花蜜",
        type: "枸杞花蜜",
        certification: "地理标志认证",
        tags: ["野生", "高原", "滋补"],
        stock: 85
    },
    {
        id: 3,
        name: "黄陂荆蜜 - 秋季桂花蜜",
        description: "金秋时节采集的桂花蜜，香气浓郁，口感醇厚，是传统养生佳品。",
        price: 198.00,
        originalPrice: 238.00,
        image: "https://img.alicdn.com/bao/uploaded/i2/150238654/O1CN01IEE9r72Dna7Fl3NjE_!!150238654.jpg",
        rating: 4.7,
        reviews: 312,
        ecoRating: 4,        origin: "湖北黄陂木兰山",
        harvestDate: "2024-09-10",
        traceCode: "HBM240910003",
        beekeeper: "王师傅",
        volume: "500g",
        category: "单花蜜",
        type: "桂花蜜",
        certification: "有机认证",
        tags: ["桂花香", "传统工艺", "秋季限定"],
        stock: 200
    },
    {
        id: 4,
        name: "野生土蜂蜜 - 深山百花",
        description: "深山野生中华蜂采集的百花蜜，一年仅采一次，珍贵稀有。",
        price: 328.00,
        originalPrice: 398.00,
        image: "https://th.bing.com/th/id/R.42d10991d6f55e5d394b808b8ac639af?rik=3B7wBri%2fbzJNnw&riu=http%3a%2f%2fwww.kumifeng.com%2fuploadfile%2f2020%2f0513%2f20200513072735645.jpg&ehk=gxqSOg8JFIlX58wOFfmVHfusPBAu9lup0PI8p4mP%2fUc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
        rating: 5.0,
        reviews: 95,
        ecoRating: 5,        origin: "湖北神农架",
        harvestDate: "2024-08-15",
        traceCode: "SNJ240815004",
        beekeeper: "陈师傅",
        volume: "500g",
        category: "土蜂蜜",
        type: "深山土蜂蜜",certification: "野生蜂蜜认证",
        tags: ["野生", "中华蜂", "限量版"],
        stock: 32
    },
    {
        id: 5,
        name: "新疆天山 - 野生椴树蜜",
        description: "来自新疆天山脚下的椴树花蜜，色泽清亮，口感清香淡雅。",
        price: 268.00,
        originalPrice: 298.00,
        image: "https://img.alicdn.com/bao/uploaded/i2/608398817/O1CN01jtnYBY2F0ElsxQZUU_!!0-item_pic.jpg",
        rating: 4.6,
        reviews: 178,
        ecoRating: 4,
        origin: "新疆天山",
        harvestDate: "2024-06-25",
        traceCode: "XJ240625005",
        beekeeper: "艾力师傅",
        volume: "500g",
        category: "椴树蜜",
        certification: "绿色食品认证",
        tags: ["椴树", "清香", "新疆特产"],
        stock: 95
    },
    {
        id: 6,
        name: "东北黑蜂 - 椴树雪蜜",
        description: "东北黑蜂采集的椴树蜜，结晶细腻如雪，营养价值极高。",
        price: 188.00,
        originalPrice: 218.00,
        image: "https://th.bing.com/th/id/OIP.672Fgr1Io_e4FeDJcukfqQHaEp?rs=1&pid=ImgDetMain",
        rating: 4.7,
        reviews: 234,
        ecoRating: 5,
        origin: "黑龙江饶河",
        harvestDate: "2024-07-10",
        traceCode: "HLJ240710006",
        beekeeper: "刘师傅",
        volume: "500g",
        category: "椴树蜜",
        certification: "东北黑蜂认证",
        tags: ["东北黑蜂", "结晶蜜", "营养丰富"],
        stock: 150
    },
    {
        id: 7,
        name: "云南高原 - 野坝子蜜",
        description: "云南特有的野坝子花蜜，具有独特的薄荷香味，清热降火。",
        price: 298.00,
        originalPrice: 338.00,
        image: "https://img.alicdn.com/i4/2215118988536/O1CN01Te0df02CvXhlJaTGA_!!2215118988536.jpg",
        rating: 4.8,
        reviews: 156,
        ecoRating: 5,
        origin: "云南昆明",
        harvestDate: "2024-08-05",
        traceCode: "YN240805007",
        beekeeper: "张师傅",
        volume: "500g",
        category: "野坝子蜜",
        certification: "云南特产认证",
        tags: ["野坝子", "薄荷香", "云南特产"],
        stock: 68
    },    {
        id: 8,
        name: "贵州高山 - 百花蜜",
        description: "来自贵州高山草甸的优质百花蜜，富含多种植物精华，香气四溢，回味悠长。",
        price: 268.00,
        originalPrice: 328.00,
        image: "https://cdn.pixabay.com/photo/2014/05/23/18/15/honey-352205_1280.jpg",
        rating: 4.9,
        reviews: 298,
        ecoRating: 5,
        origin: "贵州黔东南",
        harvestDate: "2024-05-15",
        traceCode: "GZ240515008",
        beekeeper: "李大山",
        volume: "500g",
        category: "百花蜜",
        certification: "有机认证",
        tags: ["高山", "百花蜜", "有机"],
        stock: 85
    }
];

// 蜂场数据
const farms = [
    {
        id: 1,
        name: "木兰山生态蜂场",
        location: "湖北黄陂木兰山",
        beekeeper: "李师傅",
        experience: "30年养蜂经验",
        hiveCount: 200,
        environment: "山林环境，空气清新，蜜源丰富",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop&crop=center",
        livestream: "https://live.example.com/mulan-farm",
        temperature: "22°C",
        humidity: "65%",
        airQuality: "优",
        coordinates: { lat: 31.1234, lng: 114.5678 }
    },
    {
        id: 2,
        name: "柴达木高原蜂场",
        location: "青海柴达木盆地",
        beekeeper: "扎西师傅",
        experience: "25年养蜂经验",
        hiveCount: 150,
        environment: "高原无污染环境，昼夜温差大利于蜜糖积累",
        image: "https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?w=600&h=400&fit=crop&crop=center",
        livestream: "https://live.example.com/qinghai-farm",
        temperature: "18°C",
        humidity: "45%",
        airQuality: "优",
        coordinates: { lat: 37.1234, lng: 95.5678 }
    }
];

// 养蜂场数据
const apiaries = [
    {
        id: 1,
        name: "木兰山玉蜂坊",
        location: "湖北省黄陂区木兰山",
        coordinates: {
            latitude: 31.0234,
            longitude: 114.3512
        },
        isLive: true,
        streamUrl: "https://example.com/stream/1",
        thumbnailUrl: "https://img1.qunarzz.com/travel/d7/1801/26/69d397ad36d276b5.jpg_r_640x480x70_268672d8.jpg",
        environmentData: {
            temperature: 24.5,
            humidity: 65,
            weather: "晴朗"
        },
        hiveStats: {
            totalHives: 50,
            activeHives: 45,
            beeActivity: "活跃"
        },
        viewerCount: 128,
        beekeeper: "李师傅",
        lastUpdated: "2024-01-15T08:30:00"
    },
    {
        id: 2,
        name: "神农蜂语",
        location: "湖北省神农架林区",
        coordinates: {
            latitude: 31.3803,
            longitude: 110.4544
        },
        isLive: true,
        streamUrl: "https://example.com/stream/2",
        thumbnailUrl: "https://p1.ssl.qhimg.com/t01b0c3dd4bfd95ed7b.jpg",
        environmentData: {
            temperature: 22.0,
            humidity: 75,
            weather: "多云"
        },
        hiveStats: {
            totalHives: 35,
            activeHives: 32,
            beeActivity: "中等"
        },
        viewerCount: 86,
        beekeeper: "陈师傅",
        lastUpdated: "2024-01-15T08:35:00"
    },
    {
        id: 3,
        name: "天山蜜语",
        location: "新疆维吾尔自治区天山",
        coordinates: {
            latitude: 43.4234,
            longitude: 84.8916
        },
        isLive: true,
        streamUrl: "https://example.com/stream/3",
        thumbnailUrl: "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?q=80&w=800&h=600&auto=format&fit=crop",
        environmentData: {
            temperature: 20.5,
            humidity: 55,
            weather: "晴朗"
        },
        hiveStats: {
            totalHives: 40,
            activeHives: 38,
            beeActivity: "活跃"
        },
        viewerCount: 92,
        beekeeper: "艾力师傅",
        lastUpdated: "2024-01-15T08:28:00"
    }
];

// 溯源数据
const traceData = {
    "HBM240415001": {
        product: honeyProducts[0],
        farm: farms[0],
        timeline: [
            { date: "2024-03-15", event: "蜂群健康检查", description: "对蜂群进行全面健康检查，确保蜜蜂状态良好" },
            { date: "2024-04-01", event: "花期开始", description: "春季百花盛开，蜜蜂开始大量采蜜" },
            { date: "2024-04-15", event: "蜂蜜采集", description: "使用传统非遗技艺采集成熟蜂蜜" },
            { date: "2024-04-16", event: "质量检测", description: "进行水分、酶值等多项质量指标检测" },
            { date: "2024-04-18", event: "包装入库", description: "完成包装并入库，等待配送" }
        ],
        certificates: [
            { name: "有机产品认证", number: "ORG-2024-001", issuer: "中国质量认证中心" },
            { name: "地理标志认证", number: "GEO-2024-HB-001", issuer: "国家知识产权局" }
        ],
        quality: {
            moisture: "18.2%",
            enzyme: "12.5",
            fructose: "39.8%",
            glucose: "32.1%",
            sucrose: "1.2%"
        }
    }
};

// 认养套餐数据
const adoptionPlans = [
    {
        id: 1,
        name: "试验版认养",
        description: "初体验，轻松入门",
        price: 299,
        duration: "3个月",
        features: [
            "实时查看蜂箱数据",
            "每月获得500g蜂蜜",
            "蜂群成长报告",
            "专业养蜂指导"
        ],
        hiveImage: "https://images.unsplash.com/photo-1595131554280-e61e5c14bb9c?w=300&h=200&fit=crop&crop=center",
        popular: false
    },
    {
        id: 2,
        name: "臻享版认养",
        description: "深度体验，品质保证",
        price: 899,
        duration: "12个月",
        features: [
            "专属蜂箱命名权",
            "每月获得1000g优质蜂蜜",
            "VR蜂场体验",
            "年度蜂场参观",
            "定制蜂蜜礼盒",
            "蜂王浆等副产品"
        ],
        hiveImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&h=200&fit=crop&crop=center",
        popular: true
    },
    {
        id: 3,
        name: "环保公益版",
        description: "支持环保，履行责任",
        price: 599,
        duration: "6个月",
        features: [
            "参与生态保护项目",
            "每月获得750g有机蜂蜜",
            "获得公益证书",
            "种植蜜源植物",
            "中华蜂保护贡献"
        ],
        hiveImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center",
        popular: false
    }
];

// 旅游线路数据
const tourRoutes = [
    {
        id: 1,
        name: "木兰山蜂蜜文化一日游",
        description: "探访黄陂木兰山，体验传统养蜂文化",
        price: 188,
        duration: "1天",
        highlights: [
            "参观非遗养蜂技艺展示",
            "亲手摇蜜体验",
            "品尝新鲜蜂蜜",
            "蜂蜜SPA体验"
        ],
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center",
        rating: 4.8,
        bookings: 156
    },
    {
        id: 2,
        name: "青海高原蜜源探秘3日游",
        description: "深入青海高原，探索纯净蜜源地",
        price: 1288,
        duration: "3天2夜",
        highlights: [
            "高原蜂场参观",
            "野生枸杞采摘",
            "藏族养蜂文化体验",
            "星空下的蜂蜜品鉴"
        ],
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center",
        rating: 4.9,
        bookings: 89
    }
];

// 用户数据（示例）
const userData = {
    name: "张三",
    email: "zhangsan@example.com",
    phone: "138****8888",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    level: "VIP会员",
    points: 2580,
    adoptedHives: [
        {
            id: "H001",
            name: "我的小蜜蜂",
            plan: adoptionPlans[1],
            startDate: "2024-01-15",
            status: "活跃",
            totalHoney: "8500g"
        }
    ],
    orders: [
        {
            id: "ORD20240525001",
            date: "2024-05-25",
            status: "已发货",
            total: 356.00,
            items: [
                { product: honeyProducts[0], quantity: 2 }
            ]
        }
    ]
};

// 购物车数据（存储在localStorage中）
class CartManager {
    constructor() {
        this.storageKey = 'honey_cart';
        this.items = this.loadCart();
    }

    loadCart() {
        const saved = localStorage.getItem(this.storageKey);
        return saved ? JSON.parse(saved) : [];
    }

    saveCart() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.items));
    }

    addItem(productId, quantity = 1) {
        const existingItem = this.items.find(item => item.productId === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ productId, quantity });
        }
        
        this.saveCart();
        return this.items;
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.productId !== productId);
        this.saveCart();
        return this.items;
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.productId === productId);
        if (item) {
            item.quantity = Math.max(0, quantity);
            if (item.quantity === 0) {
                this.removeItem(productId);
            } else {
                this.saveCart();
            }
        }
        return this.items;
    }

    getItems() {
        return this.items.map(item => {
            const product = honeyProducts.find(p => p.id === item.productId);
            return { ...item, product };
        }).filter(item => item.product);
    }

    getTotalPrice() {
        return this.getItems().reduce((total, item) => {
            return total + (item.product.price * item.quantity);
        }, 0);
    }

    getItemCount() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    clear() {
        this.items = [];
        this.saveCart();
    }
}

// 创建全局购物车实例
const cart = new CartManager();

// 创建全局mockData对象
const mockData = {
    products: honeyProducts,
    farms: farms,
    apiaries: apiaries,
    traceData: traceData,
    adoptionPlans: adoptionPlans,
    tourRoutes: tourRoutes,
    userData: userData,
    cart: cart
};