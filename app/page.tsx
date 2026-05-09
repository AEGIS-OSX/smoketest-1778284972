import Features from "@/app/components/Features";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Signup from "@/app/components/Signup";
import Testimonials from "@/app/components/Testimonials";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <Features />
      <Testimonials />
      <Signup />
      <Footer />
    </main>
  );
}