"use client";

import React, { useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const teamMembers = [
  {
    name: "CA Sthuthi S Prabhu",
    title: "Founder & Chartered Accountant",
    image: "/sthuthis-prabhu.png",
  },
  {
    name: "CA Subramanya Kamath",
    title: "Co-Founder & Chartered Accountant",
    image: "/subramanya-kamath.png",
  },
  {
    name: "CA Vishnu Acharya",
    title: "Partner & Chartered Accountant",
    image: "/vishnu-acharya.png",
  },
  {
    name: "Ashwin D'Souza",
    title: "Head of Operations",
    image: "/ashwin-dsouza.png",
  },
];

const TeamSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });

  return (
    <section id="team" ref={sectionRef} className="w-full py-16 md:py-24 bg-secondary/20">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto text-center">
        <div className={cn(
          "transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Our dedicated professionals are committed to providing exceptional financial guidance and support.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className={cn(
                "flex flex-col items-center text-center p-6 border-white/10 bg-black/30 backdrop-blur-xl transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 hover:border-primary",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Avatar className="h-24 w-24 mb-4 border-2 border-primary">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.title}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;