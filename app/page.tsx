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

          {/* Lightward Game Banner - Simple Image Link */}
          <div id="lightward" className="mb-16">
            <a href="https://s.team/a/1492830/" target="_blank" rel="noopener noreferrer" className="block transform hover:scale-[1.01] transition-all hover:shadow-xl">
              <Image
                src="/images/lightward_game_cover.png"
                alt="Lightward - A cute and dark 2D Metroidvania game"
                width={1000}
                height={1000}
                className="w-full h-auto rounded-lg"
                priority
              />
            </a>
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

