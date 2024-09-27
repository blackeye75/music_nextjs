import { HeroSection } from "@/components/HeroSection";
import Image from "next/image";
import {FeaturedCourses }from "@/components/FeaturedCourses"
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonials from "@/components/TestinomialCards";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]" >
      {/* <h1 className="text-2xl text-center" >chai or code</h1> */}
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs/>
      <MusicSchoolTestimonials/>  
    </main>
  );
}
