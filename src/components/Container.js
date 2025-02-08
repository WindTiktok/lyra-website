export function HeroContainer({ children }) {
  return (
    <div className="fixed top-[110px] left-0 w-full px-4 text-center bg-transparent text-xl z-10">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {children}
      </div>
    </div>
  )
}

export function PageContainer({ children }) {
  return <div className="max-w-5xl mx-auto px-4 md:px-6">{children}</div>
}

export default function Container({ children }) {
  return (
    <div className="p-4 md:p-6 bg-white rounded-lg shadow-md">
      {children}
    </div>
  )
}