'use client';

import Image from "next/image";
import { useState } from 'react';

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(75);
  const [progress, setProgress] = useState(25);
  const [showControls, setShowControls] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white font-display antialiased">
      {/* Video Player */}
      <div className="relative w-full h-screen">
        {/* Background Video/Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            alt="Video Background"
            className="w-full h-full object-cover"
            src="https://picsum.photos/seed/video-bg/1920/1080.jpg"
            fill
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Top Controls */}
        <div className={`absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent p-4 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div>
                <h1 className="text-lg font-semibold">ความลับของ CEO</h1>
                <p className="text-sm text-gray-300">ตอนที่ 45</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </button>
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a9.001 9.001 0 01-7.432 0m9.032-4.026A9.001 9.001 0 0112 3c-4.474 0-8.268 3.12-9.032 7.326m0 0A9.001 9.001 0 0012 21c4.474 0 8.268-3.12 9.032-7.326" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Center Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors group"
          >
            {isPlaying ? (
              <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"/>
              </svg>
            ) : (
              <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
              </svg>
            )}
          </button>
        </div>

        {/* Bottom Controls */}
        <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="relative w-full h-1 bg-white/30 rounded-full overflow-hidden">
              <div 
                className="absolute left-0 top-0 h-full bg-primary transition-all duration-100"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-300 mt-1">
              <span>12:45</span>
              <span>45:20</span>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.445 14.832A1 1 0 0010 14v-4a1 1 0 00-1.555-.832L5 11.168V6a1 1 0 00-2 0v8a1 1 0 002 0v-5.168l3.445 2z"/>
                </svg>
              </button>
              
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L8 12.168V14a1 1 0 002 0V6a1 1 0 00-2 0v1.832L4.555 5.168z"/>
                </svg>
              </button>

              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-3 hover:bg-white/10 rounded-full transition-colors"
              >
                {isPlaying ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                  </svg>
                )}
              </button>

              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11.555 5.168A1 1 0 0010 6v4a1 1 0 001.555.832L15 8.832V14a1 1 0 002 0V6a1 1 0 00-1.555-.832L12 8.168V6a1 1 0 00-1.555-.832z"/>
                </svg>
              </button>

              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15.445 14.832A1 1 0 0017 14v-4a1 1 0 00-1.555-.832L12 11.168V6a1 1 0 00-2 0v8a1 1 0 002 0v-1.832l3.445 2z"/>
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-4">
              {/* Volume */}
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd"/>
                  </svg>
                </button>
                <div className="w-20 h-1 bg-white/30 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-100"
                    style={{ width: `${volume}%` }}
                  ></div>
                </div>
              </div>

              {/* Settings */}
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                </svg>
              </button>

              {/* Fullscreen */}
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8V4m0 0h4M3 4l4 4m10 0V4m0 0h-4m4 0l-4 4m-6 4v4m0 0h4m-4 0l4-4m6 4l-4-4m4 4v4m0 0h-4m4 0l-4-4"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Episode List Sidebar */}
        <div className="absolute right-0 top-0 bottom-0 w-80 bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">รายการตอน</h2>
            <button className="p-1 hover:bg-white/10 rounded transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-2">
            {Array.from({length: 60}, (_, i) => i + 1).map((episode) => (
              <div 
                key={episode}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  episode === 45 
                    ? 'bg-primary/20 border border-primary' 
                    : 'hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-16 rounded bg-slate-700 overflow-hidden flex-shrink-0">
                      <Image 
                        alt={`Episode ${episode}`}
                        className="w-full h-full object-cover"
                        src={`https://picsum.photos/seed/ep${episode}/100/150.jpg`}
                        width={48}
                        height={64}
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">ตอนที่ {episode}</h3>
                      <p className="text-xs text-gray-400">22:45</p>
                    </div>
                  </div>
                  {episode === 45 && (
                    <div className="text-xs bg-primary text-white px-2 py-1 rounded">
                      กำลังดู
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
