'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)

const MoreVertIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
  </svg>
)

const PlayArrowIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z"/>
  </svg>
)

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState('watching')

  const watchingList = [
    {
      id: 1,
      title: 'ความลับของ CEO',
      genre: 'ดราม่า',
      year: '2023',
      episode: 45,
      totalEpisodes: 60,
      timeLeft: '22 นาที',
      progress: 75,
      poster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzYghcv1ONEqX--lYA_5QwMeT4eJTl_-I59F_niHoZV_vud_sNY_Xv9GBX19oRdq85ImAXoHfts5eY4v4Vixo0uOQmfxlsttyAFgLNgZqmm32h_d6pC3F4flAfF4wvQhxkzmcG5qmhqOr7mC1Y-r_twBJBBoH0t3LZ2kseNBx4HY8YwwWAQecGl8XN-Phde6sIiUFSie_zNC40OLV6CXEXG04dyip-fwQQ1yKOLnbzaQcmd4agxLSoOqCZNJDYQykkmhwE_U9LGbjQ',
      status: 'watching'
    },
    {
      id: 2,
      title: 'เที่ยงคืนในโซล',
      genre: 'ระทึกขวัญ',
      year: '2024',
      episode: 3,
      totalEpisodes: 12,
      timeLeft: '45 นาที',
      progress: 25,
      poster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJeN_ctkWMKjW-gjkYYL23UVJkjKka7jmy_otqS3u3umzT6QQ9IVYs1AnPtpSVNKSneXL8-gHLSewoAjQo6WK4twG9uI9v53ioipexgHlBuk9RbeRFNkMLpcVS0o1AW2OOp7uMW08wefZG81ynQWEnIwpSej87MxH-7DNPjdNo-gZGDtB2QCS4L92Cb0q9UW4mQ2AtTVPKSmjwgRZ0lKdIaXXKPAHqVX4NzyXtyqbRTYOQHHSA00eAnztsbrVdPZeI_PsJIbRt4t_v',
      status: 'watching'
    },
    {
      id: 3,
      title: 'รักที่ปลายนิ้วสัมผัส',
      genre: 'โรแมนติก',
      year: '2022',
      episode: null,
      totalEpisodes: null,
      timeLeft: 'ดูซ้ำ',
      progress: 100,
      poster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyaOZmIG-EbeFAYbcfwldLuR1vUKKKHQz4wnjAbxVqThXPY5Rxxsu8VtaP7Rtd1sdqKyel8TXjOQTzkklei_55MniddUPZUHNQ6AlzbI1pcDVRN7fH2DCWlVS0UYjAx9lBLIBERF_vJp95Qvk8y52dDEs9oQj-ZZk0zGS26Esi1Re-yzowzQDg9nuk439o1oLdAiqvsONsatRQe2ebvHpJCV93_ZUtUgjGP2PAcxkeaWsGRHkWNSIPI9r1nP7Py8xZaovVZszgK8tu',
      status: 'completed'
    },
    {
      id: 4,
      title: 'จักรวรรดิ์แห่งเงา',
      genre: 'แฟนตาซี',
      year: '2024',
      episode: 1,
      totalEpisodes: 50,
      timeLeft: '10 นาที',
      progress: 5,
      poster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD17rFElNqss8jxyqpCdfXeC4SSVM3unUtuOy_azRdKvC8FH-GXL3JYdHVxbDADdY7nRFF0co_5_Q49olLfsRGDoXP-8Dw4vFg9Ku61ZaImLzx6GPmHcvEBtAnU9EKtnF7zGKCq0qdW3P_qUbAviIERdP-3XNDI1rcm3qPR7S9j_qgpQoKyQkYY81i9589TlqVC-QjinKDaG7tPpkPlRaZIvXwDHFeRz_S04ovScNBui81wetUNyHxtO764N31nbxP2h7Eu8mVoZvZQ',
      status: 'watching'
    },
    {
      id: 5,
      title: 'มรดกอาร์เคด',
      genre: 'สารคดี',
      year: '2021',
      episode: 8,
      totalEpisodes: 8,
      timeLeft: 'ดูเมื่อ 2 เดือนที่แล้ว',
      progress: 100,
      poster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8Fi3XBt_5AlduCSqWrfht9XD-y4EJ_mQKsKEIspbwqgxlxbTYCmJba-mTmNGrKjjXaFt-iVKdfbysdmeCUxK-3bC5GnebnCY2RFUZn22gy7zpEVb81a3PQN_xOGwfrdSmEpbNw2xHrVzHby7hj2kRmn6YkD7nLD85CDwYvtZ5yphUOj-oOsXobRI__7W5uXS-4YtIMgqmZrd4aEPtu1bXfs73cRyXWRGkUfKuoTlgtthVrVJCl4WfuXE1NSB61tgMYWnhQlS5CpME',
      status: 'old'
    }
  ]

  const favoritesList = []

  const getProgressColor = (status: string, progress: number) => {
    if (status === 'completed') return 'bg-green-500'
    return 'bg-primary'
  }

  const getStatusText = (item: any) => {
    if (item.status === 'completed') return { text: 'ดูแล้ว', color: 'text-green-400' }
    if (item.episode && item.totalEpisodes) {
      return { 
        text: `ตอนที่ ${item.episode} <span class="text-gray-400 dark:text-gray-500 font-normal">/ ${item.totalEpisodes}</span>`, 
        color: 'text-primary' 
      }
    }
    return { text: `ตอนที่ ${item.episode} <span class="text-gray-400 dark:text-gray-500 font-normal">/ ${item.totalEpisodes}</span>`, color: 'text-gray-500' }
  }

  const MediaItem = ({ item }: { item: any }) => {
    const status = getStatusText(item)
    const isOld = item.status === 'old'
    
    return (
      <div className={`group relative flex flex-row bg-white dark:bg-surface-dark rounded-xl overflow-hidden hover:bg-gray-50 dark:hover:bg-surface-dark-hover transition-all duration-300 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md h-32 md:h-40 ${isOld ? 'opacity-75 hover:opacity-100' : ''}`}>
        {/* Poster */}
        <div className={`relative w-24 md:w-32 flex-shrink-0 h-full ${isOld ? 'grayscale group-hover:grayscale-0 transition-all' : ''}`}>
          <Image 
            alt={item.title} 
            className="w-full h-full object-cover" 
            src={item.poster}
            fill
            sizes="(max-width: 768px) 96px, 128px"
          />
          {/* Play Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-primary/90 text-white flex items-center justify-center transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 shadow-lg cursor-pointer">
              <PlayArrowIcon />
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-grow p-4 md:p-5 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                {item.genre} • {item.year}
              </p>
            </div>
            <button className="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-400 hover:text-primary transition-colors">
              <MoreVertIcon />
            </button>
          </div>
          
          <div className="mt-auto">
            <div className="flex justify-between items-end mb-2">
              <span 
                className="text-xs font-medium"
                dangerouslySetInnerHTML={{ __html: status.text }}
              />
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {item.timeLeft}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
              <div 
                className={`${getProgressColor(item.status, item.progress)} h-1.5 rounded-full transition-all duration-300`}
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-white antialiased min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background-light/90 dark:bg-background-dark/90 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">คลังของฉัน</h1>
          <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-surface-dark transition-colors group">
            <SearchIcon />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-4xl mx-auto px-4 py-8">
        {/* Tabs Navigation */}
        <div className="flex items-center space-x-8 mb-8 border-b border-gray-200 dark:border-gray-800">
          <button 
            onClick={() => setActiveTab('watching')}
            className={`pb-4 text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'watching' 
                ? 'border-primary text-primary' 
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-700'
            }`}
          >
            กำลังดู
          </button>
          <button 
            onClick={() => setActiveTab('favorites')}
            className={`pb-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'favorites' 
                ? 'border-primary text-primary' 
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-700'
            }`}
          >
            รายการโปรด
          </button>
        </div>

        {/* Content based on active tab */}
        <div className="space-y-4">
          {activeTab === 'watching' && watchingList.map(item => (
            <MediaItem key={item.id} item={item} />
          ))}
          
          {activeTab === 'favorites' && favoritesList.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">ยังไม่มีรายการโปรด</p>
            </div>
          )}
        </div>

        {/* Pagination / Load More */}
        <div className="mt-8 flex justify-center">
          <button className="px-6 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-surface-dark transition-colors">
            โหลดประวัติเพิ่มเติม
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center text-xs text-gray-500 dark:text-gray-500">
          <p>© 2024 บุ๊คบิ๊ก</p>
          <div className="flex space-x-4">
            <a className="hover:text-primary transition-colors" href="#">ความเป็นส่วนตัว</a>
            <a className="hover:text-primary transition-colors" href="#">เงื่อนไข</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
