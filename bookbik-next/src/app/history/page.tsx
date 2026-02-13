'use client';

import Image from "next/image";
import { useState } from 'react';

export default function History() {
  const [activeTab, setActiveTab] = useState('topup');

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200 min-h-screen flex justify-center">
      {/* Mobile-constrained Container */}
      <div className="w-full max-w-lg bg-background-light dark:bg-background-dark min-h-screen shadow-2xl relative flex flex-col">
        {/* Sticky Header */}
        <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 py-4 flex items-center justify-between">
          <button onClick={() => window.history.back()} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-surface-dark transition-colors group">
            <span className="material-icons-round text-slate-600 dark:text-slate-400 group-hover:text-primary">arrow_back</span>
          </button>
          <h1 className="text-lg font-bold tracking-wide text-slate-900 dark:text-white">ประวัติการทำรายการ</h1>
          <div className="w-10"></div>
        </header>

        {/* Main Content */}
        <main className="flex-1 px-4 py-6">
          {/* Toggle Switch */}
          <div className="bg-slate-200 dark:bg-surface-dark p-1 rounded-xl flex mb-8">
            <button
              onClick={() => setActiveTab('topup')}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === 'topup' ? 'shadow-sm bg-primary text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'}`}
            >
              เติมเหรียญ
            </button>
            <button
              onClick={() => setActiveTab('unlock')}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === 'unlock' ? 'shadow-sm bg-primary text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'}`}
            >
              ปลดล็อกซีรีส์
            </button>
          </div>

          {/* Month Separator */}
          <div className="mb-4 flex items-center">
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-wider">เดือนนี้</h3>
            <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1 ml-4"></div>
          </div>

          {/* Transaction List */}
          <div className="space-y-3">
            {/* Item 1: Top Up */}
            <div className="group bg-white dark:bg-surface-dark hover:bg-slate-50 dark:hover:bg-surface-hover rounded-xl p-4 flex items-center transition-all cursor-pointer border border-transparent dark:border-slate-800/50 hover:border-slate-300 dark:hover:border-primary/30 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-yellow-100/10 dark:bg-yellow-500/10 flex items-center justify-center shrink-0 border border-yellow-200/20 dark:border-yellow-500/20">
                <span className="material-icons-round text-yellow-600 dark:text-yellow-400 text-2xl">monetization_on</span>
              </div>
              <div className="ml-4 flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate group-hover:text-primary transition-colors">แพ็คเกจ 500 เหรียญ</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">24 ต.ค. 2023 • 14:30</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm font-bold text-primary">+ ฿175</p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Visa •••• 4242</p>
              </div>
            </div>

            {/* Item 2: Bonus */}
            <div className="group bg-white dark:bg-surface-dark hover:bg-slate-50 dark:hover:bg-surface-hover rounded-xl p-4 flex items-center transition-all cursor-pointer border border-transparent dark:border-slate-800/50 hover:border-slate-300 dark:hover:border-primary/30 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-yellow-100/10 dark:bg-yellow-500/10 flex items-center justify-center shrink-0 border border-yellow-200/20 dark:border-yellow-500/20">
                <span className="material-icons-round text-yellow-600 dark:text-yellow-400 text-2xl">stars</span>
              </div>
              <div className="ml-4 flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate group-hover:text-primary transition-colors">เหรียญโบนัส (เข้าสู่ระบบรายวัน)</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">24 ต.ค. 2023 • 08:00</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm font-bold text-primary">+ 20 เหรียญ</p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">รางวัล</p>
              </div>
            </div>

            {/* Item 3: Top Up */}
            <div className="group bg-white dark:bg-surface-dark hover:bg-slate-50 dark:hover:bg-surface-hover rounded-xl p-4 flex items-center transition-all cursor-pointer border border-transparent dark:border-slate-800/50 hover:border-slate-300 dark:hover:border-primary/30 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-yellow-100/10 dark:bg-yellow-500/10 flex items-center justify-center shrink-0 border border-yellow-200/20 dark:border-yellow-500/20">
                <span className="material-icons-round text-yellow-600 dark:text-yellow-400 text-2xl">monetization_on</span>
              </div>
              <div className="ml-4 flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate group-hover:text-primary transition-colors">เติมเหรียญ 100</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">21 ต.ค. 2023 • 19:12</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm font-bold text-primary">+ ฿35</p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Apple Pay</p>
              </div>
            </div>
          </div>

          {/* Month Separator */}
          <div className="mt-8 mb-4 flex items-center">
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-wider">กันยายน 2023</h3>
            <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1 ml-4"></div>
          </div>

          {/* Previous Month List */}
          <div className="space-y-3 opacity-60">
            {/* Series Unlocked Item 1 */}
            <div className="group bg-white dark:bg-surface-dark hover:bg-slate-50 dark:hover:bg-surface-hover rounded-xl p-3 flex items-center transition-all cursor-pointer border border-transparent dark:border-slate-800/50 hover:border-slate-300 dark:hover:border-primary/30 shadow-sm">
              <div className="h-16 w-12 rounded-lg bg-slate-800 overflow-hidden shrink-0 relative shadow-md">
                <Image alt="Movie poster with dark moody lighting" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCi6ulnromWOEiEeEFVEvN2OyHhGfvkCZczpTcKAHmLhVbaTuA04rvdJ_dQ-U1WcbwM59WPSRC0nG6qbPVYR6nNloB1DWDiTrDflUMdcsGmMpRU9RrQrB5IJOnVmDJbzYEWzYEJIyxcrddwhC3O_I4RXilpp3obQEZT7AVZha_10vSF8t9DVWVpqVU2REHlx3OARp9LJqYYcaCQQLp0RUy_JhCUOFzthEtgflU3h5oCyIVpdB6rFEMXAPUxESyMNccIO_YpwLPUNYX" fill sizes="48px" />
              </div>
              <div className="ml-4 flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate group-hover:text-primary transition-colors">ตอนที่ 5: รักในเมืองหลวง</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">28 ก.ย. 2023 • 22:45</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">- 30 เหรียญ</p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">คงเหลือ: 420</p>
              </div>
            </div>

            {/* Series Unlocked Item 2 */}
            <div className="group bg-white dark:bg-surface-dark hover:bg-slate-50 dark:hover:bg-surface-hover rounded-xl p-3 flex items-center transition-all cursor-pointer border border-transparent dark:border-slate-800/50 hover:border-slate-300 dark:hover:border-primary/30 shadow-sm">
              <div className="h-16 w-12 rounded-lg bg-slate-800 overflow-hidden shrink-0 relative shadow-md">
                <Image alt="Abstract neon city lights poster" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1TA3Yphcu9RzNmEzOOEieJcsxROxRWD1ETAHy70HeYKqVny3M64R0UO8Y1rK-_cduw1e-ahGk3lIwhJxjGdV5RYOjAVz6W2bN8gEAZRe0BNqz9tpaklK89wisiCwDyzyLkoPD1Z_yqiR6PBnOUAbZOvqr7KmhZ9orQ3PGAGMfRzZktXWDboDBhlw9sZWxPZ6hvtP4OfiCsiAubnyQGScx6wn9eIeQyBx5SzUPEcM-0NaR9dL-fL-ea_yx0meha7wjBJxYSLFuAESP" fill sizes="48px" />
              </div>
              <div className="ml-4 flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate group-hover:text-primary transition-colors">ตอนที่ 1: ความลับของ CEO</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">25 ก.ย. 2023 • 10:15</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">- 15 เหรียญ</p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">คงเหลือ: 450</p>
              </div>
            </div>
          </div>

          {/* Load More */}
          <div className="mt-8 text-center pb-8">
            <button className="text-sm font-medium text-primary hover:text-primary-dark transition-colors flex items-center justify-center w-full py-4 border-t border-slate-200 dark:border-slate-800">
              <span className="mr-2">โหลดรายการก่อนหน้า</span>
              <span className="material-icons-round text-base">expand_more</span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
