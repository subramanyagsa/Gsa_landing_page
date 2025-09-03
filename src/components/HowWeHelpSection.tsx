import React from 'react';
import { UserCheck, Briefcase, TrendingUp, Settings } from 'lucide-react';

const HowWeHelpSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          That’s exactly what Global Scale Accountants delivers.
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-12">
          We become your complete outsourced finance team:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md">
            <UserCheck className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Dedicated Chartered Accountant + account manager</h3>
            <p className="text-gray-600 dark:text-gray-400">Personalized expert support for your financial needs.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md">
            <Briefcase className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">End-to-end accounting, payroll, and compliance</h3>
            <p className="text-gray-600 dark:text-gray-400">Comprehensive services covering all your financial operations.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md">
            <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Proactive tax planning and real-time reporting</h3>
            <p className="text-gray-600 dark:text-gray-400">Stay ahead with strategic tax advice and up-to-date insights.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md">
            <Settings className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">A system built for efficiency, scalability, and total confidence</h3>
            <p className="text-gray-600 dark:text-gray-400">Robust financial systems designed for your business growth.</p>
          </div>
        </div>
        <div className="mt-12">
          <img src="/placeholder.svg" alt="Team working" className="w-full max-w-xl mx-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default HowWeHelpSection;