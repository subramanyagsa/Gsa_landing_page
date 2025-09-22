import React, { useRef } from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Target, Eye, Heart, Linkedin } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const teamMembers = [
  {
    name: 'Ashwin Dsouza',
    title: 'Advisor–Investments & Financial Planning',
    imageUrl: '/ashwin-dsouza.png',
    bio: 'Ashwin Albert Dsouza has 20 years of experience in the Financial and Information Technology sectors. He has successfully led various Technology and Enterprise Architecture initiatives, backed by his 18-year career at Infosys Limited. His qualifications include specialized programs from the National Institute of Securities Markets (NISM) in Portfolio Management and Investment Advisory, reflecting his strong expertise in financial services alongside technology leadership.',
    linkedin: '#', // Placeholder for LinkedIn
  },
  {
    name: 'CA Subramanya Kamath',
    title: 'Strategic Outsourcing Advisor',
    imageUrl: '/subramanya-kamath.png', // Placeholder image
    bio: '', // Keeping bio empty as per previous request
    linkedin: '#', // Placeholder for LinkedIn
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
  const missionRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const teamRef = useRef<HTMLElement>(null);

  const missionVisible = useIntersectionObserver(missionRef, { threshold: 0.2, triggerOnce: true });
  const valuesVisible = useIntersectionObserver(valuesRef, { threshold: 0.1, triggerOnce: true });
  const teamVisible = useIntersectionObserver(teamRef, { threshold: 0.1, triggerOnce: true });

  return (
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
      <section ref={missionRef} className="py-16 md:py-24">
        <div className={cn(
          "container px-4 md:px-6 max-w-4xl mx-auto text-center transition-all duration-1000 ease-out",
          missionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Our Mission</h2>
          <p className="text-xl text-muted-foreground mt-4">
            To empower business owners with financial clarity and confidence. We handle the complexities of accounting, tax, and payroll, providing real-time insights and strategic guidance that turns financial data into a roadmap for success.
          </p>
        </div>
      </section>

      {/* Company Values Section */}
      <section ref={valuesRef} className="py-16 md:py-24 bg-secondary/20">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className={cn(
            "text-center mb-12 transition-all duration-700 ease-out",
            valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              The principles that guide every decision we make.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <div key={value.title} className={cn(
                "text-center p-6 transition-all duration-500 ease-out",
                valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section ref={teamRef} className="py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className={cn(
            "text-center mb-12 transition-all duration-700 ease-out",
            teamVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Meet Our Experts</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              The dedicated professionals behind your financial success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={member.name} className={cn(
                "text-center border-white/10 bg-black/30 backdrop-blur-xl transition-all duration-500 ease-out hover:scale-105",
                teamVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}>
                <CardContent className="p-6 flex flex-col items-center">
                  <Avatar className="h-24 w-24 mb-4 border-2 border-primary">
                    <AvatarImage src={member.imageUrl} alt={member.name} />
                  </Avatar>
                  <CardTitle className="text-xl font-semibold">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.title}</p>
                  {/* Removed member.bio as per previous request */}
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mt-4 text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn profile of {member.name}</span>
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;