'use client';

import Image from "next/image";

export default function Player() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-gray-100 h-screen overflow-hidden flex flex-col">
      {/* Navbar */}
      <header className="h-16 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#151f2b] z-50 flex items-center justify-between px-6 flex-shrink-0">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold text-lg">บ</div>
            <span className="font-bold text-xl tracking-tight">บุ๊ค<span className="text-primary">บิ๊ก</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
            <a className="text-gray-500 dark:text-gray-400 hover:text-white transition-colors" href="/library">คลัง</a>
            <a className="text-gray-500 dark:text-gray-400 hover:text-white transition-colors" href="/">หน้าแรก</a>
            <a className="hover:text-primary transition-colors" href="/explore">ค้นพบ</a>
            <a className="hover:text-primary transition-colors" href="#">ติดตาม</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-500 hover:text-white transition-colors">
            <span className="material-icons">search</span>
          </button>
          <button className="p-2 text-gray-500 hover:text-white transition-colors relative">
            <span className="material-icons">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
          </button>
          <div className="w-9 h-9 rounded-full bg-gray-700 overflow-hidden border border-gray-600">
            <Image alt="User Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsjGUFNC1KzEXeWLEMbdrWnsO932tLJ3rCqohEB0ybOY-Tol9x_IS_ZhWIFnVXsaAgxGu-rmZVoI0ZkuiXEDrdLZMZkOUSO52OWwRWwD_TWSTqeTYgeTUGlST-SzxOFs2678O770oHT-7Ge6ZkCIKxDEXcwWT7FlcgGExG3s02hk5IhDy5fpcOmOV5E4fZ0piooa7eNV-nkyaq5Wy3COlXlZN8A42SGFgqyo-pHdOvtPiuZ3zfvwR_3iL9U8t_-4Ja74nD3JMeLKOr" width={36} height={36} />
          </div>
          <a href="/topup" className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-all flex-shrink-0">
            <span className="material-icons">monetization_on</span>
            <span className="hidden sm:inline">เติมเหรียญ</span>
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative flex justify-center w-full overflow-hidden bg-black">
        {/* Ambient Background */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
          <Image alt="Blurred background matching video colors" className="w-full h-full object-cover blur-3xl scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC92AiG77hADWpaVdAwz-kCXar_9tgYMRXLesMhJ7lAUEXVXGkWkn724Y2wqoRltK5n_zxLWGZBNXQW99f-pwvFPu99Hk5xRDPyCWRabJayf1hy7j7kcmcFT5wgoLyeQNHDt3jryJOUEfTu7NjZ7PMNborkmPIW6OWmBTW-8opm4QCAt0kxAEvnyoXEJmEb2TJ1t7sDJHN32ZpeX_w2ruL9j9tKx7D57dTSKG0Q1NPHvoo8aTN1GOwqd3AY2WOHNYyWaIiV9AEPXtAq" fill sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
        </div>

        {/* Central Player Layout */}
        <div className="relative z-10 w-full max-w-7xl h-full flex justify-center items-center p-4 lg:p-8 gap-6">
          {/* Previous Control */}
          <button className="hidden lg:flex p-4 rounded-full bg-gray-800/50 hover:bg-gray-700/80 text-white transition-all backdrop-blur-sm group">
            <span className="material-icons text-3xl opacity-50 group-hover:opacity-100 group-hover:-translate-y-1 transition-all">keyboard_arrow_up</span>
          </button>

          {/* Video Player Container */}
          <div className="relative h-full max-h-[850px] aspect-9-16 bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-800 group select-none">
            <Image alt="Current video frame showing a woman with camera" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUvk5MxsdBWt1mecHet36AsbYs00dKnmqeJLNzEt10AAdFNZN-AMrffY1VNFVh5Dwjnyas2gpdNSvu9YdGdX-greVa64y35uraigxSiAdJ0rNQrUFOh1mZolXKDu6a7Hkg0XepoS_OKeAc1JpuPY3-X_ckybpIC3nX8lkSZOoiERq7VAIno29guaWs1RV4m8e5M48TJJqm2yOkufgbU2tfM_nzCBl5ApuXbYVn-9QLP8X9Uy9P9-R6nhe3xqbSTHZCswoGOuUbeCCV" fill sizes="(max-width: 768px) 100vw, 400px" priority />

            {/* Top Gradient */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent z-20 pointer-events-none"></div>

            {/* Pause/Play Indicator */}
            <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white">
                <span className="material-icons text-4xl">play_arrow</span>
              </div>
            </div>

            {/* Top Controls */}
            <div className="absolute top-0 left-0 right-0 p-4 z-30 flex justify-between items-start text-white">
              <button className="p-2 rounded-full bg-black/20 backdrop-blur-md hover:bg-black/40 transition">
                <span className="material-icons text-xl">arrow_back</span>
              </button>
              <button className="p-2 rounded-full bg-black/20 backdrop-blur-md hover:bg-black/40 transition">
                <span className="material-icons text-xl">more_horiz</span>
              </button>
            </div>

            {/* Right Side Interaction Bar */}
            <div className="absolute right-2 bottom-24 z-30 flex flex-col items-center gap-5 text-white">
              {/* Profile */}
              <div className="relative mb-2">
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <Image alt="Creator avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9d5rGXr2mV6Mxet2GhL2ZyagnMJJG4U1QylsfAYEFF_tBZ3wef81rrrqhLVoiLQpEWqwfMQsrokzEM-5XArYJp9xMu2cev7jyjTCP3L7t4TzEOcBgtRlvUx8e1o1TwjagBp9ru_LesKE8J1OvN0BxU5d3_K4qm3alc7PxvblStOjb_WemaGGdstXE4Y9DrzM3931K5KRy2RuSp3613H59xHRYAimy1CZcKxwa-C1TCy_hLT7nmNGRr6Gxmn47qZ1Hn2bf4cqE97lP" width={40} height={40} />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary rounded-full p-[2px]">
                  <span className="material-icons text-[10px] block font-bold">add</span>
                </div>
              </div>
              {/* Like */}
              <div className="flex flex-col items-center gap-1 group/btn cursor-pointer">
                <div className="p-2 rounded-full bg-black/20 backdrop-blur-sm group-hover/btn:bg-gray-800/60 transition-colors">
                  <span className="material-symbols-outlined text-3xl fill-current group-hover/btn:text-primary transition-colors">favorite</span>
                </div>
                <span className="text-xs font-semibold drop-shadow-md">12.5K</span>
              </div>
              {/* Comment */}
              <div className="flex flex-col items-center gap-1 group/btn cursor-pointer">
                <div className="p-2 rounded-full bg-black/20 backdrop-blur-sm group-hover/btn:bg-gray-800/60 transition-colors">
                  <span className="material-symbols-outlined text-3xl fill-current">chat_bubble</span>
                </div>
                <span className="text-xs font-semibold drop-shadow-md">342</span>
              </div>
              {/* Bookmark */}
              <div className="flex flex-col items-center gap-1 group/btn cursor-pointer">
                <div className="p-2 rounded-full bg-black/20 backdrop-blur-sm group-hover/btn:bg-gray-800/60 transition-colors">
                  <span className="material-symbols-outlined text-3xl fill-current">bookmark</span>
                </div>
                <span className="text-xs font-semibold drop-shadow-md">บันทึก</span>
              </div>
              {/* Share */}
              <div className="flex flex-col items-center gap-1 group/btn cursor-pointer">
                <div className="p-2 rounded-full bg-black/20 backdrop-blur-sm group-hover/btn:bg-gray-800/60 transition-colors">
                  <span className="material-symbols-outlined text-3xl fill-current">share</span>
                </div>
                <span className="text-xs font-semibold drop-shadow-md">แชร์</span>
              </div>
            </div>

            {/* Bottom Info Layer */}
            <div className="absolute bottom-0 left-0 right-0 z-30 pt-20 pb-4 px-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
              <div className="flex flex-col items-start text-white mb-4 pr-16 max-w-[85%]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-primary/90 text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">ซีรีส์</span>
                  <h3 className="font-bold text-lg drop-shadow-md">ความลับของ CEO</h3>
                </div>
                <h4 className="text-primary font-semibold text-sm mb-1">ตอนที่ 42: การเปิดเผย</h4>
                <p className="text-sm text-gray-200 line-clamp-2 drop-shadow-md leading-snug">
                  รอดูสิว่าจะเกิดอะไรขึ้นต่อไป... เธอไม่เคยคาดคิดมาก่อน! #ดราม่า #โรแมนติก #พลิกผัน
                  <span className="font-bold text-gray-400 text-xs ml-1 cursor-pointer hover:text-white">เพิ่มเติม</span>
                </p>
              </div>
              {/* Audio Track Info */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full">
                  <span className="material-icons text-sm">music_note</span>
                  <div className="w-24 overflow-hidden">
                    <span className="text-xs text-white whitespace-nowrap">เสียงต้นฉบับ - DramaQueen...</span>
                  </div>
                </div>
              </div>
              {/* Progress Bar */}
              <div className="w-full h-1 bg-white/20 rounded-full mb-2 cursor-pointer relative group/progress">
                <div className="absolute top-0 left-0 h-full w-[65%] bg-primary rounded-full"></div>
                <div className="absolute top-1/2 -translate-y-1/2 left-[65%] w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover/progress:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button className="hidden lg:flex p-4 rounded-full bg-gray-800/50 hover:bg-gray-700/80 text-white transition-all backdrop-blur-sm group">
            <span className="material-icons text-3xl opacity-50 group-hover:opacity-100 group-hover:translate-y-1 transition-all">keyboard_arrow_down</span>
          </button>

          {/* Episodes Drawer (Desktop Side Panel) */}
          <div className="hidden xl:flex flex-col w-80 h-[850px] bg-background-dark border border-gray-800 rounded-xl overflow-hidden shadow-xl">
            <div className="p-4 border-b border-gray-800 bg-background-dark/95 backdrop-blur z-10">
              <h2 className="font-bold text-white text-lg">ต่อไป</h2>
              <div className="flex items-center justify-between text-sm text-gray-400 mt-1">
                <span>ความลับของ CEO</span>
                <span className="text-xs bg-gray-800 px-2 py-0.5 rounded text-gray-300">54 ตอน</span>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-2 space-y-2 scrollbar-hide">
              {/* Current Item */}
              <div className="flex gap-3 p-2 rounded-lg bg-primary/10 border border-primary/20 cursor-pointer">
                <div className="relative w-20 aspect-[9/16] rounded overflow-hidden flex-shrink-0">
                  <Image alt="Thumbnail for current episode" className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL7ART7ngPkW_G79seCgNVPKYZ1DSYBEs6C2dLO5oXVZz-bv92oK7D_zD_gKKXOuUqA6CbloLZAn3t2wlieKTHDQBXVA7k6kBX-BWrTa5z6UIwEZgoi_dwfx3PjqxktDP_220fwFph5vzInidc5E2aVqhtwmVePQej0_paqiv58b1yfP0kIoVrivAxnYlyMACUDCjgaBhiJrLk_oB8i0RsSrY_gfqAcTFmpoI073eXWz2hb2teJVXSVESShrKF4HjbMuEsLJ956hk6" fill sizes="80px" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="material-icons text-white text-lg">equalizer</span>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-primary text-xs font-bold mb-1">กำลังเล่น • ตอน 42</span>
                  <h4 className="text-white text-sm font-medium leading-tight mb-1">การเปิดเผย</h4>
                  <span className="text-gray-500 text-xs">2 นาที 14 วินาที</span>
                </div>
              </div>

              {/* Next Items */}
              {[
                { ep: 43, title: 'การเผชิญหน้า', views: '154K', time: '3:05', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYL9twdp2TGi6sDPP1EVeZCB6FsYMe0XHykbuWWkloVbHnlTv-r65f-GVB2KNqoEui58caoxmOe_imWAtLApjD--Aek8GXhVDNr9FA6MrDKho3B6mdv8tv6CtQdnnlCxMaH-_QSWVxH5aWJbLaTESkEgWcsVdmykgZpjCNmRnGvxLp1ScoFPkHw48TVr6ta1E98T2DWK_cF-7YshdnJkZC9YdCQ4S2q_6kg1BdxhH9i80JxRh0RLT3BKimqnCRhm-NXm1MesZM6TXg' },
                { ep: 44, title: 'ออกจากเมือง', views: '120K', time: '1:45', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmN_0RxKLGRknS8VGfah1DoGxAEKVWziB6vvu0EXcAiBBZ3h7FxaNsz-nBHNSkPfiJCeLA_VTYwhBk-w9_odbHj8N89viNMwN3sgcfT0uQVZakfMdKu3ZIqUlMdMEJzYT_X5RsPEiERXtqEODZTmzHBsRum0cSSexkg5N7EwhCRckIJVL1YMwmuZ0yVPOG0vha0g7zLr6SxzhZGnAQCnSBCvgm6reW7J9TbEG8bLAb9KfEnTB1EocZJWxDtASZ6tf1HiOkpijjFSzb' },
                { ep: 45, title: 'จุดเริ่มต้นใหม่', views: '98K', time: '2:20', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALE4CW3QeA33bniIIL2JQfjL92nIjmLWBZRLseZkpAn51wmUqsmEHwpCK99s2kB4C9NnNQpvt7DsqEihAndDjkY6yhdkCb_BpetQnqW-lvhY9jsVe61xY2x7sMW0Hf9Lq0CVTmomU0suFdWB8Wx0I_KYVnU5NvnCFYM6QYCzWNcbolcGWkOO4_kcsNdIbGVKneQyvJ9kgTZl5IgCIXqgozIRVSyJZCKVG7WGq5jueTFjfN-bTXPqvJcSp9lW8uIQa0Rto5TPyYwjrH' },
                { ep: 46, title: 'ข้อความ', views: '92K', time: '2:55', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLe1PQUdORg5R56l72eQ2qx5h91vfk4Kva60CzhWfEwHbm40LsNspm7mnI12GZ3ONaO4ne_u7tJQdkjLJ2s3hdrM9r_aLc3O0_3zQcxnz8rQGebzVix0o_yoO4Xo4K1JE9LPEVjhOuizOsn5ivwz-W4vbVeTZa_azGpaGdwmJpt9DwP3sunS3eWo4orQj5j44EKDLo8vXYTUCFdpb1DBqoKvlhTeUbvMDbRNUoRXptVEtgBWNypfM9gz380_2j-yrD5a--jJmVpZmF' },
              ].map((item) => (
                <div key={item.ep} className="flex gap-3 p-2 rounded-lg hover:bg-gray-800/50 cursor-pointer transition-colors group">
                  <div className="relative w-20 aspect-[9/16] rounded overflow-hidden flex-shrink-0 bg-gray-800">
                    <Image alt={`Thumbnail for episode ${item.ep}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={item.img} fill sizes="80px" />
                    <div className="absolute bottom-1 right-1 bg-black/60 px-1 rounded text-[9px] text-white">{item.time}</div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-gray-400 text-xs font-bold mb-1">ตอน {item.ep}</span>
                    <h4 className="text-gray-200 text-sm font-medium leading-tight mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                    <span className="text-gray-500 text-xs">{item.views} ครั้ง</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Drawer Footer */}
            <div className="p-4 border-t border-gray-800 bg-background-dark">
              <button className="w-full py-2.5 rounded-lg bg-gray-800 text-white text-sm font-medium hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
                ดูซีรีส์ทั้งหมด
                <span className="material-icons text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-background-dark border-t border-gray-800 z-50 flex items-center justify-around px-2 text-gray-500">
        <a className="flex flex-col items-center gap-1 p-2 text-white" href="/">
          <span className="material-icons">home</span>
          <span className="text-[10px]">หน้าแรก</span>
        </a>
        <a className="flex flex-col items-center gap-1 p-2" href="/explore">
          <span className="material-icons">explore</span>
          <span className="text-[10px]">ค้นพบ</span>
        </a>
        <div className="relative -top-4">
          <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/30">
            <span className="material-icons">add</span>
          </button>
        </div>
        <a className="flex flex-col items-center gap-1 p-2" href="#">
          <span className="material-icons">chat</span>
          <span className="text-[10px]">ข้อความ</span>
        </a>
        <a className="flex flex-col items-center gap-1 p-2" href="#">
          <span className="material-icons">person</span>
          <span className="text-[10px]">โปรไฟล์</span>
        </a>
      </nav>
    </div>
  );
}
