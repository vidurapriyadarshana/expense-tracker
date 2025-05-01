import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-50 flex items-center flex-col">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 lg:flex">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Manage Your Expense
            <strong className="text-indigo-600"> Control </strong>
            Your Money
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            start Creating your budget and save ton of money
          </p>

          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <a
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
              href="#"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <Image src="/report.webp" alt="logo" width={1000} height={700} className="mt-5 rounded-xl border-2" />
    </section>
  );
};

export default Hero;
