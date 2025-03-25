"use client";

import { useState } from "react";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [expandedFaqs, setExpandedFaqs] = useState<{[key: string]: boolean}>({
    'free-plan': false,
    'trial': false,
    'data': false
  });

  const toggleFaq = (key: string) => {
    setExpandedFaqs(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-6xl font-bold mb-8 text-center">Pricing</h1>

      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-600 mb-12 text-center">
          All new accounts automatically come with a 7 day trial, no credit card needed ✌️
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Subscription */}
          <div className="rounded-[20px] border-2 border-black p-8 flex flex-col bg-gray-50">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Subscription</h2>

              {/* Billing cycle toggle */}
              <div className="inline-flex items-center bg-gray-100 rounded-full p-1 relative">
                <div
                  className="absolute inset-y-1 rounded-full bg-white shadow-sm z-0 transition-all duration-300 ease-in-out"
                  style={{
                    left: billingCycle === 'monthly' ? '4px' : '50%',
                    right: billingCycle === 'monthly' ? '50%' : '4px',
                  }}
                />
                <button
                  className={`px-4 py-2 rounded-full text-sm relative z-10 transition-all duration-300 ease-in-out ${
                    billingCycle === 'monthly' ? 'text-black' : 'text-gray-500'
                  }`}
                  onClick={() => setBillingCycle('monthly')}
                >
                  Monthly
                </button>
                <button
                  className={`px-4 py-2 rounded-full text-sm relative z-10 transition-all duration-300 ease-in-out ${
                    billingCycle === 'annual' ? 'text-black' : 'text-gray-500'
                  }`}
                  onClick={() => setBillingCycle('annual')}
                >
                  Annual
                </button>
              </div>
            </div>

            <div className="h-16 relative overflow-hidden">
              {/* Monthly price - shown when monthly is selected */}
              <div
                className={`absolute w-full transition-all duration-300 ease-in-out ${
                  billingCycle === 'monthly'
                    ? 'opacity-100 transform-none'
                    : 'opacity-0 -translate-y-8'
                }`}
              >
                <div className="text-5xl font-bold flex items-baseline">
                  $4.99 <span className="text-base font-normal text-gray-500 ml-1">/month</span>
                </div>
              </div>

              {/* Annual price - shown when annual is selected */}
              <div
                className={`absolute w-full transition-all duration-300 ease-in-out ${
                  billingCycle === 'annual'
                    ? 'opacity-100 transform-none'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="text-5xl font-bold flex items-baseline">
                  $19.99 <span className="text-base font-normal text-gray-500 ml-1">/year</span>
                </div>
              </div>
            </div>

            <ul className="mt-6 space-y-4 flex-grow">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Unlimited contexts</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Unlimited projects</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Recurring tasks</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Custom notifications</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Habit tracking</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Daily journal</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Task priorities</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Color and icon customizations</span>
              </li>
            </ul>
          </div>

          {/* Lifetime */}
          <div className="rounded-[20px] border-2 border-black p-8 flex flex-col bg-gray-50">
            <h2 className="text-2xl font-bold mb-6">Lifetime</h2>
            <div className="text-5xl font-bold mb-2 flex items-baseline">
              $49.99 <span className="text-base font-normal text-gray-500 ml-1">once</span>
            </div>

            <ul className="mt-6 space-y-4 flex-grow">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Access to all features</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>All future updates</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-4xl font-bold mt-24 mb-8 text-center">Frequently asked questions</h2>

        <div className="space-y-4">
          {/* Is there a free plan? */}
          <div className="border-b border-gray-200 pb-4">
            <button
              className="flex w-full justify-between items-center text-left text-xl font-semibold py-4"
              onClick={() => toggleFaq('free-plan')}
            >
              Is there a free plan?
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${expandedFaqs['free-plan'] ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedFaqs['free-plan'] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="py-4 text-gray-600">
                <p className="mb-4">Yes, with limitations:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Maximum of 5 contexts and 2 projects</li>
                  <li>No recurring tasks or custom notifications</li>
                  <li>No daily journal feature</li>
                  <li>No customizations (app icon, accent color, etc.)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How does the free trial work? */}
          <div className="border-b border-gray-200 pb-4">
            <button
              className="flex w-full justify-between items-center text-left text-xl font-semibold py-4"
              onClick={() => toggleFaq('trial')}
            >
              How does the free trial work?
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${expandedFaqs['trial'] ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedFaqs['trial'] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="py-4 text-gray-600">
                <p className="mb-2">All users automatically get a 7 day trial that starts once you sign up. Nothing to do on your end and nothing to cancel :)</p>
              </div>
            </div>
          </div>

          {/* Do you sell my data? */}
          <div className="border-b border-gray-200 pb-4">
            <button
              className="flex w-full justify-between items-center text-left text-xl font-semibold py-4"
              onClick={() => toggleFaq('data')}
            >
              Do you sell my data?
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${expandedFaqs['data'] ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedFaqs['data'] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="py-4 text-gray-600">
                <p>No, we do not sell your data. Your information is private and secure.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
