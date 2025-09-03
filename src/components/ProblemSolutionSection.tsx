import React from 'react';
import { CheckCircle, XCircle, Clock, DollarSign, FileText, Lightbulb, TrendingUp, ShieldCheck, Users } from 'lucide-react';

const ProblemSolutionSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Before - The Current Pain */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center md:text-left">
              Right now, running your business feels harder than it should.
            </h2>
            <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <span>You’re never quite sure where your cash flow stands.</span>
              </li>
              <li className="flex items-start gap-3">
                <DollarSign className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <span>Tax time feels like a gamble — will it be a refund, a surprise bill, or missed savings?</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <span>You’re losing hours every week chasing receipts, reconciling books, and stressing over compliance deadlines.</span>
              </li>
              <li className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <span>And deep down, you know this isn’t the best use of your time.</span>
              </li>
            </ul>
            <div className="flex justify-center md:justify-start">
              <img src="/placeholder.svg" alt="Business challenges" className="w-full max-w-xs md:max-w-sm rounded-lg shadow-lg" />
            </div>
          </div>

          {/* After - The Desired Future */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center md:text-left">
              Imagine instead…
            </h2>
            <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span>A clear, real-time view of your cash flow, profits, and expenses.</span>
              </li>
              <li className="flex items-start gap-3">
                <FileText className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span>Zero tax surprises — every filing done on time, every deduction captured.</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span>Audit-ready records that give investors, banks, and stakeholders confidence.</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span>Hours of your week freed up to focus on growth, clients, and strategy.</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span>The peace of mind that comes with knowing your finances are handled by experts.</span>
              </li>
            </ul>
            <div className="flex justify-center md:justify-start">
              <img src="/placeholder.svg" alt="Business success" className="w-full max-w-xs md:max-w-sm rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;