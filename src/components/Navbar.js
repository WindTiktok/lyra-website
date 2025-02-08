// src/components/Navbar.js
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar({ variant }) {
  const router = useRouter();
  
  // 默认样式（首页用）
  if (variant === 'home') {
    return (
      <nav className="fixed bottom-[100px] w-full bg-transparent z-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col justify-center items-center h-auto gap-y-10">
            <div className="hidden md:flex flex-row space-x-8 items-center gap-y-6">
              <Link href="/framework" className="text-white/70 hover:text-white transition-colors duration-300 flex flex-col items-center gap-1 hover:scale-105 transform-gpu">
                <img src="/globe.svg" className="h-20 w-20 hover:rotate-12 transition-transform" alt="Framework" />
                <span className="text-sm font-medium">Framework</span>
              </Link>
              <Link href="/technology" className="text-white/70 hover:text-white transition-colors duration-300 flex flex-col items-center gap-1 hover:scale-105 transform-gpu">
                <img src="/file.svg" className="h-20 w-20 hover:rotate-12 transition-transform" alt="Technology" />
                <span className="text-sm font-medium">Technology</span>
              </Link>
              <Link href="/partners" className="text-white/70 hover:text-white transition-colors duration-300 flex flex-col items-center hover:scale-105 transform-gpu">
                <img src="/window.svg" className="h-20 w-20 hover:rotate-12 transition-transform" alt="Brand" />
                <span className="text-sm font-medium">Brand</span>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://x.com/LYRA_AI1" target="_blank" rel="noopener noreferrer" className="px-2 p-1.5 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-2xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                <span className="text-sm font-medium text-white">Twitter</span>
              </a>
              <a href="https://github.com/elizaOS" target="_blank" rel="noopener noreferrer" className="px-2 p-1.5 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-2xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                <span className="text-sm font-medium text-white">Github</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
  // technology
  if (variant === 'technology') {
    return (
      <nav className="fixed top-0 w-full bg-white/5 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            LYRA AI
          </Link>
          <div className="flex space-x-6 items-center">
            <div className="flex gap-4">
              <a href="https://x.com/LYRA_AI1" target="_blank" className="p-1.5 hover:rounded-2xl hover:bg-black/20 transition-all duration-300">
                Twitter
              </a>
              <a href="https://github.com/elizaOS" target="_blank" className="p-1.5 hover:rounded-2xl hover:bg-black/20 transition-all duration-300"> 
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav> 
    )
  }
  // Framework页样式
  return (
    <nav className="fixed top-0 w-full bg-white/5 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white text-xl font-bold">
            LYRA AI
          </Link>
          
          <div className="flex space-x-6 items-center">
            <div className="flex space-x-4 ml-4">
              <a href="https://x.com/LYRA_AI1" target="_blank" className="p-2 text-white hover:text-white rounded-2xl hover:bg-white/20 transition-colors">
                Twitter
              </a>
              <a href="https://github.com/elizaOS" target="_blank" className="p-2 text-white hover:text-white rounded-2xl hover:bg-white/20 transition-colors">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>  
  )
}