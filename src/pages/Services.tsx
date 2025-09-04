import React, { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToActionSection from '@/components/CallToActionSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Percent, Users, Briefcase } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: 'Full-Service Accounting & Bookkeeping',
    description: 'From daily transaction recording to monthly financial statements, we provide a complete, real-time picture of your financial health. Stay in control with accurate books and clear reporting.',
    features: [
      'Real-time transaction categorization',
      'Bank and credit card reconciliation',
      'Monthly P&L and Balance Sheet reports',
      'Accounts payable and receivable management',
    ],
  },
  {
    icon: <Percent className="h-10 w-10 text-primary" />,
    title: 'Strategic Tax Planning & Preparation',
    description: 'Move beyond reactive tax filing. We work with you year-round to develop proactive strategies that minimize your tax liability and ensure you never face a surprise bill. We handle all federal, state, and local filings.',
    features: [
      'Proactive tax reduction strategies',
      'Quarterly tax estimates and payments',
      'Business and personal tax return preparation',
      'Audit support and representation',
    ],
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Effortless Payroll Management',
    description: 'Ensure your team is paid accurately and on time, every time. We manage your entire payroll process, from direct deposits to tax withholdings and filings, so you can focus on your people, not paperwork.',
    features: [
      'Automated payroll processing',
      'Direct deposit for all employees',
      'W-2 and 1099 filings',
      'Management of payroll taxes and withholdings',
    ],
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: 'Virtual CFO & Advisory Services',
    description: 'Get the strategic financial guidance of a Chief Financial Officer without the full-time cost. We provide high-level insights to help you make smarter decisions, from budgeting and forecasting to cash flow optimization.',
    features: [
      'Financial forecasting and modeling',
      'Budgeting and performance analysis',
      'Cash flow management and optimization',
      'Strategic guidance for growth and profitability',
    ],
  },
];

const ServicesPage = () => {
  const servicesRef = useRef<HTMLElement>(null);
  const servicesVisible = useIntersectionObserver(servicesRef, { threshold: 0.1, triggerOnce: true });

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 text-center bg-secondary/20">
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Our Services</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              Comprehensive financial solutions designed to give you clarity, save you time, and fuel your business's growth.
            </p>
          </div>
        </section>

        {/* Services Grid Section */}
        <section ref={servicesRef} className="py-16 md:py-24">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={service.title} className={cn(
                  "flex flex-col border-white/10 bg-black/30 backdrop-blur-xl transition-all duration-500 ease-out",
                  servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 150}ms` }}>
                  <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                    <div className="bg-primary/10 p-3 rounded-md mt-1.5">{service.icon}</div>
                    <div>
                      <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;