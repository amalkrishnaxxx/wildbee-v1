import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const Services = () => {
  useGSAP(() => {
    gsap.set('.services', { marginTop: '-20vh' });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.services',
        start: 'top 90%',
        end: '10% center',
        scrub: 2,
      }
    }).to('.first-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' });

    gsap.to('.services .img-box', {
      scrollTrigger: {
        trigger: '.services',
        start: 'top center',
        end: '80% center',
        scrub: 2
      }, y: -500, duration: 1, ease: 'power1.inOut'
    }, '<')
  })

  return (
    <section className="services relative">
      <div className="max-w-lg services-content relative z-10 md:z-auto">
        <div className="heading-wrapper">
          <span className="eyebrow">What We Do</span>
          <h1>Our Core <span className="highlight">Services</span></h1>
          <h2>We craft digital experiences that help brands <span className="accent">grow</span>, <span className="accent">engage</span>, and <span className="accent">inspire</span> their audience.</h2>
        </div>

        <div className="services-1 max-h-120 overflow-hidden">
          <img src="/images/content.jpg" className="w-full object-cover" />
        </div>
        <div className="services-1 mt-5 max-h-120 overflow-hidden">
          <img src="/images/preformance.jpg" className="w-full object-cover" />
        </div>
      </div>

      <div className="space-y-5 mt-96 img-box relative z-20 md:z-auto">
        <div className="services-1">
          <img src="/images/brand_building.jpg" />
        </div>
        <div className="services-1">
          <img src="/images/social_media.jpg" />
        </div>
        <div className="services-1">
          <img src="/images/meta_ads.jpg" />
        </div>
      </div>
    </section>
  )
}

export default Services