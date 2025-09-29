import Hero from "@/components/Hero";
import Section from "@/components/Section";
import PersonCard from "@/components/PersonCard";
import PracticeCard from "@/components/PracticeCard";
import { people } from "@/data/people";
import { practiceAreas } from "@/data/practice-areas";
import { getSortedPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
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