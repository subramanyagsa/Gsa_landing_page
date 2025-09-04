import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Target, Eye, Heart } from 'lucide-react';

const teamMembers = [
  {
    name: 'John Doe',
    title: 'Founder & CEO',
    avatar: 'https://api.dicebear.com/8.x/lorelei/svg?seed=John',
    bio: 'John is a certified public accountant with over 15 years of experience helping businesses scale.',
  },
  {
    name: 'Jane Smith',
    title: 'Head of Tax Strategy',
    avatar: 'https://api.dicebear.com/8.x/lorelei/svg?seed=Jane',
    bio: 'Jane specializes in complex tax planning and ensures our clients maximize their deductions.',
  },
  {
    name: 'Peter Jones',
    title: 'Lead Payroll Specialist',
    avatar: 'https://api.dicebear.com/8.x/lorelei/svg?seed=Peter',
    bio: 'Peter manages our payroll services, ensuring timely and accurate payments for our clients.',
  },
];

const companyValues = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: 'Client-Centric',
    description: 'Your success is our primary metric. We are dedicated to understanding your unique needs and goals.',
  },
  {
    icon: <Eye className="h-8 w-8 text-primary" />,
    title: 'Transparency',
    description: 'We believe in clear, honest communication. No hidden fees, no confusing jargon—just straightforward advice.',
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: 'Integrity',
    description: 'We uphold the highest ethical standards in all our work, ensuring your finances are managed with care and responsibility.',
  },
];

const AboutPage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 text-center bg-secondary/20">
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">About Global Scale Accountants</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              We are more than just accountants; we are your financial partners, dedicated to simplifying your finances so you can focus on growth.
            </p>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Our Mission</h2>
            <p className="text-xl text-muted-foreground mt-4">
              To empower business owners with financial clarity and confidence. We handle the complexities of accounting, tax, and payroll, providing real-time insights and strategic guidance that turns financial data into a roadmap for success.
            </p>
          </div>
        </section>

        {/* Company Values Section */}
        <section className="py-16 md:py-24 bg-secondary/20">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
                The principles that guide every decision we make.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {companyValues.map((value) => (
                <div key={value.title} className="text-center p-6">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Meet Our Experts</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
                The dedicated professionals behind your financial success.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <Card key={member.name} className="text-center border-white/10 bg-black/30 backdrop-blur-xl">
                  <CardContent className="p-6 flex flex-col items-center">
                    <Avatar className="h-24 w-24 mb-4 border-2 border-primary">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl font-semibold">{member.name}</CardTitle>
                    <p className="text-primary font-medium">{member.title}</p>
                    <p className="text-muted-foreground mt-2 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;