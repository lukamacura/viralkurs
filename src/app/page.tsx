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
      <Testimonials
        gallery={["/chats/c1.png", "/chats/c2.png", "/chats/c3.png"]}
        ozren={{
          name: "Bajram",
          description:
            "Intervju o tome kako je Bajram sa 15 godina počeo da naplaćuje klijentima nakon 1 meseca ulaska u program",
          metricTime: "1 mesec",
          metricMoney: "600+ evra mesečno",
          video: { kind: "video", src: "https://youtube.com/shorts/PvK-Tmfp-GQ?feature=share"},
        }}
        djordje={{
          name: "Vanja",
          description:
            "Intervju o tome kako je Vanja od kockara došao do toga da može sebi da priušti šta god hoće i uspešno naplaćuje klijentima svoje usluge",
          metricTime: "3 meseca",
          metricMoney: "200+ evra po klijentu",
          video: { kind: "iframe", src: "https://www.youtube.com/embed/XXXXXXXX" },
        }}
      /><LaunchBenefits />
      
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
