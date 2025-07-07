import { Layout } from '@/components/Layout';
import { HeroSection } from '@/components/HeroSection';
import { IntroSection } from '@/components/IntroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { AboutSection } from '@/components/AboutSection';
import { CasesSection } from '@/components/CasesSection';
import { BlogSection } from '@/components/BlogSection';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <AboutSection />
      <CasesSection />
      <BlogSection />
      <ContactSection />
    </Layout>
  );
}
