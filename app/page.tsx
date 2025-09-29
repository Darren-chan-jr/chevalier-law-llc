import Hero from "@/components/Hero";
import { getSortedPosts } from "@/lib/posts";
import HeroImage from "@/components/HeroImage";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsStrip from "@/components/StatsStrip";

export default async function Page() {
  const posts = getSortedPosts().slice(0, 3);
  return (
    <>
      <HeroImage />
      <Hero />
      <Testimonials />
      <WhyChooseUs />
      <StatsStrip />
    </>
  );
}