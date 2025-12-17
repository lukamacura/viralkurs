import Hero from "@/components/ui/Hero";
import Testimonials from "@/components/ui/Testimonials";
import LaunchBenefits from "@/components/ui/LaunchBenefits";
import Bonuses from "@/components/ui/Bonuses";
import DecisionFlow from "@/components/ui/DecisionFlow";
import Guarantee from "@/components/ui/Guarantee";
import OfferCard from "@/components/ui/OfferCard";
import Faq from "@/components/ui/Faq";
import Navbar from "@/components/ui/Navbar";
import Founder from "@/components/ui/Founder";
import Footer from "@/components/ui/Footer";
import Youtube from "@/components/ui/Youtube";

// Glavna strana
export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center">
<Navbar />
 <Hero
        mockupOneSrc="mockups/launch.png"     // promeni putanju do slike
        mockupTwoSrc="mockups/expert.png"     // promeni putanju do slike
        mockupPhoneSrc="mockups/phone.png"    // promeni putanju do slike
        avatars={[
          "avatars/a1.webp",
          "avatars/a2.webp",
          "avatars/a3.webp",
        ]}

        
      />    
      <Youtube videoId="BWffMjTQ6-o"/>
      
      
      <LaunchBenefits />
      <Youtube videoId="PvK-Tmfp-GQ"/>
      <Bonuses
      mockups={[
        "/mockups/bonus1.png",
        "/mockups/bonus2.png",
        "/mockups/bonus3.png",
      ]}
    /><DecisionFlow />
      <Guarantee bonusAmount={40} />


        <OfferCard
      mockups={["/mockups/Offer.png"]}

    />




     <Faq/>
     <Founder/>
     <Footer />
      </main>
  );
}
