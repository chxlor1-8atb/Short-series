'use client';

import Image from "next/image";

export default function Explore() {
  return (
    <div className="min-h-screen bg-background-light text-text-main font-display antialiased selection:bg-primary selection:text-white transition-colors duration-300 flex flex-col">
      {/* Navigation */}
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
                  <a href="/" className="text-slate-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">หน้าแรก</a>
                  <a href="/explore" className="bg-primary/10 text-primary px-3 py-2 text-sm font-medium rounded-lg">สำรวจ</a>
                  <a href="/library" className="text-slate-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">ห้องสมุด</a>
                  <a href="/missions" className="text-slate-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">ภารกิจ</a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <input 
                  type="text" 
                  placeholder="ค้นหาซีรีส์..." 
                  className="w-64 px-4 py-2 pl-10 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <svg className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <button className="relative p-2 text-slate-600 hover:text-primary transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-300 to-slate-400"></div>
                <div className="hidden sm:block">
                  <div className="text-sm font-medium text-slate-800">ผู้ใช้งาน</div>
                  <div className="text-xs text-slate-500">ระดับสมาชิก</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary/10 to-blue-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">สำรวจซีรีส์ใหม่</h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">ค้นพบซีรีส์สั้นน่าสนใจจากทั่วโลก อัปเดตทุกวัน</p>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">หมวดหมู่ยอดนิยม</h2>
            <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
              {['ทั้งหมด', 'โรแมนติก', 'แอ็กชัน', 'คอมเมดี', 'ดราม่า', 'สยองขวัญ', 'ระทึกใจ', 'แฟนตาซี'].map((category) => (
                <button 
                  key={category}
                  className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    category === 'ทั้งหมด' 
                      ? 'bg-primary text-white' 
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Trending Series */}
        <div className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">กำลังมาแรง</h2>
              <a href="#" className="text-primary hover:text-primary/80 text-sm font-medium">ดูทั้งหมด</a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="group cursor-pointer">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-slate-200 mb-3 group-hover:scale-105 transition-transform">
                    <Image 
                      alt={`Series ${item}`}
                      className="w-full h-full object-cover"
                      src={`https://picsum.photos/seed/series${item}/300/400.jpg`}
                      fill
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <div className="text-white">
                        <div className="text-xs font-medium">ดูเลย</div>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-medium text-sm text-slate-900 line-clamp-1">ซีรีส์ {item}</h3>
                  <p className="text-xs text-slate-500">รอบ {item * 12} ตอน</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* New Releases */}
        <div className="py-8 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">ใหม่ล่าสุด</h2>
              <a href="#" className="text-primary hover:text-primary/80 text-sm font-medium">ดูทั้งหมด</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="flex">
                    <div className="relative w-24 h-32 flex-shrink-0">
                      <Image 
                        alt={`New Series ${item}`}
                        className="w-full h-full object-cover"
                        src={`https://picsum.photos/seed/new${item}/200/300.jpg`}
                        fill
                      />
                    </div>
                    <div className="flex-1 p-4">
                      <h3 className="font-semibold text-slate-900 mb-1">ซีรีส์ใหม่ {item}</h3>
                      <p className="text-sm text-slate-600 mb-2 line-clamp-2">เรื่องราวน่าสนใจที่คุณไม่ควรพลาด...</p>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span>โรแมนติก</span>
                        <span>•</span>
                        <span>12 ตอน</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommended */}
        <div className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">แนะนำสำหรับคุณ</h2>
              <a href="#" className="text-primary hover:text-primary/80 text-sm font-medium">ดูทั้งหมด</a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="group cursor-pointer">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-slate-200 mb-3 group-hover:scale-105 transition-transform">
                    <Image 
                      alt={`Recommended ${item}`}
                      className="w-full h-full object-cover"
                      src={`https://picsum.photos/seed/rec${item}/300/400.jpg`}
                      fill
                    />
                    <div className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                      แนะนำ
                    </div>
                  </div>
                  <h3 className="font-medium text-sm text-slate-900 line-clamp-1">แนะนำ {item}</h3>
                  <p className="text-xs text-slate-500">8.5 ⭐</p>
                </div>
              ))}
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
