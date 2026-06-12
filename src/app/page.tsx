import SmoothScroll from "@/components/SmoothScroll";
import Loader from "@/components/loader/Loader";
import Hero from "@/components/hero/Hero";
import Stats from "@/components/stats/Stats";
import FeaturedWork from "@/components/featured-work/FeaturedWork";
import Showreel from "@/components/showreel/Showreel";
import Services from "@/components/services/Services";
import ReelsShowcase from "@/components/reels/ReelsShowcase";
import Testimonials from "@/components/testimonials/Testimonials";
import Workflow from "@/components/workflow/Workflow";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative bg-background text-foreground overflow-hidden">
        <Loader />
        <Hero />
        <Stats />
        <FeaturedWork />
        <Showreel />
        <Services />
        <ReelsShowcase />
        <Testimonials />
        <Workflow />
        <About />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

