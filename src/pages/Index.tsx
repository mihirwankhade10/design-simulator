
import React from 'react';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import HeroSection from '@/components/HeroSection';
import ClientLogos from '@/components/ClientLogos';
import VideoSection from '@/components/VideoSection';
import CookieConsent from '@/components/CookieConsent';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroBanner />
      <HeroSection />
      <ClientLogos />
      <VideoSection />
      <CookieConsent />
    </div>
  );
};

export default Index;
