"use client";

import React from 'react';
import Image from 'next/image';

export default function KeyFeatures() {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* Grid of feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto mb-12">
          {/* Feature 1 */}
          <div>
            <Image
              src="/contexts/key-feature-1.png"
              alt="Built for GTD, mind like water"
              width={450}
              height={200}
              className="w-full h-auto"
            />
          </div>

          {/* Feature 2 */}
          <div>
            <Image
              src="/contexts/key-feature-2.png"
              alt="Quickly switch between Projects and Contexts"
              width={450}
              height={200}
              className="w-full h-auto"
            />
          </div>

          {/* Feature 3 */}
          <div>
            <Image
              src="/contexts/key-feature-3.png"
              alt="Hide things you don't want to see on specific days"
              width={450}
              height={200}
              className="w-full h-auto"
            />
          </div>

          {/* Feature 4 */}
          <div>
            <Image
              src="/contexts/key-feature-4.png"
              alt="Recurring tasks, Custom alerts, Habit tracking"
              width={450}
              height={200}
              className="w-full h-auto"
            />
          </div>

          {/* Feature 5 */}
          <div>
            <Image
              src="/contexts/key-feature-5.png"
              alt="Plan your day with events, timeblocking support"
              width={450}
              height={200}
              className="w-full h-auto"
            />
          </div>

          {/* Feature 6 */}
          <div>
            <Image
              src="/contexts/key-feature-6.png"
              alt="Journal anytime right in our calendar"
              width={450}
              height={200}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Focus section */}
        <div className="max-w-3xl mx-auto text-center mt-12 mb-6">
          <div className="mb-8">
            <Image
              src="/contexts/focus-calling.png"
              alt="Focus on what matters in the right moment"
              width={600}
              height={120}
              className="mx-auto h-auto"
            />
          </div>

          <div className="flex justify-center">
            <a href="https://apps.apple.com/app/contexts/id1547991744" className="hover:opacity-90 transition-all">
              <Image
                src="/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg"
                alt="Download on the App Store"
                width={120}
                height={40}
                className="mt-2"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
