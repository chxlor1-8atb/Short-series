"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function MissionsPage() {
  const [checkedIn, setCheckedIn] = useState(false);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-white antialiased flex flex-col">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-[#101922]/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                บ
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">บุ๊คบิ๊ก</span>
            </div>
            {/* Desktop Nav Links */}
            <div className="hidden md:flex space-x-8">
              <Link className="text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium transition-colors" href="/">
                ค้นพบ
              </Link>
              <Link className="text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium transition-colors" href="/library">
                คลัง
              </Link>
              <Link className="text-primary px-3 py-2 text-sm font-medium" href="/missions">
                ภารกิจ
              </Link>
            </div>
            {/* User Profile & Balance */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-1.5 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 px-3 py-1.5 rounded-full border border-yellow-100 dark:border-yellow-800/30">
                <span className="material-icons text-sm">monetization_on</span>
                <span className="text-sm font-bold">1,240</span>
              </div>
              <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border-2 border-white dark:border-gray-800 shadow-sm cursor-pointer">
                <Image
                  alt="User Avatar"
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL2JTGpCqYZsh5l9cgFAHds9VqtXZSdrXJSfP3edYOqiMKm5gJL_ni5gBNtgGAraHrvFdbBCZOifun9hk70En4Rpa45-Cz1q7ebWkKX34Vt0o4Hk3Ta9Q0Ai8946IH0ISRZVHnm-T79EOxxImrZlOe8_ghR79cDMiqjNeoeaU1O3M0Tc6U0o2Gzvne3B04T6Y1nHD8h8ySosJAqCONeaZLszMh-v9dvuPiyPpYnpbfwEpbfX2QihEssaxENwxpkYX3_X3ljt3mwW_q"
                  width={32}
                  height={32}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        {/* Header Section */}
        <div className="mb-8 text-center sm:text-left sm:flex sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">ศูนย์ภารกิจ</h1>
            <p className="text-gray-500 dark:text-gray-400">ทำภารกิจประจำวันเพื่อรับเหรียญและปลดล็อกตอนพรีเมียม</p>
          </div>
          <div className="hidden sm:block mt-4 sm:mt-0">
            <button className="text-sm text-primary hover:text-blue-700 font-medium flex items-center gap-1">
              ดูประวัติ <span className="material-icons text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Daily Check-in Card */}
        <section className="bg-white dark:bg-[#1a2632] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 mb-8 relative overflow-hidden">
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="flex justify-between items-center mb-6 relative z-10">
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="material-icons text-primary">calendar_today</span>
                เช็คอินประจำวัน
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">เช็คอินติดต่อกัน 3 วันแล้ว</p>
            </div>
            <button
              onClick={() => setCheckedIn(true)}
              disabled={checkedIn}
              className={`px-6 py-2 rounded-lg font-medium shadow-lg shadow-primary/30 transition-all transform active:scale-95 text-sm ${
                checkedIn
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-primary hover:bg-blue-600 text-white"
              }`}
            >
              {checkedIn ? "เช็คอินแล้ว" : "เช็คอินตอนนี้"}
            </button>
          </div>

          {/* Days Tracker */}
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 sm:gap-4 relative z-10">
            {/* Day 1: Done */}
            <div className="flex flex-col items-center gap-2 opacity-60">
              <div className="w-full aspect-square bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-700">
                <span className="material-icons text-green-500 text-2xl">check_circle</span>
              </div>
              <span className="text-xs font-medium text-gray-400">วันที่ 1</span>
            </div>

            {/* Day 2: Done */}
            <div className="flex flex-col items-center gap-2 opacity-60">
              <div className="w-full aspect-square bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-700">
                <span className="material-icons text-green-500 text-2xl">check_circle</span>
              </div>
              <span className="text-xs font-medium text-gray-400">วันที่ 2</span>
            </div>

            {/* Day 3: Done */}
            <div className="flex flex-col items-center gap-2 opacity-60">
              <div className="w-full aspect-square bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-700">
                <span className="material-icons text-green-500 text-2xl">check_circle</span>
              </div>
              <span className="text-xs font-medium text-gray-400">วันที่ 3</span>
            </div>

            {/* Day 4: Current/Active */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-full aspect-square bg-white dark:bg-[#1a2632] rounded-lg flex flex-col items-center justify-center border-2 border-primary shadow-lg shadow-primary/10 relative overflow-hidden group cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="text-primary font-bold text-lg">+50</span>
                <span className="material-icons text-primary text-sm mt-1">monetization_on</span>
              </div>
              <span className="text-xs font-bold text-primary">วันที่ 4</span>
            </div>

            {/* Day 5: Locked */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-full aspect-square bg-gray-50 dark:bg-gray-800/50 rounded-lg flex flex-col items-center justify-center border border-gray-100 dark:border-gray-700 text-gray-400">
                <span className="font-semibold text-sm">+60</span>
                <span className="material-icons text-gray-300 dark:text-gray-600 text-sm mt-1">monetization_on</span>
              </div>
              <span className="text-xs font-medium text-gray-400">วันที่ 5</span>
            </div>

            {/* Day 6: Locked */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-full aspect-square bg-gray-50 dark:bg-gray-800/50 rounded-lg flex flex-col items-center justify-center border border-gray-100 dark:border-gray-700 text-gray-400">
                <span className="font-semibold text-sm">+70</span>
                <span className="material-icons text-gray-300 dark:text-gray-600 text-sm mt-1">monetization_on</span>
              </div>
              <span className="text-xs font-medium text-gray-400">วันที่ 6</span>
            </div>

            {/* Day 7: Big Reward */}
            <div className="flex flex-col items-center gap-2 col-span-2 sm:col-span-1">
              <div className="w-full aspect-[2/1] sm:aspect-square bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10 rounded-lg flex flex-col items-center justify-center border border-yellow-200 dark:border-yellow-800/30 text-yellow-600 dark:text-yellow-500">
                <span className="material-icons text-2xl mb-1">card_giftcard</span>
                <span className="font-bold text-xs">พิเศษ</span>
              </div>
              <span className="text-xs font-medium text-gray-400">วันที่ 7</span>
            </div>
          </div>
        </section>

        {/* Mission Lists Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Daily Tasks Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Category Header */}
            <div className="flex items-center gap-2 mb-4">
              <span className="material-icons text-orange-400">local_fire_department</span>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">ภารกิจประจำวัน</h3>
              <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full">รีเซ็ตใน 4 ชม.</span>
            </div>

            {/* Task Item: Ready to Claim */}
            <div className="bg-white dark:bg-[#1a2632] rounded-xl p-4 shadow-sm border border-blue-100 dark:border-blue-900/30 flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-transform hover:-translate-y-0.5 duration-200 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
              <div className="flex-shrink-0 h-12 w-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-primary">
                <span className="material-icons">movie</span>
              </div>
              <div className="flex-grow w-full">
                <div className="flex justify-between mb-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white">ดู 3 ตอน</h4>
                  <span className="text-xs font-bold text-primary">3/3</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2 mb-2">
                  <div className="bg-primary h-2 rounded-full w-full"></div>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                  <span>รางวัล:</span>
                  <span className="font-bold text-gray-700 dark:text-gray-300 flex items-center">
                    <span className="material-icons text-[14px] text-yellow-500 mr-0.5">monetization_on</span> 50 เหรียญ
                  </span>
                </div>
              </div>
              <button className="w-full sm:w-auto mt-2 sm:mt-0 bg-primary hover:bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-md shadow-blue-200 dark:shadow-none transition-colors animate-pulse">
                รับรางวัล
              </button>
            </div>

            {/* Task Item: In Progress */}
            <div className="bg-white dark:bg-[#1a2632] rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
              <div className="flex-shrink-0 h-12 w-12 bg-purple-50 dark:bg-purple-900/20 rounded-lg flex items-center justify-center text-purple-500">
                <span className="material-icons">share</span>
              </div>
              <div className="flex-grow w-full">
                <div className="flex justify-between mb-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white">แชร์วิดีโอสั้น</h4>
                  <span className="text-xs font-medium text-gray-500">0/1</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2 mb-2">
                  <div className="bg-purple-500 h-2 rounded-full w-0"></div>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                  <span>รางวัล:</span>
                  <span className="font-bold text-gray-700 dark:text-gray-300 flex items-center">
                    <span className="material-icons text-[14px] text-yellow-500 mr-0.5">monetization_on</span> 100 เหรียญ
                  </span>
                </div>
              </div>
              <button className="w-full sm:w-auto mt-2 sm:mt-0 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-5 py-2 rounded-lg text-sm font-medium transition-colors">
                ไป
              </button>
            </div>

            {/* Task Item: In Progress */}
            <div className="bg-white dark:bg-[#1a2632] rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
              <div className="flex-shrink-0 h-12 w-12 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center text-green-500">
                <span className="material-icons">thumb_up</span>
              </div>
              <div className="flex-grow w-full">
                <div className="flex justify-between mb-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white">กดไลค์ 5 วิดีโอ</h4>
                  <span className="text-xs font-medium text-gray-500">2/5</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2 mb-2">
                  <div className="bg-green-500 h-2 rounded-full w-2/5"></div>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                  <span>รางวัล:</span>
                  <span className="font-bold text-gray-700 dark:text-gray-300 flex items-center">
                    <span className="material-icons text-[14px] text-yellow-500 mr-0.5">monetization_on</span> 30 เหรียญ
                  </span>
                </div>
              </div>
              <button className="w-full sm:w-auto mt-2 sm:mt-0 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-5 py-2 rounded-lg text-sm font-medium transition-colors">
                ไป
              </button>
            </div>
          </div>

          {/* Side Column: One-time & Achievements */}
          <div className="space-y-6">
            {/* Category Header */}
            <div className="flex items-center gap-2 mb-4">
              <span className="material-icons text-gray-400">emoji_events</span>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">ความสำเร็จ</h3>
            </div>

            {/* Achievement Card */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 border border-dashed border-gray-300 dark:border-gray-700 flex items-center gap-3">
              <div className="h-10 w-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 shadow-sm">
                <span className="material-icons text-sm">person_add</span>
              </div>
              <div className="flex-grow">
                <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300">ชวนเพื่อน</h4>
                <p className="text-xs text-gray-500">รับ 500 เหรียญต่อการชวน</p>
              </div>
              <button className="text-primary hover:text-blue-700">
                <span className="material-icons">chevron_right</span>
              </button>
            </div>

            {/* Completed Task (Dimmed) */}
            <div className="bg-gray-50 dark:bg-gray-800/30 rounded-xl p-4 border border-transparent flex flex-col gap-3 opacity-75">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">
                    <span className="material-icons text-lg">edit</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 line-through">ทำโปรไฟล์เสร็จ</h4>
                    <p className="text-xs text-gray-400">อัปเดตรูปโปรไฟล์ & ข้อมูล</p>
                  </div>
                </div>
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-500 text-[10px] uppercase font-bold px-2 py-1 rounded">รับแล้ว</span>
              </div>
            </div>

            {/* Promo Banner */}
            <div className="mt-6 rounded-xl overflow-hidden relative h-40 group cursor-pointer">
              <Image
                alt="Abstract futuristic neon background"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJSWqOvQa_tQSMtCfQQet6vfkryo1-74knuMnLLwZYO2IJf8J4-hCPxBEK6jQ2_TKCKINFZc6XcjpzN0LBGwH0uaj4D1zP6WhiCR7WQp9XQXWMZby3_XSo39OruUGEL8jtVfdWwOMZh0wXxZiIpWMI4k8Ns61FozQSHik_VFtbZ-lBr8_xVKvqDv0nXxPyt4MZxJLOjxNdx75X2ZobcU7rFvf-btQ8HZRa9KgXgmtYwBzUvhsvJ29A6fN8U3g7B_R9tmxSULTlsN_b"
                fill
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                <h4 className="text-white font-bold text-lg leading-tight mb-1">ดูพรีเมียม</h4>
                <p className="text-gray-200 text-xs mb-2">ปลดล็อกซีรีส์พิเศษด้วยเหรียญ</p>
                <span className="text-white text-xs font-bold underline decoration-primary underline-offset-4 decoration-2">สำรวจคอลเลกชัน</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Simple */}
      <footer className="border-t border-gray-100 dark:border-gray-800 mt-auto bg-white dark:bg-[#101922]">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-400 dark:text-gray-600">
          © 2024 บุ๊คบิ๊ก. สงวนลิขสิทธิ์
        </div>
      </footer>
    </div>
  );
}
