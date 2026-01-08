import { ChatbotHeroSection } from "../chatbot/ChatbotHeroSection";
import { ChatbotIntroSection } from "../chatbot/ChatbotIntroSection";
import { ChatbotComparisonSection } from "../chatbot/ChatbotComparisonSection";
import { ChatbotFeaturesSection } from "../chatbot/ChatbotFeaturesSection";
import { ChatbotWorkflowSection } from "../chatbot/ChatbotWorkflowSection";

import { ClientSection } from "../business/ClientSection";
import { ContactForm } from "../business/ContactForm";

export const ChatbotPage = () => {
  return (
    <div className="bg-white overflow-hidden">
      <ChatbotHeroSection />
      <ChatbotIntroSection />
      <ChatbotComparisonSection />
      <ChatbotFeaturesSection />
      <ChatbotWorkflowSection />
      <ContactForm />
      <ClientSection />
    </div>
  );
};
