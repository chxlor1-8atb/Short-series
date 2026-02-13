# บุ๊คบิ๊ก - Single Page Application (SPA)

## เกี่ยวกับโปรเจค

บุ๊คบิ๊กเป็นแพลตฟอร์มสตรีมมิ่งซีรีส์สั้นที่พัฒนาด้วย **Single Page Application (SPA)** ไม่ใช้ไฟล์ HTML หลายไฟล์ แต่ใช้ JavaScript ควบคุมการแสดงผลแทน

## คุณสมบัติ

### 🎯 ฟีเจอร์หลัก
- **Single Page Application** - โหลดเร็ว ไม่ต้องรอโหลดหน้าใหม่
- **Routing ภายใน** - ใช้ JavaScript History API
- **Dark Mode** - รองรับโหมดมืด/สว่าง
- **Responsive Design** - รองรับทุกขนาดหน้าจอ
- **Thai Localization** - ภาษาไทยเต็มรูปแบบ

### 📱 หน้าต่างๆ ในระบบ
- **หน้าแรก** (`/`) - แสดงซีรีส์ยอดนิยมและกำลังดู
- **Video Player** (`/player`) - หน้าเล่นวิดีโอ
- **เติมเงิน** (`/topup`) - ระบบเติมเหรียญ (Dark/Light theme)
- **ประวัติ** (`/history`) - ประวัติการทำรายการ (Dark/Light theme)
- **คลัง** (`/library`) - คลังของฉัน (Dark/Light theme)
- **ภารกิจ** (`/missions`) - ศูนย์ภารกิจ (Light/Dark theme)
- **สำรวจ** (`/explore`) - หน้าค้นหาและสำรวจ

## โครงสร้างไฟล์

```
Short-series/
├── index-spa.html          # ไฟล์ HTML หลัก (เพียงไฟล์เดียว)
├── app.js                  # JavaScript Application Logic
├── vercel.json            # Vercel Configuration
├── package.json           # Project Information
└── README-SPA.md          # This file
```

## วิธีการใช้งาน

### การรันในเครื่อง (Local Development)

1. **เปิดไฟล์ในเบราว์เซอร์**
   ```bash
   # ใช้เซิร์ฟเวอร์ง่ายๆ
   python -m http.server 8000
   # หรือ
   npx serve .
   ```

2. **เข้าถึงที่**
   ```
   http://localhost:8000/index-spa.html
   ```

### การ Deploy บน Vercel

1. **Push ไฟล์ขึ้น GitHub**
   ```bash
   git add .
   git commit -m "Deploy SPA version"
   git push origin main
   ```

2. **Deploy บน Vercel**
   - เข้าไปที่ [vercel.com](https://vercel.com)
   - Import repository จาก GitHub
   - Vercel จะ detect `vercel.json` อัตโนมัติ
   - คลิก Deploy

## Technical Details

### 🏗️ Architecture

**Single Page Application (SPA)**
- ใช้ไฟล์ HTML เพียงไฟล์เดียว (`index-spa.html`)
- JavaScript ควบคุมการแสดงผลทั้งหมด
- ใช้ History API สำหรับ routing
- ไม่ต้องโหลดหน้าใหม่เมื่อเปลี่ยนหน้า

### 🎨 Styling

**Tailwind CSS**
- ใช้ Tailwind CSS สำหรับ styling
- รองรับ Dark Mode
- ใช้ Noto Sans Thai + Spline Sans fonts
- Responsive design สำหรับ mobile-first

### ⚡ Performance

**Optimizations**
- Lazy loading ของ content
- Smooth transitions และ animations
- Caching headers สำหรับ static assets
- Minimal JavaScript bundle

### 🔧 Routing

**Client-side Routing**
```javascript
// ตัวอย่างการใช้งาน
app.navigate('player');     // ไปหน้า player
app.navigate('topup');      // ไปหน้าเติมเงิน
app.navigate('history');    // ไปหน้าประวัติ
```

### 📱 Navigation

**HTML Navigation Attributes**
```html
<!-- Desktop Navigation -->
<a data-nav="home" data-route="">หน้าแรก</a>
<a data-nav="library" data-route="library">คลัง</a>

<!-- Mobile Navigation -->
<a data-mobile-nav="player" data-route="player">Player</a>
```

## Customization

### 🎨 การแก้ไข Theme

**สีหลัก**
```javascript
colors: {
    "primary": "#2b8cee",     // เปลี่ยนสีหลักได้ที่นี่
    "background-light": "#f6f7f8",
    "background-dark": "#101922",
}
```

**Fonts**
```html
<!-- เพิ่ม fonts ใน head -->
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
```

### 📄 การเพิ่มหน้าใหม่

1. **เพิ่ม route ใน `app.js`**
   ```javascript
   routes: {
       'new-page': 'newpage',
       // ... routes อื่นๆ
   }
   ```

2. **เพิ่ม method สำหรับ generate HTML**
   ```javascript
   getNewPageHTML() {
       return `<div>เนื้อหาหน้าใหม่</div>`;
   }
   ```

3. **เพิ่ม setup method**
   ```javascript
   setupNewPagePage() {
       console.log('New page loaded');
   }
   ```

## Benefits ของ SPA

### ✅ ข้อดี
- **โหลดเร็ว** - ไม่ต้องโหลดหน้าใหม่
- **UX ดีขึ้น** - Smooth transitions
- **ลด Server Load** - โหลด static files ครั้งเดียว
- **Offline Support** - สามารถทำเป็น PWA ได้
- **SEO Friendly** - ใช้ History API

### ⚠️ ข้อควรระวัง
- **JavaScript Required** - ต้องเปิด JavaScript
- **Initial Load** - โหลดครั้งแรกอาจนานกว่า
- **Memory Usage** - ใช้ memory มากขึ้นเล็กน้อย

## Deployment Options

### 🚀 Vercel (แนะนำ)
- **Static Hosting** - ฟรีสำหรับ personal projects
- **Auto Deploy** - Auto deploy เมื่อ push ไป GitHub
- **Global CDN** - เร็วทั่วโลก
- **Custom Domain** - รองรับ custom domain

### 🌐 อื่นๆ
- **Netlify** - Static hosting อีกตัวเลือก
- **GitHub Pages** - ฟรีสำหรับ open source
- **Firebase Hosting** - Google's static hosting

## Support

หากมีปัญหาหรือข้อสงสัย กรุณาติดต่อ:
- 📧 Email: support@bookbik.com
- 🐛 Issues: รายงานบน GitHub
- 💬 Discord: [Community Server]

---

**Made with ❤️ for short series lovers**
