import { Container } from "../container";
import { FadeIn } from "../fadeIn";

export const Usps = () => {
  return (
    <>
      <Container className="relative z-10 max-w-[692px] space-y-12 py-36 text-4xl font-bold text-white">
        <FadeIn>
          <p>New Apple Originals every month - always ad-free.</p>
        </FadeIn>
        <FadeIn>
          <p>
            Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
            sticks.
          </p>
        </FadeIn>

        <FadeIn>
          <p>Watch in 4K HDR video with Immersive Spatial Audio.</p>
        </FadeIn>

        <FadeIn>
          <p>Share a single subscription with upto Five people.</p>
        </FadeIn>
      </Container>
    </>
  );
};
