import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Brands = () => {
  useGSAP(() => {
    gsap.set('.brands-life', { marginTop: '-60vh' });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.brands-life',
        start: 'top 80%',
        end: '10% center',
        scrub: 2,
      }
    }).to('.second-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' });

    gsap.to('.brands-life .img-box', {
      scrollTrigger: {
        trigger: '.brands-life',
        start: 'top center',
        end: '80% center',
        scrub: 2
      }, y: -200, duration: 1, ease: 'power1.inOut'
    }, '<')
  });

  return (
    <section className="brands-life">
      {/* Image box visible only on desktop - LEFT SIDE */}
      <div className="hidden lg:flex flex-col gap-5 items-end img-box lg:w-1/2 ps-10 mt-26">
        <div className="brands-1">
          <img src="/images/portfolio/casa_bliss_1.jpg" />
        </div>
        <div className="brands-1">
          <img src="/images/portfolio/casa_bliss_1.jpg" />
        </div>
      </div>

      <div className="lg:w-1/2 brands-life-content">
        <div className="max-w-xl lg:ps-32 ps-10">
          <h1><span class="black-text">Our</span> <br /> Brands</h1>
          <h2>committed to delivering QUALITY, CREATIVITY <br /> and VALUE.</h2>
        </div>

        <div className="brands-2">
          {/* <img src="/images/portfolio/bmen_1.jpg" /> */}
          <img src="/images/portfolio/bmen_2.jpg" />
          <img src="/images/portfolio/bmen_3.jpg" />
        </div>
      </div>
    </section >
  )
}

export default Brands