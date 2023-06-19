import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import HowItWorksSection from "../components/Howitworks";
import Testimoni from "../components/Testimoni";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <>
      <SeoHead title='LaslesVPN Landing Page' />
      <Layout>
        <Hero />
        <Feature />
        <HowItWorksSection />
        <Testimoni />
        <CTASection />
      </Layout>
    </>
  );
}
