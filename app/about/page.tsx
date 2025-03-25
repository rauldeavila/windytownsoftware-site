import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Team</h1>

      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-600 mb-12 text-center">
          Meet the people behind Windytown Software.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Raul */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 w-32 h-32 relative">
              <Image
                src="/images/profile.jpg"
                alt="Raul"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="rounded-full object-cover border-4 border-gray-700 shadow-md"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">Raul</h3>
            <p className="text-gray-600 mb-3">Regional Manager</p>
            <p className="text-sm text-gray-700 max-w-xs mx-auto">
              Software engineer with a passion for creating. I'm the only one working on this, so I'm the one who will answer your emails.
            </p>
          </div>

          {/* Odin and Malu */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 w-32 h-32 relative">
              <Image
                src="/images/odin_and_malu.png"
                alt="Odin and Malu"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="rounded-full object-cover border-4 border-gray-700 shadow-md"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">Odin & Malu</h3>
            <p className="text-gray-600 mb-3">Assistants <span className="line-through">to</span> Regional Manager</p>
            <p className="text-sm text-gray-700 max-w-xs mx-auto">
              Keep the team motivated with endless enthusiasm, occasional barks of encouragement, and purrs of approval.
            </p>
          </div>
        </div>

        {/* Why windytown section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-6">Why Windytown?</h2>
          <div className="bg-white p-8 rounded-xl retro-border max-w-2xl mx-auto">
            <p className="text-lg">
              Because we literally live in a town where the wind never stops blowing.
              Our hair is permanently styled in a "just survived a hurricane" look.
            </p>
            <p className="text-lg mt-4">
              So we figured, might as well embrace it and build software that moves as
              quickly as the wind around here!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
