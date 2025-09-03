import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle, Clock, Receipt, TrendingDown } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: XCircle,
      title: "Uncertain Cash Flow",
      description: "You’re never quite sure where your cash flow stands, making strategic decisions difficult.",
    },
    {
      icon: TrendingDown,
      title: "Tax Time Stress",
      description: "Tax time feels like a gamble — will it be a refund, a surprise bill, or missed savings?",
    },
    {
      icon: Clock,
      title: "Wasted Hours",
      description: "You’re losing hours every week chasing receipts, reconciling books, and stressing over compliance deadlines.",
    },
    {
      icon: Receipt,
      title: "Inefficient Operations",
      description: "Deep down, you know this isn’t the best use of your time, hindering your business's true potential.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Right now, running your business feels harder than it should.
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          These common challenges can hold back even the most ambitious businesses.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-red-500">
              <CardHeader className="flex flex-col items-center space-y-4">
                <problem.icon className="w-12 h-12 text-red-500" />
                <CardTitle className="text-xl font-semibold text-gray-900">{problem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;