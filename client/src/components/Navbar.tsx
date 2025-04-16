"use client";

import Link from "next/link";
import { LogIn } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 left-0 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-blue-600 dark:text-blue-400"
            >
              FinancePal
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <SignedOut>
              <Link
                href="/sign-in"
                className="inline-flex items-center gap-2 rounded-md bg-white/50 dark:bg-gray-800/50 px-3 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400 shadow-sm ring-1 ring-inset ring-blue-600/20 hover:bg-blue-50 dark:hover:bg-gray-700"
              >
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}
