import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Methodology from "@/components/sections/Methodology";
import Transformation from "@/components/sections/Transformation";
import Engagement from "@/components/sections/Engagement";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0e0e0e] text-white">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Methodology />
      <Transformation />
      <Engagement />
      <Footer />
    </div>
  );
}
