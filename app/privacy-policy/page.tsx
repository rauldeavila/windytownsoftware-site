import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicyIndex() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policies</h1>

      <p className="mb-6">
        At windytown software, we respect your privacy and are committed to protecting your personal information.
        Below you'll find links to the privacy policies for our apps and services.
      </p>

      <div className="grid gap-4">
        <Link
          href="/privacy-policy/contexts"
          className="block p-4 border-2 border-[#333] rounded hover:bg-[#333] hover:text-[#f5e5c0] transition-colors"
        >
          <h2 className="text-xl font-bold">Contexts App</h2>
          <p>Privacy policy for the Contexts iOS application</p>
        </Link>

        {/* Add more app policy links here as needed */}
      </div>
    </div>
  );
}
