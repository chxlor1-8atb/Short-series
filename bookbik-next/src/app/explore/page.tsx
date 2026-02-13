'use client';

import Image from "next/image";

export default function Explore() {
  return (
    <div className="bg-background-light text-text-main font-display antialiased selection:bg-primary selection:text-white transition-colors duration-300 min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <a className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" href="/">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform">บ</div>
                <span className="font-bold text-xl tracking-tight text-slate-800">บุ๊ค<span className="text-primary">บิ๊ก</span></span>
              </a>
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-6">
                  <a className="text-slate-500 hover:text-primary transition-colors text-sm font-medium" href="/">หน้าแรก</a>
                  <a className="text-primary font-medium text-sm" href="/explore">สำรวจ</a>
                  <a className="text-slate-500 hover:text-primary transition-colors text-sm font-medium" href="/library">คลัง</a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full text-slate-500 hover:bg-slate-50 transition-colors focus:outline-none">
                <span className="material-icons">notifications</span>
              </button>
              <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden ring-2 ring-transparent hover:ring-primary transition-all cursor-pointer">
                <Image alt="User Profile Avatar" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdNMesUNThpjqYDd7zJFu7zUAtkFrc8zmXcPJdpxMOYbic-vYelkTDNuOsX_GH95d97FYiiIN39evFtQf5JMzPaHJ2KLBE_h0noOg7-On_fHiBDy2ElySmurmycFlhXUHTegGQARUUpzoQjhQwzDi5CuBEv29_hyYkV4sO7tHK5ueQItinU7D5DGaxpS2fAl0hSakxP8_ygmXKXmR61ADk4T6cnfWXKQZh7gMVzuDHNBeF1tG9nebwunnaGgHLL9smbP-hZD_lKmOA" width={32} height={32} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* Search */}
        <section className="max-w-3xl mx-auto w-full">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="material-icons text-slate-400 text-2xl group-focus-within:text-primary transition-colors">search</span>
            </div>
            <input autoFocus className="block w-full pl-12 pr-4 py-4 bg-slate-50 border-0 ring-1 ring-slate-200 rounded-2xl text-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-primary focus:bg-white shadow-sm transition-all duration-300" placeholder="ค้นหาซีรีส์ ตอน หรือประเภท..." type="text" />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <button className="p-2 rounded-full text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-colors">
                <span className="material-icons">tune</span>
              </button>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-6">เรียกดูหมวดหมู่</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* ยอดนิยม */}
            <a className="group relative overflow-hidden rounded-xl aspect-[1.6/1] bg-rose-50 hover:shadow-lg hover:shadow-rose-100 transition-all duration-300 border border-rose-100" href="#">
              <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                <span className="font-bold text-lg text-rose-900">ยอดนิยม</span>
                <div className="self-end bg-white/50 backdrop-blur-sm p-2 rounded-full text-rose-600 group-hover:scale-110 transition-transform">
                  <span className="material-icons">trending_up</span>
                </div>
              </div>
              <div className="absolute -right-4 -bottom-8 w-32 h-32 bg-rose-200/50 rounded-full blur-2xl group-hover:bg-rose-300/50 transition-colors"></div>
              <Image alt="Trending decoration" className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-20 mix-blend-multiply group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV03LqFCOPy7nWdCT95mEJDP76WIdiaj-s1c0p8Az6UmI7Bmb82b9-mcmBvzY3FSwZ5Zjw4EU5u2uNYqAKF4aC2BD3__yF-tsI04QgXhv-jCCfkS-ODi5cQYA662HhumABT9TWfcbIgqModTlaLN8MVNVZzNGqNU7x0IT4aGO46W8j9RPVuIY7diT-75Oi-dEIHP8blgB3itfR5x8ti1NX9tlpAKWaLV-YrBO5S8ZeWp33IExQrAjZon_xMDuhuvvR3yhDqBRmEPUT" fill sizes="50vw" />
            </a>
            {/* เรื่องใหม่ */}
            <a className="group relative overflow-hidden rounded-xl aspect-[1.6/1] bg-blue-50 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 border border-blue-100" href="#">
              <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                <span className="font-bold text-lg text-blue-900">เรื่องใหม่</span>
                <div className="self-end bg-white/50 backdrop-blur-sm p-2 rounded-full text-blue-600 group-hover:scale-110 transition-transform">
                  <span className="material-icons">new_releases</span>
                </div>
              </div>
              <div className="absolute -right-4 -bottom-8 w-32 h-32 bg-blue-200/50 rounded-full blur-2xl group-hover:bg-blue-300/50 transition-colors"></div>
              <Image alt="New releases decoration" className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-20 mix-blend-multiply group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_YrICUjF8LKaCer27Ym3JgIe46IPfR9DyNRQ576uk-rqA5S7AxcLDZNohS7cbl_M9tJlVCuWwXHxuRh2fIPlzT9fLUn3aUTfbQO_wCxaRQM7nOsWy4XU-TYpKl9tQzDejpDuWggE_f2EWrpE6-ytwTJK6e_wabaUygvWEdNh2rkFBq-FULoCBbq6XNJ3tAYYiPXZRxzlkJPn7GuZkhmuPzzPxfTCThGvi3YFPOCcj0Ejqlgx966yAQSrBHQnXIRG4RIe45Gy4sSjL" fill sizes="50vw" />
            </a>
            {/* ไซไฟ */}
            <a className="group relative overflow-hidden rounded-xl aspect-[1.6/1] bg-indigo-50 hover:shadow-lg hover:shadow-indigo-100 transition-all duration-300 border border-indigo-100" href="#">
              <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                <span className="font-bold text-lg text-indigo-900">ไซไฟ</span>
                <div className="self-end bg-white/50 backdrop-blur-sm p-2 rounded-full text-indigo-600 group-hover:scale-110 transition-transform">
                  <span className="material-icons">rocket_launch</span>
                </div>
              </div>
              <div className="absolute -right-4 -bottom-8 w-32 h-32 bg-indigo-200/50 rounded-full blur-2xl group-hover:bg-indigo-300/50 transition-colors"></div>
              <Image alt="Sci-Fi decoration" className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-20 mix-blend-multiply group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXNHR85-g2l1L0Q1hfxM_QvIs4zPAnbyB3wpuahptPZAt-our6aAtrPY3o_CouiNUEmpieu5GgYF0j0SUvN7eoRxdERe7GiK9ViWNIwwQBoAPIzy5MBH6PeMyp207dgzZdEnlGT-EfYQnoGmYqcQ3W1azQ_k9l2CiGz3FqIUSJeYNFeHggdYcxk3arooWjO3jj8b8tkx1nOwylViqiOYxpCzUuf4htrLsNhSd3Liy06dfK4tn6JODnwqO115ZnXWRS4A-4wtHNjPLS" fill sizes="50vw" />
            </a>
            {/* ดราม่า */}
            <a className="group relative overflow-hidden rounded-xl aspect-[1.6/1] bg-amber-50 hover:shadow-lg hover:shadow-amber-100 transition-all duration-300 border border-amber-100" href="#">
              <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                <span className="font-bold text-lg text-amber-900">ดราม่า</span>
                <div className="self-end bg-white/50 backdrop-blur-sm p-2 rounded-full text-amber-600 group-hover:scale-110 transition-transform">
                  <span className="material-icons">theater_comedy</span>
                </div>
              </div>
              <div className="absolute -right-4 -bottom-8 w-32 h-32 bg-amber-200/50 rounded-full blur-2xl group-hover:bg-amber-300/50 transition-colors"></div>
              <Image alt="Drama decoration" className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-20 mix-blend-multiply group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdBnKZiOqkXsjWHvOA1TUR9piryYn0OB2Fda2NiVpeAsrUV0hSYnrAl4Sh1Le39Tl12BMSgADUpvqtmO8Q43cfffI5dHyIMSPUkrThGdIS2PDGZxIkswYg75YLCzhAl-XimUDRHM_NNlQZHrpretwy5ZkQP_pn7L1-TIXXxY7M9wOEQpRuHMFpIpEAM1FyIWJZyW6PLToTv2EoZvIMC-Iqm2K7fkRtYg1ao0ZSOx6Fot97koh0yrkOtwmVabGHjxBZC1_lndjBtp1g" fill sizes="50vw" />
            </a>
            {/* ระทึกขวัญ */}
            <a className="group relative overflow-hidden rounded-xl aspect-[1.6/1] bg-slate-100 hover:shadow-lg hover:shadow-slate-200 transition-all duration-300 border border-slate-200" href="#">
              <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                <span className="font-bold text-lg text-slate-800">ระทึกขวัญ</span>
                <div className="self-end bg-white/50 backdrop-blur-sm p-2 rounded-full text-slate-600 group-hover:scale-110 transition-transform">
                  <span className="material-icons">psychology</span>
                </div>
              </div>
              <div className="absolute -right-4 -bottom-8 w-32 h-32 bg-slate-300/50 rounded-full blur-2xl group-hover:bg-slate-400/50 transition-colors"></div>
              <Image alt="Thriller decoration" className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-20 mix-blend-multiply group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfOhZ64qiSDlxtQwSz54RizdKuiSBFKzBNBhhrKoGcydCu4G_cUrJMoDYLhXxksVU09ba8iLIUQLvqWOzCVUiaDihVdhqT5bdPtfDeyupZKwpFErUKeaczE0GTAae83EhV68dJJ3hWLs9ciRdhOXFKuh7nZo5VgK4yglPKxNO9jcEYLfJPs_cwPhl8i3x-20yw3VFo2SZ22520qHZnmBixYIQHC89OreCRmDK2YkGiLVJW2q6gX6W7Dr0ycYG_3xQkQ_3Gp1kkz6W1" fill sizes="50vw" />
            </a>
            {/* โรแมนติก */}
            <a className="group relative overflow-hidden rounded-xl aspect-[1.6/1] bg-pink-50 hover:shadow-lg hover:shadow-pink-100 transition-all duration-300 border border-pink-100" href="#">
              <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                <span className="font-bold text-lg text-pink-900">โรแมนติก</span>
                <div className="self-end bg-white/50 backdrop-blur-sm p-2 rounded-full text-pink-600 group-hover:scale-110 transition-transform">
                  <span className="material-icons">favorite</span>
                </div>
              </div>
              <div className="absolute -right-4 -bottom-8 w-32 h-32 bg-pink-200/50 rounded-full blur-2xl group-hover:bg-pink-300/50 transition-colors"></div>
              <Image alt="Romance decoration" className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-20 mix-blend-multiply group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDakUrtzX8o858pm7-AuHzP-OoRmjLzSsZ0TOv4v5PtoKP6pgSCE39_jHX53IQ683o_XmE6wdSKLbfpTDZEgIvCOF1ntwSd2SO_1d18IEzm6CcfQFLEaTkXnzLQchcIUaxFe6DlOCJX_jNyRr6yzGVLHlFL1spE7mGTS8yYzr2KTfWxbd3IpZPvfcqjsP0zh8Dves25kw8a0LpOy7bawDAZFQDN8yoTsPDAvWqG3PCrPOSXeOeaIYiTh2SpNLbiYpRFjJYEURLZ7vtF" fill sizes="50vw" />
            </a>
            {/* ตลก */}
            <a className="group relative overflow-hidden rounded-xl aspect-[1.6/1] bg-yellow-50 hover:shadow-lg hover:shadow-yellow-100 transition-all duration-300 border border-yellow-100" href="#">
              <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                <span className="font-bold text-lg text-yellow-900">ตลก</span>
                <div className="self-end bg-white/50 backdrop-blur-sm p-2 rounded-full text-yellow-600 group-hover:scale-110 transition-transform">
                  <span className="material-icons">sentiment_very_satisfied</span>
                </div>
              </div>
              <div className="absolute -right-4 -bottom-8 w-32 h-32 bg-yellow-200/50 rounded-full blur-2xl group-hover:bg-yellow-300/50 transition-colors"></div>
              <Image alt="Comedy decoration" className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-20 mix-blend-multiply group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYXIxKcq5w1TRAkDDWxff6orlRlk8j4PPt6xSJC5NO9KwRRH9k-6gljsgHPPHlFnr4MaRWKoOe7SrCrX_9BnHro0xmv82emUYvFIj8VKrn-ififDJhejOARHCUrLtqLnsYEfLURE_6mN5oG5jYN95RPw3GrY_jNhZ6tDWxzqAVMXsZIdNr7Y9duVXMt8tdoi0-JZ2gEGTvbYzZkm5obFtnYUR_CtB3MStyLQ91MHQXbpdmAYcARl6g1-fbJUxrq4cIiWWxwuAwTd-K" fill sizes="50vw" />
            </a>
            {/* สารคดี */}
            <a className="group relative overflow-hidden rounded-xl aspect-[1.6/1] bg-emerald-50 hover:shadow-lg hover:shadow-emerald-100 transition-all duration-300 border border-emerald-100" href="#">
              <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                <span className="font-bold text-lg text-emerald-900">สารคดี</span>
                <div className="self-end bg-white/50 backdrop-blur-sm p-2 rounded-full text-emerald-600 group-hover:scale-110 transition-transform">
                  <span className="material-icons">videocam</span>
                </div>
              </div>
              <div className="absolute -right-4 -bottom-8 w-32 h-32 bg-emerald-200/50 rounded-full blur-2xl group-hover:bg-emerald-300/50 transition-colors"></div>
              <Image alt="Documentary decoration" className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-20 mix-blend-multiply group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf2ilNYR_AJ_caxSQ-bx9QcLTLIgpTJStunPzbsykfLCXtQljTgdnCLjtW9A1BOCL9eUYvOr_ZU_uMRZiPbgEchygZ44K2AogupQDs3CLzPvdraSjbaGUTG0fnLa8U2JvFOWichVxiiADU8KC07qM9xTwZt_sAADIWEv1xZI5hM2eDbySzosup2ol6CzzsB8VXVkhGVlg7WLSxuPQmKev-iJT0wRlN1LNGtUZ7yBxR5Bk0bfymA7rzwtrPUl-nEtIHkPF03R3yhVQT" fill sizes="50vw" />
            </a>
          </div>
        </section>

        {/* Recent Searches */}
        <section className="border-t border-slate-100 pt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-900">การค้นหาล่าสุด</h2>
            <button className="text-sm font-medium text-slate-500 hover:text-rose-500 transition-colors">ลบทั้งหมด</button>
          </div>
          <div className="flex flex-col gap-2">
            {['เมืองไซเบอร์พังก์', 'ซีรีส์สั้นเกี่ยวกับการเดินทางข้ามเวลา', 'สถาปนิก'].map((term) => (
              <div key={term} className="group flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                <div className="flex items-center gap-4">
                  <span className="material-icons text-slate-300 group-hover:text-primary transition-colors">history</span>
                  <span className="text-slate-700 font-medium">{term}</span>
                </div>
                <button className="text-slate-300 hover:text-slate-500 transition-colors p-1">
                  <span className="material-icons text-lg">close</span>
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 pt-12 pb-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-slate-900 font-bold mb-4">บุ๊ค<span className="text-primary">บิ๊ก</span></h3>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a className="hover:text-primary transition-colors" href="#">เกี่ยวกับเรา</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">ร่วมงานกับเรา</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">ข่าวสาร</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-slate-900 font-semibold mb-4">เรียกดู</h3>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a className="hover:text-primary transition-colors" href="#">เรื่องใหม่</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">ยอดนิยม</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">หมวดหมู่</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-slate-900 font-semibold mb-4">สนับสนุน</h3>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a className="hover:text-primary transition-colors" href="#">ศูนย์ช่วยเหลือ</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">ข้อกำหนดการใช้งาน</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">นโยบายความเป็นส่วนตัว</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-slate-900 font-semibold mb-4">ติดต่อ</h3>
              <div className="flex space-x-4">
                <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-icons">facebook</span></a>
                <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-icons">rss_feed</span></a>
                <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-icons">share</span></a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>© 2024 บุ๊คบิ๊ก สงวนลิขสิทธิ์</p>
            <p className="mt-2 md:mt-0">ทำสำหรับคนรักซีรีส์สั้น</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
