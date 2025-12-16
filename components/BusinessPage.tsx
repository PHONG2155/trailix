import React from 'react';
import { BusinessHero } from './business/BusinessHero';
import { QuoteSection } from './business/QuoteSection';
import { ImpactSection } from './business/ImpactSection';
import { TrainingFields } from './business/TrainingFields';
import { FrameworksSection } from './business/FrameworksSection';
import { ClientSection } from './business/ClientSection';
import { ContactForm } from './business/ContactForm';
import { TestimonialsSection } from './business/TestimonialsSection';
import { ActivitiesSlider } from './business/ActivitiesSlider';

export const BusinessPage = () => {
  return (
    <div className="pt-20 pb-20 bg-white">
      <BusinessHero />
      <QuoteSection />
      <ImpactSection />
      <TrainingFields />
      <FrameworksSection />
      <ContactForm />
      <TestimonialsSection />
      <ClientSection />
      <ActivitiesSlider />
      
    </div>
  );
};