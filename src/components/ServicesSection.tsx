import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Briefcase, BarChart, Settings } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: User,
      title: "Dedicated Expertise",
      description: "A dedicated Chartered Accountant and account manager, acting as your complete outsourced finance team.",
    },
    {
      icon: Briefcase,
      title: "End-to-End Solutions",
      description: "Comprehensive accounting, payroll, and compliance services, handled seamlessly.",
    },
    {
      icon: BarChart,
      title: "Proactive Planning",
      description: "Proactive tax planning and real-time reporting to keep you ahead and informed.",
    },
    {
      icon: Settings,
      title: "Efficiency & Scalability",
      description: "A system built for efficiency, scalability, and total confidence in your financial operations.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          That’s exactly what Global Scale Accountants delivers.
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          We become your complete outsourced finance team, empowering your business for sustained growth.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-600">
              <CardHeader className="flex flex-col items-center space-y-4">
                <service.icon className="w-12 h-12 text-blue-600" />
                <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-xl font-semibold text-blue-700 mt-12">
          👉 With us handling your finances, you can finally focus 100% on growing your business.
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;