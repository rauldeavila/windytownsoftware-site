import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="p-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-700 mb-2">
          &copy; {new Date().getFullYear()} windytownsoftware. All rights
          reserved.
        </p>
        <div className="flex justify-center space-x-4 mb-4">
          <Link href="/privacy-policy" className="text-sm text-gray-700 hover:text-black transition-colors">
            Privacy Policy
          </Link>
        </div>
        <p className="text-xs text-gray-500 max-w-2xl mx-auto">
          GTD® and Getting Things Done® are registered trademarks of the David Allen Company.
          Windytown Software and Contexts are not affiliated with or endorsed by the David Allen Company.
        </p>
      </div>
    </footer>
  );
}
