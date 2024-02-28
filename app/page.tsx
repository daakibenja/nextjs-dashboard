import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css'
import { lusitana } from '@/app/ui/fonts'
import Image from 'next/image';
import HeaderSection from '@/app/ui/welcome/header-section';
import HelloSection from '@/app/ui/welcome/hello-section';
import LogoPartners from './ui/welcome/logo-partners';
import FeatureSection from './ui/welcome/feature-section';
import TestimonialSection from './ui/welcome/testimonial-section';
import FaqsSection from './ui/welcome/faqs-section';
import CtaSection from './ui/welcome/cta-section';
import FooterSection from './ui/welcome/footer-section';
export default function Page() {
  return (
    <main className={`bg-blue-0 isolate ${lusitana.className } unaliased`}>
      <HeaderSection />
      <HelloSection />
      <LogoPartners />
      <FeatureSection />
      <TestimonialSection />
      <FaqsSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
