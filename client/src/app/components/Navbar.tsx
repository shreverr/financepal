'use client';

import Link from 'next/link';
import { LogIn } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 left-0 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
              FinancePal
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Features
            </Link>
            <Link href="/chat" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Get Started
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-md bg-white/50 dark:bg-gray-800/50 px-3 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400 shadow-sm ring-1 ring-inset ring-blue-600/20 hover:bg-blue-50 dark:hover:bg-gray-700"
            >
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Link>
            <Link
              href="/signup"
              className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}