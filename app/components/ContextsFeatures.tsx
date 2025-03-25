"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function KeyFeatures() {
  const [currentDate, setCurrentDate] = useState("");
  const [currentYear, setCurrentYear] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Format date like "Mar 23" and year like "2024"
    const updateDateTime = () => {
      const date = new Date();
      const month = date.toLocaleString('en-US', { month: 'short' });
      const day = date.getDate();
      const year = date.getFullYear();

      // Format time like "17:19"
      const hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, '0');

      setCurrentDate(`${month} ${day}`);
      setCurrentYear(`${year}`);
      setCurrentTime(`${hours}:${minutes}`);
    };

    // Initial update
    updateDateTime();

    // Update time every minute
    const intervalId = setInterval(updateDateTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* App-like interface */}
        <div className="max-w-lg mx-auto mb-16">
          {/* Simplified statusbar with only time */}
          <div className="bg-white pt-8 pb-2 px-8 rounded-t-[64px]">
            <div className="text-black font-bold text-lg">{currentTime}</div>
          </div>

          {/* App interface */}
          <div className="bg-white px-8 pb-16 rounded-b-[64px] shadow-lg border-t-0">
            {/* App header */}
            <div className="py-8 flex justify-between items-start">
              <h1 className="text-4xl font-bold">Features</h1>
              <div className="text-right">
                <div className="text-xl font-bold">{currentDate}</div>
                <div className="text-gray-400 flex items-center">
                  <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                  </svg>
                  <span>{currentYear}</span>
                </div>
              </div>
            </div>

            {/* Feature tasks */}
            <div className="space-y-0">
              {/* Feature 1 */}
              <div className="border-b border-dashed border-gray-200 py-4 flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <Image
                    src="/contexts/checkbox-with-checkmark-site.png"
                    alt="Completed"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-4 text-lg font-medium text-black">Built for GTD</div>
              </div>

              {/* Feature 2 */}
              <div className="border-b border-dashed border-gray-200 py-4 flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <Image
                    src="/contexts/checkbox-with-checkmark-site.png"
                    alt="Completed"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-4 text-lg font-medium text-black">Quickly switch between Contexts and Projects</div>
              </div>

              {/* Feature 3 */}
              <div className="border-b border-dashed border-gray-200 py-4 flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <Image
                    src="/contexts/checkbox-with-checkmark-site.png"
                    alt="Completed"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-4 text-lg font-medium text-black">Hide things you don't want to see on specific days</div>
              </div>

              {/* Feature 4 */}
              <div className="border-b border-dashed border-gray-200 py-4 flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <Image
                    src="/contexts/checkbox-with-checkmark-site.png"
                    alt="Completed"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-4 text-lg font-medium text-black">Recurring Tasks</div>
              </div>

              {/* Feature 5 */}
              <div className="border-b border-dashed border-gray-200 py-4 flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <Image
                    src="/contexts/checkbox-with-checkmark-site.png"
                    alt="Completed"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-4 text-lg font-medium text-black">Custom alerts</div>
              </div>

              {/* Feature 6 */}
              <div className="border-b border-dashed border-gray-200 py-4 flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <Image
                    src="/contexts/checkbox-with-checkmark-site.png"
                    alt="Completed"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-4 text-lg font-medium text-black">Habit tracking</div>
              </div>

              {/* Feature 7 */}
              <div className="border-b border-dashed border-gray-200 py-4 flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <Image
                    src="/contexts/checkbox-with-checkmark-site.png"
                    alt="Completed"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-4 text-lg font-medium text-black">Day planning with events and timeblocking</div>
              </div>

              {/* Feature 8 */}
              <div className="border-b border-dashed border-gray-200 py-4 flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <Image
                    src="/contexts/checkbox-with-checkmark-site.png"
                    alt="Completed"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-4 text-lg font-medium text-black">Daily journal</div>
              </div>

              {/* Feature 9 */}
              <div className="py-4 flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <Image
                    src="/contexts/checkbox-with-checkmark-site.png"
                    alt="Completed"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-4 text-lg font-medium text-black">Customizations</div>
              </div>
            </div>
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
            <a href="https://apps.apple.com/br/app/contexts/id6743253834" className="hover:opacity-90 transition-all">
              <Image
                src="/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg"
                alt="Download on the App Store"
                width={200}
                height={67}
                className="mt-2"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
