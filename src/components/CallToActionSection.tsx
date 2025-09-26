import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const CallToActionSection = () => {
  const { ref, inView: isVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="cta" className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="container px-4 md:px-6 text-center">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-primary/10 rounded-full blur-[120px] z-0" />
        <div className={cn(
          "relative z-10 transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="max-w-3xl mx-auto bg-background/50 backdrop-blur-lg border border-primary/20 rounded-2xl p-8 md:p-12 shadow-lg shadow-primary/10 bg-grid-pattern [background-size:2.5rem_2.5rem]">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Ready to Simplify Your Finances?
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
              Let us handle the complexities, so you can focus on what you do best—growing your business.
            </p>
            <div className="mt-8">
              <Button size="lg" className="group">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;