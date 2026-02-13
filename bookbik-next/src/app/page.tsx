'use client';

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased selection:bg-primary selection:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-slate-200/10 dark:border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Links */}
            <div className="flex items-center gap-8">
              <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-lg">B</div>
                <span className="font-bold text-xl tracking-tight dark:text-white">บุ๊ค<span className="text-primary">บิ๊ก</span></span>
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-6">
                  <a className="text-primary font-medium text-sm" href="#">หน้าแรก</a>
                  <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium" href="#">ยอดนิยม</a>
                  <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium" href="#">ต้นฉบับ</a>
                  <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium" href="/library">รายการของฉัน</a>
                </div>
              </div>
            </div>
            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative hidden sm:block group">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                  <span className="material-icons text-xl">search</span>
                </span>
                <input 
                  className="block w-full pl-10 pr-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-full leading-5 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-all duration-300 w-64" 
                  placeholder="ค้นหาเรื่อง, ประเภท..." 
                  type="text"
                />
              </div>
              {/* Theme Toggle Placeholder (Visual Only) */}
              <button className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none">
                <span className="material-icons">dark_mode</span>
              </button>
              {/* Profile */}
              <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden ring-2 ring-transparent hover:ring-primary transition-all cursor-pointer">
                <Image 
                  alt="User Profile Avatar" 
                  className="h-full w-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdNMesUNThpjqYDd7zJFu7zUAtkFrc8zmXcPJdpxMOYbic-vYelkTDNuOsX_GH95d97FYiiIN39evFtQf5JMzPaHJ2KLBE_h0noOg7-On_fHiBDy2ElySmurmycFlhXUHTegGQARUUpzoQjhQwzDi5CuBEv29_hyYkV4sO7tHK5ueQItinU7D5DGaxpS2fAl0hSakxP8_ygmXKXmR61ADk4T6cnfWXKQZh7gMVzuDHNBeF1tG9nebwunnaGgHLL9smbP-hZD_lKmOA"
                  width={32}
                  height={32}
                />
              </div>
              <a href="/topup" className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-all flex-shrink-0">
                <span className="material-icons">monetization_on</span>
                <span className="hidden sm:inline">เติมเหรียญ</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <div className="relative w-full h-[85vh] sm:h-[70vh] flex items-end">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <Image 
              alt="Cinematic Hero Background" 
              className="w-full h-full object-cover object-center scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXNHR85-g2l1L0Q1hfxM_QvIs4zPAnbyB3wpuahptPZAt-our6aAtrPY3o_CouiNUEmpieu5GgYF0j0SUvN7eoRxdERe7GiK9ViWNIwwQBoAPIzy5MBH6PeMyp207dgzZdEnlGT-EfYQnoGmYqcQ3W1azQ_k9l2CiGz3FqIUSJeYNFeHggdYcxk3arooWjO3jj8b8tkx1nOwylViqiOYxpCzUuf4htrLsNhSd3Liy06dfK4tn6JODnwqO115ZnXWRS4A-4wtHNjPLS"
              fill
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark via-background-light/20 dark:via-background-dark/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-background-light dark:from-background-dark via-background-light/40 dark:via-background-dark/80 to-transparent"></div>
          </div>
          {/* Hero Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
            <div className="max-w-2xl space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-2 py-1 rounded bg-primary/20 text-primary text-xs font-bold tracking-wider uppercase border border-primary/20 backdrop-blur-sm">ซีรีส์ใหม่</span>
                <span className="text-slate-600 dark:text-slate-300 text-sm font-medium flex items-center gap-1">
                  <span className="material-icons text-primary text-base">star</span> คะแนน 4.9
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-none tracking-tight text-slate-900 dark:text-white drop-shadow-sm">
                Midnight <span className="text-primary">Echoes</span>
              </h1>
              <div className="flex items-center gap-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium">
                <span>2023</span>
                <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                <span>ไซไฟระทึกขวัญ</span>
                <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                <span>1 ฤดูกาล</span>
                <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                <span className="px-2 py-0.5 border border-slate-300 dark:border-slate-600 rounded text-xs">4K</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-lg line-clamp-3 md:line-clamp-none max-w-xl">
                เมื่อสัญญาณลึกลับรบกวนระบบไฟฟ้าทั่วโลก กลุ่มพี่น้องที่ห่างเหินกันต้องมารวมตัวกันอีกครั้งเพื่อเปิดโปงความจริงที่ฝังอยู่ในมรดกของพ่อ ก่อนที่ความเงียบจะมาถึงตลอดกาล
              </p>
              <div className="flex items-center gap-4 pt-4">
                <button className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/25">
                  <span className="material-icons">play_arrow</span>
                  ดูเลย
                </button>
                <button className="flex items-center gap-2 bg-white/80 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-700 text-slate-900 dark:text-white backdrop-blur-md px-6 py-3.5 rounded-lg font-semibold transition-all border border-slate-200 dark:border-slate-600">
                  <span className="material-icons">add</span>
                  เพิ่มในรายการ
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative z-20 -mt-8 pb-20 space-y-12 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Continue Watching (Horizontal Cards) */}
          <section>
            <div className="flex items-center justify-between mb-4 px-2">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">ดูต่อ</h2>
              <div className="flex gap-2">
                <button className="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors">
                  <span className="material-icons">chevron_left</span>
                </button>
                <button className="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors">
                  <span className="material-icons">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Item 1 */}
              <div className="group relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md dark:shadow-none transition-all">
                <div className="relative aspect-video overflow-hidden">
                  <Image 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    alt="Still frame from a sci-fi movie scene" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUuhgBsiQo8SNdXLGB-JC37joQYMv-XOQxweEJJRd-o3VVSr49793xaeYqLACSGM5CMBFFqzeXy3UJEO2Kyj36l12OUJo_Sg5Kibsp4uinYA3SQgHQlc3WiGYfmSVfySR_pdKZoThPHs0hcWGPmI-UFeSFvAkh7uYS9EF4yp-qI_3TFusRjdY0Ne23Zxzs5XLwOypbmm4HxB6EYoRyOkdTc4SJ2awBMXd3Vt_fOYcWkiyT2kXUO9ap-fj6UINUVHmK4mRrqgaZGEBx"
                    fill
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-primary/90 text-white rounded-full p-3 shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <span className="material-icons text-2xl">play_arrow</span>
                    </span>
                  </div>
                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-700">
                    <div className="h-full bg-primary w-2/3"></div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white truncate">คืนหมอย: ตอนที่ 4</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">เหลืออีก 24 นาที</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="group relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md dark:shadow-none transition-all">
                <div className="relative aspect-video overflow-hidden">
                  <Image 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    alt="Dramatic scene from a black and white film" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdBnKZiOqkXsjWHvOA1TUR9piryYn0OB2Fda2NiVpeAsrUV0hSYnrAl4Sh1Le39Tl12BMSgADUpvqtmO8Q43cfffI5dHyIMSPUkrThGdIS2PDGZxIkswYg75YLCzhAl-XimUDRHM_NNlQZHrpretwy5ZkQP_pn7L1-TIXXxY7M9wOEQpRuHMFpIpEAM1FyIWJZyW6PLToTv2EoZvIMC-Iqm2K7fkRtYg1ao0ZSOx6Fot97koh0yrkOtwmVabGHjxBZC1_lndjBtp1g"
                    fill
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-primary/90 text-white rounded-full p-3 shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <span className="material-icons text-2xl">play_arrow</span>
                    </span>
                  </div>
                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-700">
                    <div className="h-full bg-primary w-1/4"></div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white truncate">สถาปนิก</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">เหลืออีก 45 นาที</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="group relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md dark:shadow-none transition-all hidden lg:block">
                <div className="relative aspect-video overflow-hidden">
                  <Image 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    alt="Forest landscape with foggy atmosphere" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxXRVoWYMZ55SPLtL2B0flfoS16J0OoCEzvR8pgtcorJoLiKSPqPXy6ZTPR3yKawu-_7Z9GswsEuMv-ppI_GKK_0f-KJtb1cYEKw1xKEL7jBOcl8fK7u6hS7owst4GOhRHs2F19vMGZvOWZjked7DIufCyKFbVxQJQ--8RuYgPo1xFMzqFOqzj6_KS_E9cNL8a2rE7yRVQhm0O24P6xnc-LyA4WlZZv5wp0CTBafyH0rQSBBd6zwK-lOcH9P7W-3Uq3BVRMbHsai3X"
                    fill
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-primary/90 text-white rounded-full p-3 shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <span className="material-icons text-2xl">play_arrow</span>
                    </span>
                  </div>
                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-700">
                    <div className="h-full bg-primary w-[90%]"></div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white truncate">หลงในป่าสน</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">เหลืออีก 3 นาที</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="group relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md dark:shadow-none transition-all hidden lg:block">
                <div className="relative aspect-video overflow-hidden">
                  <Image 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    alt="Abstract colorful light painting" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2mry4lmAa76uixPamAqm5YI471ne2NwtFDsoa0Uizw5P8jY7ln76wbQRPxpUMvpIl8kQhDYAvhNOrSvMeeEJI7LoQAsOebsZjSIvWRiUqcaK71JTMraxyCngCgrh-aE4YwlhD_WLa8EdAZdFxcQeoEV-0YliOAAMX90J8mnuMy5U0pKl92qTmdYIGphPhOZEt_WwDLDONNYZgP-a3cVTFA2vHV_6buAEWOuJoIK9F1DWWLD5BZagJny8eiqyuQ-VRehtuchHnAAwm"
                    fill
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-primary/90 text-white rounded-full p-3 shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <span className="material-icons text-2xl">play_arrow</span>
                    </span>
                  </div>
                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-700">
                    <div className="h-full bg-primary w-1/2"></div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white truncate">การเปลี่ยนสี</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">เหลืออีก 12 นาที</p>
                </div>
              </div>
            </div>
          </section>

          {/* Trending Now (Vertical Posters) */}
          <section>
            <div className="flex items-center justify-between mb-4 px-2">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">กำลังมาแรง</h2>
              <a className="text-sm font-medium text-primary hover:text-blue-500 transition-colors" href="#">ดูทั้งหมด</a>
            </div>
            <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory">
              {/* Poster 1 */}
              <div className="flex-none w-[160px] sm:w-[200px] snap-start group cursor-pointer">
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-2 shadow-lg ring-1 ring-white/10 dark:ring-white/5 hover:ring-primary transition-all duration-300">
                  <Image 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                    alt="Movie poster with dark moody clouds" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV03LqFCOPy7nWdCT95mEJDP76WIdiaj-s1c0p8Az6UmI7Bmb82b9-mcmBvzY3FSwZ5Zjw4EU5u2uNYqAKF4aC2BD3__yF-tsI04QgXhv-jCCfkS-ODi5cQYA662HhumABT9TWfcbIgqModTlaLN8MVNVZzNGqNU7x0IT4aGO46W8j9RPVuIY7diT-75Oi-dEIHP8blgB3itfR5x8ti1NX9tlpAKWaLV-YrBO5S8ZeWp33IExQrAjZon_xMDuhuvvR3yhDqBRmEPUT"
                    fill
                  />
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-1.5 py-0.5 rounded">HD</div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-primary/90 text-white rounded-full p-3 shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <span className="material-icons text-2xl">play_arrow</span>
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm truncate group-hover:text-primary transition-colors">ขอบฟ้ามืด</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">แอ็คชัน, ระทึกขวัญ</p>
              </div>

              {/* Poster 2 */}
              <div className="flex-none w-[160px] sm:w-[200px] snap-start group cursor-pointer">
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-2 shadow-lg ring-1 ring-white/10 dark:ring-white/5 hover:ring-primary transition-all duration-300">
                  <Image 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                    alt="Abstract colorful shapes poster" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf2ilNYR_AJ_caxSQ-bx9QcLTLIgpTJStunPzbsykfLCXtQljTgdnCLjtW9A1BOCL9eUYvOr_ZU_uMRZiPbgEchygZ44K2AogupQDs3CLzPvdraSjbaGUTG0fnLa8U2JvFOWichVxiiADU8KC07qM9xTwZt_sAADIWEv1xZI5hM2eDbySzosup2ol6CzzsB8VXVkhGVlg7WLSxuPQmKev-iJT0wRlN1LNGtUZ7yBxR5Bk0bfymA7rzwtrPUl-nEtIHkPF03R3yhVQT"
                    fill
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-primary/90 text-white rounded-full p-3 shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <span className="material-icons text-2xl">play_arrow</span>
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm truncate group-hover:text-primary transition-colors">ทฤษฎีสี</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">สารคดี</p>
              </div>

              {/* Poster 3 */}
              <div className="flex-none w-[160px] sm:w-[200px] snap-start group cursor-pointer">
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-2 shadow-lg ring-1 ring-white/10 dark:ring-white/5 hover:ring-primary transition-all duration-300">
                  <Image 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                    alt="Person standing in a futuristic tunnel" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5IOPD-pzgPRVy13cqvzDzkPc7rImUNGpoqix1IQkVt4_b_TjXObFcPbsaYEA0qROIJNJHY-eVTITwQnxE7ycS3uXHfydPGjSDGKo1RzyApx3L2ZC-0vzGBQwHU3g0OAZlH0Q6FA45secP_ZHUfChmqjm0DSts4CYqRiMArQD351IUYBysrJbJjaY5nkBaYBO0G62jOqS51DNR36d4ajih4xSZIzh0Cf8kJvJz0NqK3u6iaS0kd-28Cy4ZHFeLhVOT5INf0UH6e8O3"
                    fill
                  />
                  <div className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-1.5 py-0.5 rounded shadow-sm">TOP 10</div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-primary/90 text-white rounded-full p-3 shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <span className="material-icons text-2xl">play_arrow</span>
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm truncate group-hover:text-primary transition-colors">การข้ามผ่าน</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">ไซไฟ</p>
              </div>

              {/* Poster 4 */}
              <div className="flex-none w-[160px] sm:w-[200px] snap-start group cursor-pointer">
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-2 shadow-lg ring-1 ring-white/10 dark:ring-white/5 hover:ring-primary transition-all duration-300">
                  <Image 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                    alt="Close up of a campfire at night" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvVmjimgHqLdlD4WO_FVF2Ke8m3XoYE3me0RCsw1i6dPkmHaSxASuEiRwFUZo0f8w3u5RLmtarvPSLmbvOg1aA_-K1H56HB1yLj0AMSCtNwhtjfV8J7DX8G7GVyXoPMYtJHN1jx_xal2I7ZHve5g4JttLPmvk9_7p8T7inw0UIvW6h46dCPTjiIh-XE50DKuK32r8xLBVrCnYAuo9aW417FA4-VsOFsb7DywElGJPnB7W-IND0i77KIKPfAtLiphXRN5JsAs-OVBjU"
                    fill
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-primary/90 text-white rounded-full p-3 shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <span className="material-icons text-2xl">play_arrow</span>
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm truncate group-hover:text-primary transition-colors">เปลวไฟ</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">ดราม่า</p>
              </div>

              {/* Poster 5 */}
              <div className="flex-none w-[160px] sm:w-[200px] snap-start group cursor-pointer">
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-2 shadow-lg ring-1 ring-white/10 dark:ring-white/5 hover:ring-primary transition-all duration-300">
                  <Image 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                    alt="Futuristic cyberpunk city street" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhFojxccberdc9fXe-Ta3HP3tk8uiKEiY2o68CeueiBPxpP8xC06SOJLJ4jecvD5pmJXKGj-CFsJ60Z0iGG2DagXiIZUM4qN3P3Avmnx8V9Z0ci6Gzk-7Bn7Z-hS1QBNYq5YW_0O6zwuCY9iwcsouSf6cdQbCCUqmtZ0BNhXQOfhcDdGlGDfgqtHFmzN0GXUFLlzyrqbTW_Q3Ys7cMwgw5-Gu6dQhGadlpiKweZXD2jZOfu93E56BerXsJb01dxhhdaBUM81rhb_2F"
                    fill
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-primary/90 text-white rounded-full p-3 shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <span className="material-icons text-2xl">play_arrow</span>
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm truncate group-hover:text-primary transition-colors">พัลส์นีออน</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">ไซเบอร์พังค์</p>
              </div>

              {/* Poster 6 */}
              <div className="flex-none w-[160px] sm:w-[200px] snap-start group cursor-pointer">
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-2 shadow-lg ring-1 ring-white/10 dark:ring-white/5 hover:ring-primary transition-all duration-300">
                  <Image 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                    alt="Two people laughing at a diner" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYXIxKcq5w1TRAkDDWxff6orlRlk8j4PPt6xSJC5NO9KwRRH9k-6gljsgHPPHlFnr4MaRWKoOe7SrCrX_9BnHro0xmv82emUYvFIj8VKrn-ififDJhejOARHCUrLtqLnsYEfLURE_6mN5oG5jYN95RPw3GrY_jNhZ6tDWxzqAVMXsZIdNr7Y9duVXMt8tdoi0-JZ2gEGTvbYzZkm5obFtnYUR_CtB3MStyLQ91MHQXbpdmAYcARl6g1-fbJUxrq4cIiWWxwuAwTd-K"
                    fill
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-primary/90 text-white rounded-full p-3 shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <span className="material-icons text-2xl">play_arrow</span>
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm truncate group-hover:text-primary transition-colors">เพื่อนรัก</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">ตลก</p>
              </div>
            </div>
          </section>

          {/* New Releases (Vertical Posters) */}
          <section>
            <div className="flex items-center justify-between mb-4 px-2">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">มาใหม่</h2>
              <a className="text-sm font-medium text-primary hover:text-blue-500 transition-colors" href="#">ดูทั้งหมด</a>
            </div>
            <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory">
              {/* Poster 1 */}
              <div className="flex-none w-[160px] sm:w-[200px] snap-start group cursor-pointer">
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-2 shadow-lg ring-1 ring-white/10 dark:ring-white/5 hover:ring-primary transition-all duration-300">
                  <Image 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                    alt="Minimalist abstract face art" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_YrICUjF8LKaCer27Ym3JgIe46IPfR9DyNRQ576uk-rqA5S7AxcLDZNohS7cbl_M9tJlVCuWwXHxuRh2fIPlzT9fLUn3aUTfbQO_wCxaRQM7nOsWy4XU-TYpKl9tQzDejpDuWggE_f2EWrpE6-ytwTJK6e_wabaUygvWEdNh2rkFBq-FULoCBbq6XNJ3tAYYiPXZRxzlkJPn7GuZkhmuPzzPxfTCThGvi3YFPOCcj0Ejqlgx966yAQSrBHQnXIRG4RIe45Gy4sSjL"
                    fill
                  />
                  <div className="absolute top-2 left-2 bg-rose-500 text-white text-xs font-bold px-1.5 py-0.5 rounded shadow-sm">NEW</div>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm truncate group-hover:text-primary transition-colors">ความเงียบ</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">สยองขวัญ</p>
              </div>

              {/* Poster 2 */}
              <div className="flex-none w-[160px] sm:w-[200px] snap-start group cursor-pointer">
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-2 shadow-lg ring-1 ring-white/10 dark:ring-white/5 hover:ring-primary transition-all duration-300">
                  <Image 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                    alt="Silhouette of person on a mountain" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOZVHJ7L_YLwm4Wgn0aAZTdXVgCXnFHVKXzeAnNP4zm6ltYAjhMTbv6rqhddNnJr72cy7ueTZZV0Zn4pOx-PngJx94WwkB4R2clNKUAzV9NvPuFdsTPDcEMLvcBEk-Cs9v_Uu7IBgV49GWAiq20P7FDhSFEMKwg_HnCEo1byIXN4-JN1RN1gIii7leFXpoeHY2EE5zuOkt2xijq4kOvmvFIwB4UHEqVFc_R5gm7NtD6pZSDtGZVBSETSdwl1hwcF6DokJxyiyFmH5x"
                    fill
                  />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm truncate group-hover:text-primary transition-colors">ยอดเขา</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">ผจญภัย</p>
              </div>

              {/* Poster 3 */}
              <div className="flex-none w-[160px] sm:w-[200px] snap-start group cursor-pointer">
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-2 shadow-lg ring-1 ring-white/10 dark:ring-white/5 hover:ring-primary transition-all duration-300">
                  <Image 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                    alt="Dark forest path with fog" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfOhZ64qiSDlxtQwSz54RizdKuiSBFKzBNBhhrKoGcydCu4G_cUrJMoDYLhXxksVU09ba8iLIUQLvqWOzCVUiaDihVdhqT5bdPtfDeyupZKwpFErUKeaczE0GTAae83EhV68dJJ3hWLs9ciRdhOXFKuh7nZo5VgK4yglPKxNO9jcEYLfJPs_cwPhl8i3x-20yw3VFo2SZ22520qHZnmBixYIQHC89OreCRmDK2YkGiLVJW2q6gX6W7Dr0ycYG_3xQkQ_3Gp1kkz6W1"
                    fill
                  />
                  <div className="absolute top-2 left-2 bg-rose-500 text-white text-xs font-bold px-1.5 py-0.5 rounded shadow-sm">NEW</div>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm truncate group-hover:text-primary transition-colors">ใต้พงหญ้า</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">ระทึกขวัญ</p>
              </div>

              {/* Poster 4 */}
              <div className="flex-none w-[160px] sm:w-[200px] snap-start group cursor-pointer">
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-2 shadow-lg ring-1 ring-white/10 dark:ring-white/5 hover:ring-primary transition-all duration-300">
                  <Image 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                    alt="Vintage family photo style" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDakUrtzX8o858pm7-AuHzP-OoRmjLzSsZ0TOv4v5PtoKP6pgSCE39_jHX53IQ683o_XmE6wdSKLbfpTDZEgIvCOF1ntwSd2SO_1d18IEzm6CcfQFLEaTkXnzLQchcIUaxFe6DlOCJX_jNyRr6yzGVLHlFL1spE7mGTS8yYzr2KTfWxbd3IpZPvfcqjsP0zh8Dves25kw8a0LpOy7bawDAZFQDN8yoTsPDAvWqG3PCrPOSXeOeaIYiTh2SpNLbiYpRFjJYEURLZ7vtF"
                    fill
                  />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm truncate group-hover:text-primary transition-colors">1984 ย้อนอดีต</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">ประวัติศาสตร์</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-slate-900 dark:text-white font-bold mb-4">บุ๊ค<span className="text-primary">บิ๊ก</span></h3>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li><a className="hover:text-primary transition-colors" href="#">เกี่ยวกับเรา</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">ร่วมงานกับเรา</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">ข่าวสาร</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-slate-900 dark:text-white font-semibold mb-4">เลือกดู</h3>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li><a className="hover:text-primary transition-colors" href="#">มาใหม่</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">ยอดนิยม</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">หมวดหมู่</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-slate-900 dark:text-white font-semibold mb-4">ฝ่ายสนับสนุน</h3>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li><a className="hover:text-primary transition-colors" href="#">ศูนย์ช่วยเหลือ</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">เงื่อนไขการใช้งาน</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">นโยบายความเป็นส่วนตัว</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-slate-900 dark:text-white font-semibold mb-4">ติดต่อ</h3>
              <div className="flex space-x-4">
                <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a9.001 9.001 0 01-7.432 0m9.032-4.026A9.001 9.001 0 0112 3c-4.474 0-8.268 3.12-9.032 7.326m0 0A9.001 9.001 0 0012 21c4.474 0 8.268-3.12 9.032-7.326" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 dark:text-slate-400">
            <p>© 2023 บุ๊คบิ๊ก จำกัด สงวนลิขสิทธิ์</p>
            <p className="mt-2 md:mt-0">ทำสำหรับคนรักซีรีส์สั้น</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
