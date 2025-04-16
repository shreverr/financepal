'use client';

import { useChat } from '@ai-sdk/react';
import { ChevronRight, PieChart, Shield, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { AuroraText } from '@/components/magicui/aurora-text';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative isolate">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-100 to-blue-200 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <a href="#" className="inline-flex space-x-6">
                <span className="rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-600 dark:text-blue-400 ring-1 ring-inset ring-blue-600/10">
                  What's new
                </span>
                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600 dark:text-gray-300">
                  <span>Just launched</span>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </span>
              </a>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-6xl">
              <AuroraText 
                colors={["#0284c7", "#0ea5e9", "#38bdf8", "#7dd3fc"]} 
                className="font-extrabold"
                speed={1.5}
              >
                Smart Retirement Planning
              </AuroraText>
              <span className="text-gray-900 dark:text-white block mt-2">powered by AI</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Get personalized investment advice that remembers your goals and adapts to market changes. Plan your retirement with confidence using our AI-powered financial advisor.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/chat"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 ease-in-out hover:scale-105"
              >
                Start Planning Now
              </Link>
              <Link href="#features" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7">
              <AuroraText 
                colors={["#0284c7", "#0ea5e9", "#38bdf8", "#7dd3fc"]}
                speed={0.7}
              >
                Smarter Planning
              </AuroraText>
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Everything you need for retirement planning
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Make informed investment decisions with our AI-powered platform that learns and adapts to your financial goals.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  title: 'Personalized Portfolio Analysis',
                  description: 'Get detailed insights into your investment portfolio with AI-powered analysis that considers your risk tolerance and goals.',
                  icon: PieChart,
                },
                {
                  title: 'Market Trend Integration',
                  description: 'Stay informed with real-time market trends and receive recommendations tailored to current economic conditions.',
                  icon: TrendingUp,
                },
                {
                  title: 'Smart Memory Technology',
                  description: 'Our AI remembers your preferences and past interactions to provide consistently relevant advice across conversations.',
                  icon: Shield,
                },
              ].map((feature, index) => (
                <div 
                  key={feature.title} 
                  className="relative glass-effect rounded-2xl p-6 transition-all duration-300 ease-in-out hover:translate-y-[-4px] hover:shadow-lg"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    opacity: 0,
                    animation: 'fadeInUp 0.5s ease forwards'
                  }}
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    <feature.icon className="h-5 w-5 flex-none text-blue-600 dark:text-blue-400" />
                    {feature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}