import Hero from '@/components/Hero';
import Advisory from '@/components/Advisory';
import Marketplace from '@/components/Marketplace';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Advisory />
      <Marketplace />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}
