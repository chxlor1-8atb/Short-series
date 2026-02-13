'use client';

import Image from "next/image";
import Link from "next/link";

export default function History() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased transition-colors duration-300 flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-panel border-b border-slate-200/10 dark:border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" href="/">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform">บ</div>
                <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">บุ๊ค<span className="text-primary">บิ๊ก</span></span>
              </Link>
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-6">
                  <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium">หน้าแรก</Link>
                  <a href="/explore" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium">สำรวจ</a>
                  <a href="/library" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium">คลังของฉัน</a>
                  <a href="/missions" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium">ภารกิจ</a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-300 to-slate-400"></div>
                <div className="hidden sm:block">
                  <div className="text-sm font-medium text-slate-900 dark:text-white">ผู้ใช้งาน</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">ระดับสมาชิก</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <div className="bg-gradient-to-br from-primary/10 to-blue-50 dark:from-primary/5 dark:to-blue-900/20 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">ประวัติการรับชม</h1>
                <p className="text-slate-600 dark:text-slate-400">ซีรีส์ที่คุณได้รับชมไป</p>
              </div>
              <button className="bg-white dark:bg-surface-dark hover:bg-slate-50 dark:hover:bg-surface-dark-hover text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg font-medium border border-slate-200 dark:border-slate-700 transition-colors">
                ล้างประวัติ
              </button>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="border-b border-slate-200 dark:border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8">
              <button className="py-4 px-1 border-b-2 border-primary text-primary font-medium text-sm">
                ทั้งหมด (89)
              </button>
              <button className="py-4 px-1 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 font-medium text-sm">
                วันนี้ (5)
              </button>
              <button className="py-4 px-1 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 font-medium text-sm">
                7 วันล่าสุด (23)
              </button>
              <button className="py-4 px-1 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 font-medium text-sm">
                30 วันล่าสุด (61)
              </button>
            </div>
          </div>
        </div>

        {/* History List */}
        <div className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {/* Today */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">วันนี้</h3>
                <div className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-white dark:bg-surface-dark rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-20 flex-shrink-0 rounded overflow-hidden">
                          <Image 
                            alt={`History ${item}`}
                            className="w-full h-full object-cover"
                            src={`https://picsum.photos/seed/hist${item}/200/300.jpg`}
                            fill
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-slate-900 dark:text-white mb-1">ซีรีส์ประวัติ {item}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">ตอนที่ {item * 2} • {item * 15} นาที</p>
                          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                            <span>ดูเมื่อ {item} ชั่วโมงที่แล้ว</span>
                            <span>•</span>
                            <span>เหลือ {item * 5} นาที</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                            </svg>
                          </button>
                          <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Yesterday */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">เมื่อวานนี้</h3>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-white dark:bg-surface-dark rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-20 flex-shrink-0 rounded overflow-hidden">
                          <Image 
                            alt={`History Yesterday ${item}`}
                            className="w-full h-full object-cover"
                            src={`https://picsum.photos/seed/yest${item}/200/300.jpg`}
                            fill
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-slate-900 dark:text-white mb-1">ซีรีส์เมื่อวาน {item}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">ตอนที่ {item + 5} • {item * 12} นาที</p>
                          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                            <span>ดูเมื่อวานนี้</span>
                            <span>•</span>
                            <span>ดูหมดแล้ว</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                            </svg>
                          </button>
                          <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* This Week */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">สัปดาห์นี้</h3>
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="bg-white dark:bg-surface-dark rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-20 flex-shrink-0 rounded overflow-hidden">
                          <Image 
                            alt={`History Week ${item}`}
                            className="w-full h-full object-cover"
                            src={`https://picsum.photos/seed/week${item}/200/300.jpg`}
                            fill
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-slate-900 dark:text-white mb-1">ซีรีส์สัปดาห์ {item}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">ตอนที่ {item * 3} • {item * 10} นาที</p>
                          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                            <span>ดูเมื่อ {item + 2} วันที่แล้ว</span>
                            <span>•</span>
                            <span>ดู {item * 20}%</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                            </svg>
                          </button>
                          <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Load More */}
            <div className="mt-8 flex justify-center">
              <button className="bg-white dark:bg-surface-dark hover:bg-slate-50 dark:hover:bg-surface-dark-hover text-slate-700 dark:text-slate-300 px-6 py-2 rounded-lg font-medium border border-slate-200 dark:border-slate-700 transition-colors">
                โหลดเพิ่มเติม
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-lg">บ</div>
                <span className="font-bold text-xl">บุ๊ค<span className="text-primary">บิ๊ก</span></span>
              </div>
              <p className="text-slate-400 text-sm">แพลตฟอร์มซีรีส์สั้นอันดับ 1</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">สำรวจ</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">ซีรีส์ใหม่</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ยอดนิยม</a></li>
                <li><a href="#" className="hover:text-white transition-colors">แนะนำ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">บริการ</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">สมาชิก</a></li>
                <li><a href="#" className="hover:text-white transition-colors">เติมเงิน</a></li>
                <li><a href="#" className="hover:text-white transition-colors">คู่มือ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">ติดต่อ</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2024 บุ๊คบิ๊ก. สงวนลิขสิทธิ์</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
