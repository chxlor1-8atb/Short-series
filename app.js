// Bookbik SPA - Single Page Application
class BookbikApp {
    constructor() {
        this.currentPage = 'home';
        this.routes = {
            '': 'home',
            'home': 'home',
            'player': 'player',
            'topup': 'topup',
            'topup-light': 'topup-light',
            'history': 'history',
            'history-light': 'history-light',
            'library': 'library',
            'library-light': 'library-light',
            'missions': 'missions',
            'missions-dark': 'missions-dark',
            'explore': 'explore'
        };
        this.init();
    }

    init() {
        this.setupRouting();
        this.setupNavigation();
        this.loadInitialPage();
    }

    setupRouting() {
        // Handle browser back/forward
        window.addEventListener('popstate', (e) => {
            const path = window.location.pathname.replace('/', '');
            this.navigate(path, false);
        });

        // Handle initial route
        const path = window.location.pathname.replace('/', '');
        this.currentPage = this.routes[path] || 'home';
    }

    setupNavigation() {
        // Setup navigation click handlers
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[data-route]')) {
                e.preventDefault();
                const route = e.target.getAttribute('data-route');
                this.navigate(route);
            }
        });
    }

    navigate(route, addToHistory = true) {
        const page = this.routes[route] || 'home';
        
        if (page === this.currentPage) return;

        // Update URL
        if (addToHistory) {
            history.pushState({ page }, '', route === 'home' ? '/' : `/${route}`);
        }

        // Update current page
        this.currentPage = page;

        // Load page content
        this.loadPage(page);

        // Update navigation
        this.updateNavigation(route);
    }

    updateNavigation(activeRoute) {
        // Update desktop navigation
        document.querySelectorAll('[data-nav]').forEach(link => {
            link.classList.remove('text-primary', 'font-medium');
            link.classList.add('text-slate-500');
        });

        const activeNav = document.querySelector(`[data-nav="${activeRoute}"]`);
        if (activeNav) {
            activeNav.classList.remove('text-slate-500');
            activeNav.classList.add('text-primary', 'font-medium');
        }

        // Update mobile navigation
        document.querySelectorAll('[data-mobile-nav]').forEach(link => {
            link.classList.remove('text-primary');
        });

        const activeMobileNav = document.querySelector(`[data-mobile-nav="${activeRoute}"]`);
        if (activeMobileNav) {
            activeMobileNav.classList.add('text-primary');
        }
    }

    async loadPage(page) {
        const app = document.getElementById('app');
        if (!app) return;

        // Show loading
        app.innerHTML = this.getLoadingHTML();

        // Simulate loading delay
        await new Promise(resolve => setTimeout(resolve, 300));

        // Load page content
        switch(page) {
            case 'home':
                app.innerHTML = this.getHomeHTML();
                this.setupHomePage();
                break;
            case 'player':
                app.innerHTML = this.getPlayerHTML();
                this.setupPlayerPage();
                break;
            case 'topup':
                app.innerHTML = this.getTopupHTML();
                this.setupTopupPage();
                break;
            case 'topup-light':
                app.innerHTML = this.getTopupLightHTML();
                this.setupTopupLightPage();
                break;
            case 'history':
                app.innerHTML = this.getHistoryHTML();
                this.setupHistoryPage();
                break;
            case 'history-light':
                app.innerHTML = this.getHistoryLightHTML();
                this.setupHistoryLightPage();
                break;
            case 'library':
                app.innerHTML = this.getLibraryHTML();
                this.setupLibraryPage();
                break;
            case 'library-light':
                app.innerHTML = this.getLibraryLightHTML();
                this.setupLibraryLightPage();
                break;
            case 'missions':
                app.innerHTML = this.getMissionsHTML();
                this.setupMissionsPage();
                break;
            case 'missions-dark':
                app.innerHTML = this.getMissionsDarkHTML();
                this.setupMissionsDarkPage();
                break;
            case 'explore':
                app.innerHTML = this.getExploreHTML();
                this.setupExplorePage();
                break;
            default:
                app.innerHTML = this.getHomeHTML();
                this.setupHomePage();
        }

        // Scroll to top
        window.scrollTo(0, 0);
    }

    loadInitialPage() {
        const path = window.location.pathname.replace('/', '');
        const page = this.routes[path] || 'home';
        this.loadPage(page);
        this.updateNavigation(path);
    }

    getLoadingHTML() {
        return `
            <div class="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center">
                <div class="text-center">
                    <div class="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p class="text-slate-600 dark:text-slate-400">กำลังโหลด...</p>
                </div>
            </div>
        `;
    }

    getHomeHTML() {
        return `
            <div class="min-h-screen bg-background-light dark:bg-background-dark">
                <!-- Navigation -->
                <nav class="sticky top-0 z-50 w-full backdrop-blur-md bg-background-light/90 dark:bg-background-dark/90 border-b border-gray-200 dark:border-gray-800">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="flex justify-between h-16">
                            <div class="flex items-center gap-8">
                                <div class="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                                    <div class="w-8 h-8 rounded bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-lg">บ</div>
                                    <span class="font-bold text-xl tracking-tight dark:text-white">บุ๊ค<span class="text-primary">บิ๊ก</span></span>
                                </div>
                                <div class="hidden md:block">
                                    <div class="flex items-baseline space-x-6">
                                        <a data-nav="home" data-route="" class="text-primary font-medium text-sm">หน้าแรก</a>
                                        <a data-nav="trending" data-route="explore" class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium">ยอดนิยม</a>
                                        <a data-nav="originals" data-route="#" class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium">ต้นฉบับ</a>
                                        <a data-nav="library" data-route="library" class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium">รายการของฉัน</a>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center gap-4">
                                <button onclick="app.navigate('topup')" class="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                                    <span class="material-icons text-sm">add_circle</span>
                                    เติมเหรียญ
                                </button>
                                <div class="relative hidden sm:block group">
                                    <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                                        <span class="material-icons text-xl">search</span>
                                    </span>
                                    <input type="text" placeholder="ค้นหาซีรีส์..." class="block w-full pl-10 pr-3 py-2 bg-slate-100 dark:bg-slate-800 border-0 rounded-lg text-sm placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-700 transition-all">
                                </div>
                                <button class="p-2 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                                    <span class="material-icons">notifications</span>
                                </button>
                                <div class="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdNMesUNThpjqYDd7zJFu7zUAtkFrc8zmXcPJdpxMOYbic-vYelkTDNuOsX_GH95d97FYiiIN39evFtQf5JMzPaHJ2KLBE_h0noOg7-On_fHiBDy2ElySmurmycFlhXUHTegGQARUUpzoQjhQwzDi5CuBEv29_hyYkV4sO7tHK5ueQItinU7D5DGaxpS2fAl0hSakxP8_ygmXKXmR61ADk4T6cnfWXKQZh7gMVzuDHNBeF1tG9nebwunnaGgHLL9smbP-hZD_lKmOA" alt="Profile" class="h-full w-full object-cover">
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <!-- Hero Section -->
                <section class="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                    <div class="absolute inset-0 z-0">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3-ghCMu6bF61V0oK6YobVEvfw60fP9ut-Pne77wNjUYTkUbX9WyVldnpa7EUWfZcQV_YZ3TbokUHNzv0efTVrNzIxRNttPJs6TaL60pozS7_O_0kmfVGMVNMTfMe3YPmqzMYJ5-jYQOj2InCLMSE10FN8MhteQFqjGpcy3FWyomtf99Uy22Wes3qpUKZDIlyrDh-FklGlOZkVpu4w1D_aJ4fy5D6oZ1k470TY3EAElMWRZZil1lCBRbjOYBqb4GqiqopYJXFw2Mli" alt="Hero Background" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                    </div>
                    <div class="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
                        <h1 class="text-5xl md:text-7xl font-bold mb-6 tracking-tight">ซีรีส์สั้น<br/>สำหรับคุณ</h1>
                        <p class="text-xl md:text-2xl mb-8 text-gray-200">ดูซีรีส์สั้นคุณภาพสูง ทุกที่ทุกเวลา</p>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center">
                            <button onclick="app.navigate('player')" class="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2">
                                <span class="material-icons">play_arrow</span>
                                ดูตอนนี้
                            </button>
                            <button onclick="app.navigate('explore')" class="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2">
                                <span class="material-icons">explore</span>
                                สำรวจ
                            </button>
                        </div>
                    </div>
                </section>

                <!-- Content Sections -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <!-- Trending -->
                    <section class="mb-16">
                        <div class="flex items-center justify-between mb-6">
                            <h2 class="text-2xl font-bold dark:text-white">กำลังมาแรง</h2>
                            <button onclick="app.navigate('explore')" class="text-primary hover:text-blue-600 font-medium">ดูทั้งหมด</button>
                        </div>
                        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            ${this.generateSeriesCards(6)}
                        </div>
                    </section>

                    <!-- Continue Watching -->
                    <section class="mb-16">
                        <div class="flex items-center justify-between mb-6">
                            <h2 class="text-2xl font-bold dark:text-white">ดูต่อ</h2>
                            <button onclick="app.navigate('library')" class="text-primary hover:text-blue-600 font-medium">ดูทั้งหมด</button>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            ${this.generateContinueWatchingCards(4)}
                        </div>
                    </section>
                </div>
            </div>
        `;
    }

    // Placeholder methods for other pages
    getPlayerHTML() { return '<div class="min-h-screen bg-background-light dark:bg-background-dark p-8"><h1 class="text-2xl font-bold">Video Player</h1></div>'; }
    getTopupHTML() { return '<div class="min-h-screen bg-background-light dark:bg-background-dark p-8"><h1 class="text-2xl font-bold">เติมเหรียญ</h1></div>'; }
    getTopupLightHTML() { return '<div class="min-h-screen bg-background-light dark:bg-background-dark p-8"><h1 class="text-2xl font-bold">เติมเหรียญ (Light)</h1></div>'; }
    getHistoryHTML() { return '<div class="min-h-screen bg-background-light dark:bg-background-dark p-8"><h1 class="text-2xl font-bold">ประวัติการทำรายการ</h1></div>'; }
    getHistoryLightHTML() { return '<div class="min-h-screen bg-background-light dark:bg-background-dark p-8"><h1 class="text-2xl font-bold">ประวัติการทำรายการ (Light)</h1></div>'; }
    getLibraryHTML() { return '<div class="min-h-screen bg-background-light dark:bg-background-dark p-8"><h1 class="text-2xl font-bold">คลังของฉัน</h1></div>'; }
    getLibraryLightHTML() { return '<div class="min-h-screen bg-background-light dark:bg-background-dark p-8"><h1 class="text-2xl font-bold">คลังของฉัน (Light)</h1></div>'; }
    getMissionsHTML() { return '<div class="min-h-screen bg-background-light dark:bg-background-dark p-8"><h1 class="text-2xl font-bold">ศูนย์ภารกิจ</h1></div>'; }
    getMissionsDarkHTML() { return '<div class="min-h-screen bg-background-light dark:bg-background-dark p-8"><h1 class="text-2xl font-bold">ศูนย์ภารกิจ (Dark)</h1></div>'; }
    getExploreHTML() { return '<div class="min-h-screen bg-background-light dark:bg-background-dark p-8"><h1 class="text-2xl font-bold">สำรวจ</h1></div>'; }

    // Helper methods
    generateSeriesCards(count) {
        const series = [
            { title: 'ความลับของ CEO', episodes: 'ตอนที่ 45', progress: 75 },
            { title: 'เที่ยงคืนในโซล', episodes: 'ตอนที่ 3', progress: 25 },
            { title: 'รักที่ปลายนิ้ว', episodes: 'ตอนที่ 12', progress: 100 },
            { title: 'จักรวรรดิ์แห่งเงา', episodes: 'ตอนที่ 1', progress: 5 },
            { title: 'มรดกอาร์เคด', episodes: 'ตอนที่ 8', progress: 100 },
            { title: 'โลกธรรมชาติ', episodes: 'ตอนที่ 2', progress: 60 }
        ];

        return Array.from({ length: count }, (_, i) => {
            const item = series[i % series.length];
            return `
                <div class="group cursor-pointer">
                    <div class="relative aspect-[3/4] rounded-lg overflow-hidden mb-2">
                        <img src="https://picsum.photos/seed/series${i}/300/400.jpg" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <div class="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span class="material-icons text-primary">play_arrow</span>
                            </div>
                        </div>
                    </div>
                    <h3 class="font-semibold text-sm dark:text-white group-hover:text-primary transition-colors">${item.title}</h3>
                    <p class="text-xs text-slate-500 dark:text-slate-400">${item.episodes}</p>
                </div>
            `;
        }).join('');
    }

    generateContinueWatchingCards(count) {
        const series = [
            { title: 'ความลับของ CEO', episode: 'ตอนที่ 45', time: '22 นาที', progress: 75 },
            { title: 'เที่ยงคืนในโซล', episode: 'ตอนที่ 3', time: '45 นาที', progress: 25 },
            { title: 'จักรวรรดิ์แห่งเงา', episode: 'ตอนที่ 1', time: '10 นาที', progress: 5 },
            { title: 'โลกธรรมชาติ', episode: 'ตอนที่ 2', time: '15 นาที', progress: 60 }
        ];

        return Array.from({ length: count }, (_, i) => {
            const item = series[i % series.length];
            return `
                <div class="group relative flex flex-col bg-white dark:bg-surface-dark rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div class="relative">
                        <img src="https://picsum.photos/seed/continue${i}/400/225.jpg" alt="${item.title}" class="w-full h-48 object-cover">
                        <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <div class="w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                                <span class="material-icons text-white">play_arrow</span>
                            </div>
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-lg dark:text-white mb-1 group-hover:text-primary transition-colors">${item.title}</h3>
                        <p class="text-sm text-slate-500 dark:text-slate-400 mb-2">${item.episode}</p>
                        <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                            <span>เหลืออีก ${item.time}</span>
                        </div>
                        <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <div class="bg-primary h-2 rounded-full" style="width: ${item.progress}%"></div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Setup methods for each page
    setupHomePage() {
        // Initialize home page functionality
        console.log('Home page loaded');
    }

    setupPlayerPage() {
        console.log('Player page loaded');
    }

    setupTopupPage() {
        console.log('Topup page loaded');
    }

    setupTopupLightPage() {
        console.log('Topup Light page loaded');
    }

    setupHistoryPage() {
        console.log('History page loaded');
    }

    setupHistoryLightPage() {
        console.log('History Light page loaded');
    }

    setupLibraryPage() {
        console.log('Library page loaded');
    }

    setupLibraryLightPage() {
        console.log('Library Light page loaded');
    }

    setupMissionsPage() {
        console.log('Missions page loaded');
    }

    setupMissionsDarkPage() {
        console.log('Missions Dark page loaded');
    }

    setupExplorePage() {
        console.log('Explore page loaded');
    }
}

// Initialize app when DOM is loaded
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new BookbikApp();
});

// Make app globally accessible
window.app = app;
