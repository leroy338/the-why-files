'use client';
import YouTube from 'react-youtube';
import { useEffect, useState } from 'react';
import { Container } from "@/components/ui/container";

export default function Header() {
  const [videoOpts, setVideoOpts] = useState({
    width: '100%',
    height: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  });

  useEffect(() => {
    const handleResize = () => {
      setVideoOpts(prev => ({
        ...prev,
        width: '100%',
        height: '100%',
      }));
    };

    // Initial call
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container as="section">
      <div className="flex flex-col md:flex-row items-center justify-between py-4 sm:py-6 md:py-12 gap-4 sm:gap-6 md:gap-12">
        {/* Text Content Section */}
        <div className="w-full md:w-5/12 lg:w-1/2 flex flex-col gap-2 sm:gap-3 md:gap-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground/80 text-center md:text-left">
            Welcome Weary Traveler
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-center md:text-left text-foreground/60">
            The why files is a collection of the unexplained mysterious of the world.
            Every week we dive deep into the myths and mysteries covering anything from conspiracy theories to the illuminati. 
          </p>
        </div>

        {/* Video Section */}
        <div className="w-full md:w-7/12 lg:w-1/2">
          <div className="relative w-full">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg bg-background/50 backdrop-blur-sm border border-foreground/10">
              <YouTube 
                videoId="lcEZ6oYZfi8"
                opts={videoOpts}
                className="absolute top-0 left-0 w-full h-full"
                iframeClassName="w-full h-full"
                onReady={(event) => {
                  // Force resize when video loads
                  event.target.getIframe().style.width = '100%';
                  event.target.getIframe().style.height = '100%';
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
    </Container>
  );
}
