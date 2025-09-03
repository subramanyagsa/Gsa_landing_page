import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Hourglass, ShieldCheck } from "lucide-react";

const SolutionSection = () => {
  const solutions = [
    {
      icon: CheckCircle,
      title: "Clear Financial Overview",
      description: "A clear, real-time view of your cash flow, profits, and expenses at your fingertips.",
    },
    {
      icon: ShieldCheck,
      title: "Zero Tax Surprises",
      description: "Every filing done on time, every deduction captured, ensuring zero tax surprises.",
    },
    {
      icon: Hourglass,
      title: "Time for Growth",
      description: "Hours of your week freed up to focus on growth, clients, and strategy, not admin.",
    },
    {
      icon: TrendingUp,
      title: "Investor Confidence",
      description: "Audit-ready records that give investors, banks, and stakeholders total confidence.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Imagine instead…
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          A future where your finances are a catalyst for growth, not a source of stress.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
              <CardHeader className="flex flex-col items-center space-y-4">
                <solution.icon className="w-12 h-12 text-green-500" />
                <CardTitle className="text-xl font-semibold text-gray-900">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;