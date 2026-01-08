import { LmsHeroSection } from '../LMS/LmsHeroSection';
import { LMSIntroSection } from '../LMS/LMSIntroSection';
import { LMSComparisonSection } from '../LMS/LMSComparisonSection';
import { LMSFeaturesSection } from '../LMS/LMSFeaturesSection';
import { LMSWorkflowSection } from '../LMS/LMSWorkflowSection';
import { ClientSection } from '../business/ClientSection';
import { ContactForm } from '../business/ContactForm';

export const LmsPage = () => {
  return (
     <div className="bg-white overflow-hidden">
      <LmsHeroSection />
      <LMSIntroSection />
      <LMSComparisonSection />
      <LMSFeaturesSection />
      <LMSWorkflowSection />
      <ContactForm />
      <ClientSection />
      
    </div>
  );
};
