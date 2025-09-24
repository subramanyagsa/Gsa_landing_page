"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const teamMembers = [
  {
    name: "Subrahmanya G S",
    role: "Founder & CEO",
    imageUrl: "/placeholder.svg", // Replace with actual image path
    bio: "Subrahmanya is a visionary leader with over 20 years of experience in the financial industry, dedicated to helping businesses thrive through strategic financial management.",
  },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 lg:py-40 text-center bg-background/80 backdrop-blur-sm">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="container relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
            >
              About Global Scale Accountants
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Your trusted partner in financial excellence and business growth. We are committed to delivering exceptional accounting services tailored to your unique needs.
            </motion.p>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Our Mission</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              To empower businesses with clear, actionable financial insights that drive sustainable growth and success. We believe in building long-lasting relationships based on trust, integrity, and a deep understanding of our clients' goals.
            </p>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section ref={sectionRef} className="py-16 md:py-24 bg-background/90">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-12">
              Meet Our Leadership
            </h2>
            <motion.div
              className="grid grid-cols-1 gap-8 max-w-md mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
            >
              {teamMembers.map((member, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className={cn(
                    "h-full bg-background/50 border-border/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2",
                    "shadow-lg hover:shadow-primary/20"
                  )}
                  style={{ transitionDelay: `${index * 150}ms` }}>
                    <CardContent className="p-6 flex flex-col items-center">
                      <Avatar className="h-24 w-24 mb-4 border-2 border-primary">
                        <AvatarImage src={member.imageUrl} alt={member.name} />
                      </Avatar>
                      <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                      <p className="text-primary font-semibold">{member.role}</p>
                      <p className="mt-4 text-muted-foreground text-center text-sm">{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Value 1 */}
              <Card className="bg-background/50 border-border/20 p-6 text-center">
                <CardHeader>
                  <CardTitle>Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We uphold the highest standards of integrity in all of our actions.</p>
                </CardContent>
              </Card>
              {/* Value 2 */}
              <Card className="bg-background/50 border-border/20 p-6 text-center">
                <CardHeader>
                  <CardTitle>Client-Centric</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Our clients are at the heart of everything we do. Your success is our success.</p>
                </CardContent>
              </Card>
              {/* Value 3 */}
              <Card className="bg-background/50 border-border/20 p-6 text-center">
                <CardHeader>
                  <CardTitle>Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We are committed to excellence and continuous improvement in our services.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;