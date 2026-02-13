'use client';

export default function Topup() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-white font-display min-h-screen flex flex-col">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={() => window.history.back()} className="p-2 -ml-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-slate-600 dark:text-gray-300">
            <span className="material-icons">arrow_back</span>
          </button>
          <h1 className="text-lg font-semibold tracking-wide">เติมเหรียญ</h1>
          <button className="p-2 -mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-slate-600 dark:text-gray-300">
            <span className="material-icons">help_outline</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow w-full max-w-4xl mx-auto px-4 py-6 space-y-8">
        {/* Balance Hero Card */}
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-[#1a6bb8] text-white p-6 md:p-8 glow-effect">
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-40 h-40 bg-blue-300 opacity-10 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="text-blue-100 text-sm font-medium mb-1 opacity-90">ยอดเงินปัจจุบัน</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-bold tracking-tight">320</span>
                <span className="text-lg md:text-xl font-medium text-blue-100">เหรียญ</span>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-white/10">
                <span className="material-icons text-sm">stars</span>
                VIP ระดับ 2
              </div>
            </div>
            <a href="/history" className="self-start md:self-center px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-sm font-medium transition-all backdrop-blur-sm flex items-center gap-2">
              <span className="material-icons text-sm">history</span>
              ประวัติการทำรายการ
            </a>
          </div>
        </section>

        {/* Package Selection */}
        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="material-icons text-primary text-2xl">local_mall</span>
            เลือกแพ็คเกจ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Package 1: Starter */}
            <div className="group relative bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary rounded-xl p-5 flex flex-col items-center justify-between transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
              <div className="text-center mb-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <span className="material-icons text-primary">monetization_on</span>
                </div>
                <div className="text-2xl font-bold text-slate-800 dark:text-white">100</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">เหรียญ</div>
              </div>
              <button className="w-full py-2 rounded-lg bg-gray-100 dark:bg-gray-700 group-hover:bg-primary group-hover:text-white text-gray-800 dark:text-white font-medium transition-colors text-sm">
                ฿35
              </button>
            </div>

            {/* Package 2: Popular */}
            <div className="group relative bg-white dark:bg-card-dark border-2 border-primary rounded-xl p-5 flex flex-col items-center justify-between transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 cursor-pointer overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg z-10">
                ยอดนิยม
              </div>
              <div className="text-center mb-4">
                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-primary to-blue-400 rounded-full flex items-center justify-center mb-3 shadow-lg shadow-primary/30">
                  <span className="material-icons text-white">diamond</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-slate-800 dark:text-white">500</div>
                  <div className="text-xs text-primary font-bold mt-1 bg-primary/10 px-2 py-0.5 rounded-full">+50 โบนัส</div>
                </div>
              </div>
              <button className="w-full py-2 rounded-lg bg-primary text-white font-bold transition-transform active:scale-95 shadow-lg shadow-primary/25 text-sm">
                ฿175
              </button>
            </div>

            {/* Package 3: Pro */}
            <div className="group relative bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary rounded-xl p-5 flex flex-col items-center justify-between transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-gray-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-gray-600 hidden group-hover:block transition-all">
                คุ้มค่าที่สุด
              </div>
              <div className="text-center mb-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <span className="material-icons text-primary">redeem</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold text-slate-800 dark:text-white">1200</div>
                  <div className="text-xs text-green-500 font-bold mt-1">+200 โบนัส</div>
                </div>
              </div>
              <button className="w-full py-2 rounded-lg bg-gray-100 dark:bg-gray-700 group-hover:bg-primary group-hover:text-white text-gray-800 dark:text-white font-medium transition-colors text-sm">
                ฿350
              </button>
            </div>

            {/* Package 4: Large */}
            <div className="group relative bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary rounded-xl p-5 flex flex-col items-center justify-between transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
              <div className="text-center mb-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <span className="material-icons text-primary">savings</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold text-slate-800 dark:text-white">2500</div>
                  <div className="text-xs text-green-500 font-bold mt-1">+500 โบนัส</div>
                </div>
              </div>
              <button className="w-full py-2 rounded-lg bg-gray-100 dark:bg-gray-700 group-hover:bg-primary group-hover:text-white text-gray-800 dark:text-white font-medium transition-colors text-sm">
                ฿700
              </button>
            </div>

            {/* Package 5: Whale */}
            <div className="group relative bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary rounded-xl p-5 flex flex-col items-center justify-between transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer col-span-2 md:col-span-1">
              <div className="text-center mb-4 flex flex-row md:flex-col items-center justify-center gap-4 md:gap-0 w-full">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mb-0 md:mb-3 group-hover:bg-yellow-500/20 transition-colors shrink-0">
                  <span className="material-icons text-yellow-500">emoji_events</span>
                </div>
                <div className="flex flex-col items-start md:items-center">
                  <div className="text-2xl font-bold text-slate-800 dark:text-white">5000</div>
                  <div className="text-xs text-yellow-500 font-bold mt-1">+1200 โบนัส</div>
                </div>
              </div>
              <button className="w-full py-2 rounded-lg bg-gray-100 dark:bg-gray-700 group-hover:bg-primary group-hover:text-white text-gray-800 dark:text-white font-medium transition-colors text-sm">
                ฿1,400
              </button>
            </div>

            {/* Package 6: Promo Code */}
            <div className="group relative border border-dashed border-gray-400 dark:border-gray-600 rounded-xl p-5 flex flex-col items-center justify-center transition-all duration-200 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer opacity-70 hover:opacity-100">
              <div className="text-center">
                <span className="material-icons text-gray-400 dark:text-gray-500 text-3xl mb-2">card_giftcard</span>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">ใส่โค้ดโปรโมชั่น</div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="bg-white dark:bg-card-dark rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-lg font-semibold mb-4 flex items-center justify-between">
            <span>วิธีการชำระเงิน</span>
            <span className="text-xs font-normal text-green-500 flex items-center gap-1 bg-green-500/10 px-2 py-1 rounded">
              <span className="material-icons text-[14px]">lock</span> SSL ปลอดภัย
            </span>
          </h2>
          <div className="space-y-3">
            {/* Selected Method: Apple Pay */}
            <label className="flex items-center justify-between p-3 rounded-lg border border-primary bg-primary/5 dark:bg-primary/10 cursor-pointer transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-6 bg-white rounded border border-gray-200 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-gray-800 to-black"></div>
                </div>
                <div>
                  <div className="font-medium text-sm text-slate-800 dark:text-white">Apple Pay</div>
                  <div className="text-xs text-slate-500 dark:text-gray-400">วิธีการเริ่มต้น</div>
                </div>
              </div>
              <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
              </div>
              <input defaultChecked className="hidden" name="payment" type="radio" />
            </label>

            {/* Method 2: Visa */}
            <label className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer transition-all group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-6 bg-white rounded border border-gray-200 flex items-center justify-center overflow-hidden relative">
                  <div className="w-full h-full bg-blue-800">
                    <div className="absolute right-0 bottom-0 text-[6px] text-white font-bold px-1 italic">VISA</div>
                  </div>
                </div>
                <div>
                  <div className="font-medium text-sm text-slate-800 dark:text-white">Visa ท้ายด้วย 4242</div>
                </div>
              </div>
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 group-hover:border-primary"></div>
              <input className="hidden" name="payment" type="radio" />
            </label>

            {/* Method 3: TrueMoney */}
            <label className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer transition-all group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-6 bg-purple-600 rounded flex items-center justify-center overflow-hidden">
                  <span className="material-icons text-white text-xs">account_balance_wallet</span>
                </div>
                <div>
                  <div className="font-medium text-sm text-slate-800 dark:text-white">TrueMoney Wallet</div>
                </div>
              </div>
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 group-hover:border-primary"></div>
              <input className="hidden" name="payment" type="radio" />
            </label>

            {/* Add New */}
            <button className="w-full mt-2 py-3 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-500 dark:text-gray-400 font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
              <span className="material-icons text-base">add</span>
              เพิ่มวิธีการชำระเงิน
            </button>
          </div>
        </section>

        {/* Terms Footer */}
        <div className="text-center pb-8">
          <p className="text-xs text-gray-400 dark:text-gray-500 max-w-lg mx-auto leading-relaxed">
            การซื้อสินค้าถือว่าคุณยอมรับ <a className="underline hover:text-primary transition-colors" href="#">เงื่อนไขการให้บริการ</a> ของเรา
            เหรียญสามารถใช้ปลดล็อกตอนพรีเมียมและสนับสนุนผู้สร้างสรรค์ การซื้อสินค้าไม่สามารถคืนเงินได้
          </p>
        </div>
      </main>
    </div>
  );
}
