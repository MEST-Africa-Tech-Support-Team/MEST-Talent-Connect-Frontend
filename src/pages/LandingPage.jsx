import React from 'react'
import PageWrapper from '../components/PageWrapper';
import Hero from '../components/HeroSection';
import HowItWorks from '../components/HowitWorks';
import WhoUsesPlatform from '../components/WhoUses';
import WhyChooseMest from '../components/WhyChoose';
import Talent from '../components/Talent';
import Stats from '../components/Stats';
import SuccessStories from '../components/SuccessStories';
import HireSection from '../components/Hire';

function LandingPage() {
  return (
    <PageWrapper>
      <Hero />
      <HowItWorks />
      <WhoUsesPlatform />
      <WhyChooseMest />
      <Talent />
      <Stats />
      <SuccessStories />
      <HireSection />
    </PageWrapper>
  )
}

export default LandingPage