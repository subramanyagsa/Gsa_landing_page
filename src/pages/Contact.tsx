import React, { useRef } from 'react';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const ContactPage = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const contactVisible = useIntersectionObserver(contactRef, { threshold: 0.2, triggerOnce: true });

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 md:py-32 text-center bg-secondary/20">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            We're here to help. Reach out to us with any questions or to schedule your free consultation.
          </p>
        </div>
      </section>

      {/* Contact Details & Form Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div ref={contactRef} className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className={cn(
              "space-y-8 transition-all duration-700 ease-out",
              contactVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}>
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
                <p className="text-muted-foreground mt-2">
                  Fill out the form, or use our contact details below to connect with our team.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-md">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Our Office</h3>
                    <p className="text-muted-foreground">
                      #10, 1st Floor, 1st Cross, <br />
                      Opp. to Canara Bank, <br />
                      Near KSRTC Bus Stand, <br />
                      Udupi - 576101, Karnataka, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-md">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-muted-foreground">info@globalscaleaccountants.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-md">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-muted-foreground">+91 99000 99000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={cn(
              "transition-all duration-700 ease-out",
              contactVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
            style={{ transitionDelay: '150ms' }}>
              <Card className="border-white/10 bg-black/30 backdrop-blur-xl p-8">
                <CardContent className="p-0">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;