import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="h-full bg-black text-white relative overflow-hidden rounded-[50px]" style={{ minHeight: 'calc(100vh - 4rem)' }}>
        <div 
          className="absolute inset-0 opacity-20 rounded-[50px]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        <header className="relative z-10 flex justify-between items-center p-8">
          <div className="flex-1 flex justify-center">
            <h1 className="text-4xl font-bold text-white">Digital Crafters</h1>
          </div>
          
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386"/>
            </svg>
          </div>
        </header>

        <main className="relative z-10 flex flex-col h-full">
          <div className="flex-1 flex items-center justify-center px-8">
            <div className="w-full max-w-6xl h-[60vh] flex items-center justify-center pointer-events-none">
              <Spline
                scene="https://prod.spline.design/Pjd673OcDqi3LUrg/scene.splinecode"
                className="w-full h-full pointer-events-none"
                style={{ pointerEvents: 'none' }}
              />
            </div>
          </div>

          <div className="text-center pb-16 px-8">
            <div className="flex items-center justify-center mb-8">
              <h2 className="text-5xl md:text-7xl font-bold text-white mr-4">
                we make apps
              </h2>
              <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl">😊</span>
              </div>
            </div>
            
            <div className="text-5xl md:text-7xl font-bold text-white mb-4">
              <span>for </span>
              <span className="relative inline-block">
                the new mainstream
                <div className="absolute -bottom-4 left-0 right-0">
                  <svg viewBox="0 0 400 20" className="w-full h-6">
                    <path
                      d="M 5 15 Q 200 5 395 15"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
