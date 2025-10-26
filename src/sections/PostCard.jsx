import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: 'Shanu Mohan',
    role: 'Creative Director',
    image: '/images/team/sanoob.jpg'
  },
  {
    name: 'Sarath Remesh',
    role: 'CEO & Strategy Lead',
    image: '/images/team/sarath.jpg'
  },
  {
    name: 'Sarang S',
    role: 'CFO & Operations',
    image: '/images/team/sarang.jpg'
  },
  {
    name: 'Vyshnav H',
    role: 'Content Manager',
    image: '/images/team/vyshnav.png'
  },
  {
    name: 'Sanoob Saji',
    role: 'Content Producer',
    image: '/images/team/sanoob.jpg'
  }
];

const PostCard = () => {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const cards = gsap.utils.toArray('.team-card');
      const container = cardsContainerRef.current;

      if (!container || cards.length === 0) return;

      const totalWidth = cards.reduce((acc, card) => acc + card.offsetWidth + 40, 0);

      gsap.to(container, {
        x: -(totalWidth - window.innerWidth + 200),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

      cards.forEach((card) => {
        gsap.from(card, {
          scale: 0.8,
          opacity: 0,
          scrollTrigger: {
            trigger: card,
            start: 'left 80%',
            end: 'left 20%',
            scrub: 1,
            containerAnimation: gsap.getById('horizontal-scroll')
          }
        });
      });
    });

    mm.add("(max-width: 767px)", () => {
      const cards = gsap.utils.toArray('.team-card');

      cards.forEach((card) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 1
          }
        });
      });
    });

  }, { scope: sectionRef, dependencies: [] });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#FFFFFF] overflow-hidden py-16 md:py-10"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFB400] rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFB400] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Section header */}
      <div className="relative z-10 pb-12 md:pb-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-bold text-[#1E1E1E] mb-4">
            Meet Our <span className="text-[#FFB400]">Team</span>
          </h2>
          <p className="text-[#555555] text-base md:text-xl max-w-2xl">
            The creative minds driving innovation and excellence
          </p>
        </div>
      </div>

      {/* Horizontal scroll container (desktop) / Vertical stack (mobile) */}
      <div className="relative z-10">
        <div
          ref={cardsContainerRef}
          className="flex flex-col md:flex-row gap-6 md:gap-10 px-6 md:px-16 pb-24 md:pb-32"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-card flex-shrink-0 w-full md:w-[320px] group"
            >
              <div className="relative bg-[#F8F8F8] rounded-2xl overflow-hidden transition-all duration-700 hover:scale-105 md:hover:rotate-2">
                {/* Image container */}
                <div className="relative h-[380px] md:h-[420px] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-[#1E1E1E]/20 to-transparent" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#FFB400] opacity-0 group-hover:opacity-20 transition-opacity duration-700" />

                  {/* Content overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="mb-3">
                      <div className="w-16 h-1 bg-[#FFB400] transition-all duration-700 group-hover:w-24" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#F8F8F8] text-base md:text-lg font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-[#FFB400] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default PostCard;