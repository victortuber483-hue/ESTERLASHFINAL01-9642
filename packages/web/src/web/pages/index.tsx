import { GlitterBackground } from "../components/glitter-background";
import { FrameHero } from "../components/frame-hero";
import { WhatsAppButton } from "../components/whatsapp-button";
import { LightTransition } from "../components/light-transition";
import { Services } from "../components/services";
import { AboutEster } from "../components/about-ester";
import { BookingInformation } from "../components/booking-information";
import { SiteFooter } from "../components/site-footer";

function Index() {
  return (
    <main aria-label="Apresentação">
      <div className="hero-shell">
        <FrameHero />
        <LightTransition />
      </div>
      <div className="page-content">
        <GlitterBackground />
        <div className="page-content__inner">
          <Services />
          <AboutEster />
          <BookingInformation />
          <SiteFooter />
        </div>
      </div>
      <WhatsAppButton />
    </main>
  );
}

export default Index;
