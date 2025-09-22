"use client";

import React from 'react';
import { Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const teamMembers = [
  {
    name: 'Ashwin Dsouza',
    title: 'Founder & CEO',
    bio: 'Ashwin is the visionary behind our company, leading with passion and a commitment to innovation.',
    avatar: '/ashwin-dsouza.png',
    linkedin: 'https://www.linkedin.com/in/ashwindsoza/',
  },
  {
    name: 'Jane Doe',
    title: 'Lead Developer',
    bio: 'Jane is a full-stack developer with a knack for creating robust and scalable applications.',
    avatar: 'https://api.dicebear.com/7.x/lorelei/svg?seed=Jane',
    linkedin: '#',
  },
  {
    name: 'John Smith',
    title: 'Product Designer',
    bio: 'John focuses on user experience, ensuring our products are intuitive and delightful to use.',
    avatar: 'https://api.dicebear.com/7.x/lorelei/svg?seed=John',
    linkedin: '#',
  },
];

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto mb-12">
        We are a passionate team dedicated to building innovative solutions that make a difference. Our mission is to empower businesses and individuals through technology.
      </p>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Mission</h2>
        <p className="text-md text-center text-muted-foreground max-w-2xl mx-auto">
          Our mission is to deliver cutting-edge software that is not only powerful and efficient but also user-friendly and accessible to everyone. We believe in continuous improvement and fostering a culture of creativity and collaboration.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <CardContent className="p-0 flex flex-col items-center">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary font-medium">{member.title}</p>
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mt-4 text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;