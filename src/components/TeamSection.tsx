"use client";

import React, { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';
import { teamMembers } from '@/data/teamData';
import { Linkedin } from 'lucide-react'; // Import Linkedin icon

const TeamSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24 bg-background">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className={cn(
                "relative overflow-hidden border border-white/10 bg-black/30 backdrop-blur-xl transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 hover:border-primary",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="relative z-10 flex flex-col items-center p-6 text-center">
                <Avatar className="h-24 w-24 mb-4 border-2 border-primary">
                  <AvatarImage src={member.imageUrl} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl font-semibold mb-1">{member.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mb-4">{member.title}</CardDescription>
                <p className="text-muted-foreground text-sm mb-4">{member.description}</p>
                {member.linkedinUrl && (
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors mt-2"
                    aria-label={`LinkedIn profile of ${member.name}`}
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;