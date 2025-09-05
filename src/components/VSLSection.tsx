"use client";

import React, { useEffect } from 'react';

const VSLSection = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = "https://fast.wistia.com/player.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "https://fast.wistia.com/embed/yslkn30any.js";
    script2.async = true;
    script2.type = "module";
    document.body.appendChild(script2);

    const style = document.createElement('style');
    style.innerHTML = `
      wistia-player[media-id='yslkn30any']:not(:defined) {
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/yslkn30any/swatch');
        display: block;
        filter: blur(5px);
        padding-top: 56.25%; /* 16:9 Aspect Ratio */
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 md:py-16">
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
        <wistia-player
          media-id="yslkn30any"
          aspect="1.7777777777777777"
          className="absolute top-0 left-0 w-full h-full"
        ></wistia-player>
      </div>
    </div>
  );
};

export default VSLSection;