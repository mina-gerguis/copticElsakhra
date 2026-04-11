import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import DailyVerse from "@/components/DailyVerse/dailyVerse";
import Footer from '@/components/Footer/Footer';
import DailySection from "@/components/DailySection/DailySection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DailyVerse />
      <DailySection />
      <Footer />
    </>
  );
}
