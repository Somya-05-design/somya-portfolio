import BackgroundCanvas from "@/components/BackgroundCanvas";
import AboutMe from "@/components/AboutMe";
import ContactForm from "@/components/ContactForm";
import Experience from "@/components/Experience";
import FloatingNav from "@/components/FloatingNav";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <BackgroundCanvas />
      <div className="relative mx-auto min-h-screen max-w-[1280px] border-x border-white/5">
        <Header />
        <FloatingNav />
        <main>
          <Hero />
          <hr className="mx-6 border-white/10" />
          <Experience />
          <hr className="mx-6 border-white/10" />
          <SelectedWork />
          <hr className="mx-6 border-white/10" />
          <AboutMe />
          <TechStack />
          <hr className="mx-6 border-white/10" />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
}
