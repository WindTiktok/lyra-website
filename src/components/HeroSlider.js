export default function HeroSlider() {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden overflow-x-hidden">
      {/* Purple Gradient Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent" />
      
      {/* Top Section */}
      <div className="absolute top-0 w-full h-[15vh] md:h-[15vh] xl:max-h-[400px] flex items-center z-20">
        <div className="animate-infinite-scrolldown whitespace-nowrap">
          {[...Array(16)].map((_, i) => (
            <div key={`top-${i}`} className="inline-block mx-1 md:mx-2 lg:mx-3">
              <h1 className="text-0.1xl md:text-0.1xl lg:text-0.1xl text-white font-bold">ELIZA (OPERATING SYSTEM)</h1>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 w-full h-[4vh] md:h-[3vh] xl:max-h-[400px] flex items-center z-20">
        <div className="animate-infinite-scrollup whitespace-nowrap">
          {[...Array(16)].map((_, i) => (
            <div key={`bottom-${i}`} className="inline-block mx-1 md:mx-2 lg:mx-3">
              <h1 className="text-0.1xl md:text-0.1xl lg:text-0.1xl text-white font-bold">ELIZA IS YOURS</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}