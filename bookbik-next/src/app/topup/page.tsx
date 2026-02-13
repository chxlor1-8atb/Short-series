'use client';

import { useState } from 'react';
import Link from "next/link";

export default function Topup() {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [paymentMethod, setPaymentMethod] = useState('promptpay');

  const coinPackages = [
    { amount: 50, coins: 50, bonus: 0 },
    { amount: 100, coins: 100, bonus: 5 },
    { amount: 200, coins: 200, bonus: 15 },
    { amount: 500, coins: 500, bonus: 50 },
    { amount: 1000, coins: 1000, bonus: 150 },
    { amount: 2000, coins: 2000, bonus: 400 },
  ];

  const paymentMethods = [
    { id: 'promptpay', name: 'พร้อมเพย์', icon: '📱' },
    { id: 'truemoney', name: 'ทรูมันนี่ วอลเล็ท', icon: '💳' },
    { id: 'credit', name: 'บัตรเครดิต', icon: '💳' },
    { id: 'bank', name: 'โอนผ่านธนาคาร', icon: '🏦' },
  ];

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
              <div className="hidden sm:flex items-center gap-1.5 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 px-3 py-1.5 rounded-full border border-yellow-100 dark:border-yellow-800/30">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm font-medium">1,250</span>
              </div>
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">เติมเหรียญ</h1>
              <p className="text-slate-600 dark:text-slate-400">เลือกแพ็กเกจที่เหมาะกับคุณและเพลิดเพลินกับซีรีส์มากขึ้น</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Coin Packages */}
            <div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">เลือกแพ็กเกจ</h2>
              <div className="space-y-3">
                {coinPackages.map((pkg) => (
                  <div 
                    key={pkg.amount}
                    onClick={() => setSelectedAmount(pkg.amount)}
                    className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedAmount === pkg.amount
                        ? 'border-primary bg-primary/5 dark:bg-primary/10'
                        : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-slate-900 dark:text-white">
                            {pkg.coins + pkg.bonus}
                          </span>
                          <span className="text-yellow-500">🪙</span>
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          ฿{pkg.amount}
                        </div>
                      </div>
                      <div className="text-right">
                        {pkg.bonus > 0 && (
                          <div className="text-sm font-medium text-green-600 dark:text-green-400">
                            +{pkg.bonus} โบนัส
                          </div>
                        )}
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          {pkg.coins} เหรียญ
                          {pkg.bonus > 0 && ` + ${pkg.bonus} โบนัส`}
                        </div>
                      </div>
                    </div>
                    {selectedAmount === pkg.amount && (
                      <div className="absolute top-2 right-2">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">วิธีการชำระเงิน</h2>
              <div className="space-y-3 mb-6">
                {paymentMethods.map((method) => (
                  <div 
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      paymentMethod === method.id
                        ? 'border-primary bg-primary/5 dark:bg-primary/10'
                        : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{method.icon}</span>
                        <span className="font-medium text-slate-900 dark:text-white">
                          {method.name}
                        </span>
                      </div>
                      {paymentMethod === method.id && (
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4">สรุปการสั่งซื้อ</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">แพ็กเกจที่เลือก</span>
                    <span className="font-medium text-slate-900 dark:text-white">
                      {coinPackages.find(pkg => pkg.amount === selectedAmount)?.coins || 0} + {coinPackages.find(pkg => pkg.amount === selectedAmount)?.bonus || 0} เหรียญ
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">วิธีการชำระเงิน</span>
                    <span className="font-medium text-slate-900 dark:text-white">
                      {paymentMethods.find(m => m.id === paymentMethod)?.name}
                    </span>
                  </div>
                  <div className="border-t border-slate-200 dark:border-slate-700 pt-2 mt-2">
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-900 dark:text-white">รวมทั้งหมด</span>
                      <span className="font-bold text-lg text-primary">฿{selectedAmount}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confirm Button */}
              <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold transition-colors">
                ยืนยันการสั่งซื้อ
              </button>

              {/* Security Note */}
              <div className="mt-4 text-center">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  🔒 การชำระเงินปลอดภัยและเข้ารหัส
                </p>
              </div>
            </div>
          </div>

          {/* Promotions */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">โปรโมชั่นพิเศษ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-3xl">🎁</div>
                  <div>
                    <h3 className="font-semibold">โบนัสครั้งแรก</h3>
                    <p className="text-sm text-white/80">เติมครั้งแรกรับโบนัสพิเศษ</p>
                  </div>
                </div>
                <div className="text-2xl font-bold">+50%</div>
                <div className="text-sm text-white/80">เมื่อเติมขั้นต่ำ 200 บาท</div>
              </div>

              <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-lg p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-3xl">⭐</div>
                  <div>
                    <h3 className="font-semibold">สมาชิก VIP</h3>
                    <p className="text-sm text-white/80">รับสิทธิประโยชน์พิเศษ</p>
                  </div>
                </div>
                <div className="text-2xl font-bold">20% ส่วนลด</div>
                <div className="text-sm text-white/80">สำหรับสมาชิก VIP ทุกการเติมเงิน</div>
              </div>
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
