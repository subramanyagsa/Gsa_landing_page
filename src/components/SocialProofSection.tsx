import React from 'react';

const SocialProofSection = () => {
  const logos = ["Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"];

  return (
    <section className="w-full py-12 bg-background">
      <div className="container mx-auto text-center">
        <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-8">
          TRUSTED BY GROWING BUSINESSES
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo, index) => (
            <span key={index} className="text-2xl font-medium text-muted-foreground/50">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;