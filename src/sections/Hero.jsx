import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { useMaskSettings } from '../../constants';
import ComingSoon from "./ComingSoon"

const Hero = () => {
  const { initialMaskPos, initialMaskSize, maskPos, maskSize } = useMaskSettings();

  useGSAP(() => {
    gsap.set('.mask-wrapper', {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
    });

    gsap.set('.mask-logo', { marginTop: '-100vh', opacity: 0 });

    gsap.set('.entrance-message', { marginTop: '0vh' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        scrub: 2.5,
        end: '+=300%', // Increased from 200% to 300% for longer duration
        pin: true,
      }
    })

    tl
      .to('.fade-out', { opacity: 0, ease: 'power1.inOut' })
      .to('.scale-out', { scale: 1, ease: 'power1.inOut' })
      .to('.mask-wrapper', { maskSize, ease: 'power1.inOut' }, '<')
      .to('.mask-wrapper', { opacity: 0 })
      .to('.overlay-logo', {
        opacity: 1, onComplete: () => {
          gsap.to('.overlay-logo', { opacity: 0 });
        }
      }, '<')
      .to('.entrance-message', {
        duration: 2, // Increased from 1 to 2 for slower transition
        ease: 'power1.inOut',
        maskImage: 'radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)'
      }, '<')
      .to('.entrance-message', {
        duration: 0.5 // Add a pause before it disappears
      })
  });

  return (
    <section className="hero-section">
      <div className="size-full bg-[#F9CA02] mask-wrapper">
        {/* <img src="/images/banner/yellow_banner.jpg" alt="background" className="scale-out" /> */}
        <img src="/images/white_line.jpg" alt="hero-logo-line" className="title-logo-line fade-out" />
        <img src="/images/hero_logo_w_color.svg" alt="hero-logo" className="title-logo fade-out" />
      </div>

      <div>
        <img src="/images/hero_logo_w_color.svg" alt="logo" className="size-full object-cover mask-logo" />
      </div>

      <div className="fake-logo-wrapper">
        <img src="/images/hero_logo_w_color.svg" className="overlay-logo" />
      </div>

      <ComingSoon />
    </section>
  )
}

export default Hero