import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-2 text-center">Why this app exists</h1>
        <p className="text-xl text-gray-600 mb-16 text-center">
        I know, I know...There are thousands of task managers out there.
        </p>

        <div className="bg-white p-12 rounded-xl retro-border mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            Hi, I'm Raul <span className="ml-2">👋</span>
          </h2>

          <p className="text-lg mb-6">
            I built Contexts because I got tired of searching for the perfect GTD app 😄
          </p>

          <p className="text-lg mb-6">
            I tried a lot of task managers on the market but they were either way too simple OR they were too complicated (or even worse... ugly).
          </p>

          <p className="text-lg mb-6">
            So I thought it'd be fun to use the skills I have from my main job as a software engineer to learn Swift and build something native for iOS only.
          </p>

          <p className="text-lg mb-6">
            The app has 2 core principles:
          </p>

          <ol className="list-decimal list-inside text-lg mb-6 pl-4">
            <li className="mb-2">You do almost everything in the custom header, you go to the contexts, or to your events, you change contexts, you create new ones, you navigate projects...</li>
            <li className="mb-2">It's dead simple to use once you get used to this header centered design</li>
          </ol>

          <p className="text-lg mb-6">
            And that's the main reason the app exists today!
          </p>

          <p className="text-lg mb-6">
            A second reason is that I'm developing a <Link href="/#lightward" className="font-semibold text-blue-700 hover:text-blue-900 transition-colors">big commercial game</Link> and I wanted to take a break from it to start building something else that I would be able to finish in this lifetime.
          </p>

          <p className="text-lg mb-6">
            And finally, thank you for checking out my app!
          </p>

          <div className="mt-12 flex items-center justify-start space-x-16">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/profile.jpg"
                alt="Raul"
                width={90}
                height={90}
                className="rounded-full mb-4 w-[90px] h-[90px] object-cover"
              />
              <p className="font-bold text-xl mb-1">Raul</p>
              <p className="text-gray-600">Contexts developer</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/odin_and_malu.png"
                alt="Odin and Malu Picture"
                width={90}
                height={90}
                className="rounded-full mb-4 w-[90px] h-[90px] object-cover"
              />
              <p className="font-bold text-xl mb-1">Odin & Malu</p>
              <p className="text-gray-600">Bread QA and security</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
