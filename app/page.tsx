import Link from 'next/link'
import Image from 'next/image'
import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <div>
      <div className="container mx-auto px-4 py-16 md:py-24">

        {/* Apps Showcase */}
        <div className="max-w-3xl mx-auto">
          {/* Contexts App Card */}
          <div className="bg-white rounded-[30px] shadow-lg overflow-hidden mb-16 p-8">
            <Link href="/apps/contexts" className="block hover:opacity-95 transition-all">
              <div className="flex flex-col items-center">
                {/* App Logo and Title */}

                  <Image
                    src="/contexts/icon.png"
                    alt="Contexts icon"
                    width={200}
                    height={200}
                    className="mr-4"
                  />
                  <h2 className="text-4xl font-bold mb-12 text-gray-800">Contexts</h2>


                {/* App Description */}
                <p className="text-xl text-gray-600 mb-8 text-center max-w-xl">
                  A powerful task management app based on GTD® methodology that helps you focus on what matters most.
                </p>

                {/* CTA Button */}
                <div>
                  <span className="inline-block bg-black text-white px-8 py-3 rounded-[12px] font-semibold text-lg">
                    Learn More
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Lightward Game Banner - Full Retro NES Style */}
          <div id="lightward" className="mb-16">
            {/* NES Cartridge Style Container */}
            <div className="bg-black border-8 border-white p-6 shadow-xl relative overflow-hidden">
              {/* NES Box Content */}
              <div className="flex flex-col items-center">
                {/* Game Logo */}
                <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-8 items-center mt-12 mb-8">
                  {/* Left side - Game image */}
                  <div className="md:w-1/2">
                    <div className="relative z-10">
                      <Image
                        src="/images/lightward-console.png"
                        alt="Lightward game featuring pixel art characters"
                        width={500}
                        height={400}
                        className="rounded-md border-4 border-[#333] shadow-inner transform hover:scale-[1.02] transition-transform relative z-20"
                      />
                      {/* Subtle glow effect - less purple */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-15 blur-sm rounded-md z-10"></div>
                    </div>
                  </div>

                  {/* Right side - Game title and description */}
                  <div className="md:w-1/2 text-center md:text-left z-10">
                    <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4 uppercase tracking-tighter"
                        style={{
                          fontFamily: "'Press Start 2P', monospace",
                          textShadow: '3px 3px 0px rgba(0,0,0,0.8)'
                        }}>
                      LIGHTWARD
                    </h2>
                    <div className="bg-gradient-to-r from-gray-100 to-gray-300 h-1 w-20 mx-auto md:mx-0 mb-5"></div>

                    <p className="text-gray-200 font-bold text-lg mb-5 tracking-wide">
                      A CUTE AND DARK 2D METROIDVANIA FEATURING:
                    </p>

                    <ul className="text-white font-semibold text-sm space-y-4 list-none mb-6">
                      {/* Stylized bullet points */}
                      <li className="flex items-center">
                        <span className="inline-block w-4 h-4 bg-red-600 mr-3 transform rotate-45"></span>
                        A VAST INTERCONNECTED WORLD
                      </li>
                      <li className="flex items-center">
                        <span className="inline-block w-4 h-4 bg-blue-600 mr-3 transform rotate-45"></span>
                        CHALLENGING COMBAT
                      </li>
                      <li className="flex items-center">
                        <span className="inline-block w-4 h-4 bg-green-600 mr-3 transform rotate-45"></span>
                        POWERFUL ABILITIES
                      </li>
                      <li className="flex items-center">
                        <span className="inline-block w-4 h-4 bg-yellow-500 mr-3 transform rotate-45"></span>
                        CRISPY PIXEL ART
                      </li>
                    </ul>

                    {/* Retro-styled Call to Action */}
                    <a
                      href="https://s.team/a/1492830/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-red-700 hover:bg-red-600 text-white px-8 py-3 border-b-4 border-r-4 border-red-900 hover:border-red-800 transition-all transform hover:-translate-y-1 text-lg font-bold uppercase"
                    >
                      <div className="flex items-center">
                        <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2 fill-current">
                          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C7.4,22 3.55,18.92 2.36,14.73L6.19,16.31C6.45,17.6 7.6,18.58 8.97,18.58C10.53,18.58 11.8,17.31 11.8,15.75V15.62L15.2,13.19H15.28C17.36,13.19 19.05,11.5 19.05,9.42C19.05,7.34 17.36,5.65 15.28,5.65C13.2,5.65 11.5,7.34 11.5,9.42V9.47L8.22,12.96L2.36,9.19C3.55,5 7.4,2 12,2Z" />
                        </svg>
                        View on Steam
                      </div>
                    </a>
                  </div>
                </div>

                {/* Steam Widget */}
                <div className="w-full max-w-2xl mx-auto mb-12 relative">
                  {/* Retro Frame */}
                  <div className="bg-[#1a1a1a] border-4 border-gray-200 p-4 rounded-sm">
                    {/* Header Bar */}
                    <div className="bg-gradient-to-r from-gray-800 to-gray-700 mb-3 p-2 flex justify-between items-center">
                      <div className="bg-white h-3 w-3 rounded-full"></div>
                      <div className="text-white text-sm uppercase tracking-widest font-bold">STEAM STORE</div>
                      <div className="bg-white h-3 w-3 rounded-full"></div>
                    </div>

                    <iframe
                      src="https://store.steampowered.com/widget/1492830/"
                      frameBorder="0"
                      width="100%"
                      height="190"
                      title="Lightward on Steam"
                      style={{
                        background: 'transparent',
                        maxWidth: '100%'
                      }}
                    />
                  </div>
                </div>

                {/* Bottom Banner */}
                <div className="mt-2 flex justify-center items-center relative w-full">
                  <div className="bg-gray-200 px-12 py-2 inline-block transform -skew-x-12">
                    <div className="transform skew-x-12">
                      <span className="text-black font-bold text-sm tracking-wider">COMING SOON • WISHLIST NOW</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Corner Decorations */}
              <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-white to-gray-300"></div>
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-white to-gray-300"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-white to-gray-300"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-white to-gray-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="container mx-auto px-4 pb-16">
        <ContactForm />
      </div>
    </div>
  )
}

