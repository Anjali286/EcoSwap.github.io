import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-purple-600">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">EcoSwap 
</span>
                <span className="block text-purple-200">From 
Disposable 
</span>
<span className="block text-purple-200">to 
Sustainable</span>
              </h1>
              <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Join the movement towards a cleaner, greener future. Discover eco-friendly alternatives to everyday products and make a positive impact on our planet.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#featured-products"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Explore Products
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
  href="#about"
  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#83689D] hover:bg-[#6F5A8A] md:py-4 md:text-lg md:px-10"
>
  Learn More
</a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="./src/images/banner.png"
          alt="Eco-friendly products"
        />
      </div>
    </div>
  );
}