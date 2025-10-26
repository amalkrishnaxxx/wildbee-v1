import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalImageScroll = () => {
    const sectionRef = useRef(null);
    const imageContainerRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const imageContainer = imageContainerRef.current;

        if (!section || !imageContainer) return;

        const scrollDistance = imageContainer.scrollWidth - window.innerWidth;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: () => `+=${scrollDistance}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                pinSpacing: true,
            }
        });

        tl.to(imageContainer, {
            x: -scrollDistance,
            ease: 'none'
        });

        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    return (
        <>
            <style>{`
                .horizontal-section {
                    position: relative;
                    min-height: 100vh;
                    overflow: hidden;
                    background: #fff;
                }

                .section-title {
                    padding: 3rem 2.5rem;
                    text-align: center;
                }

                .section-title h2 {
                    color: #1E1E1E;
                    font-size: 3.5rem;
                    font-weight: 600;
                    margin: 0;
                }

                @media (max-width: 768px) {
                    .section-title h2 {
                        font-size: 2rem;
                    }
                }

                .horizontal-scroll-container {
                    position: relative;
                    height: 70vh;
                    width: 100%;
                }

                .image-track {
                    display: flex;
                    gap: 2rem;
                    height: 100%;
                    width: max-content;
                    padding: 0 2.5rem;
                }

                .image-card {
                    position: relative;
                    height: 100%;
                    flex-shrink: 0;
                    background: #FFB400;
                    overflow: hidden;
                }

                .image-card:nth-child(1) {
                    width: 500px;
                }

                .image-card:nth-child(2) {
                    width: 400px;
                }

                .image-card:nth-child(3) {
                    width: 450px;
                }

                .image-card:nth-child(4) {
                    width: 520px;
                }

                .image-card:nth-child(5) {
                    width: 380px;
                }

                @media (max-width: 768px) {
                    .image-card {
                        width: 300px !important;
                    }
                    
                    .horizontal-scroll-container {
                        height: 50vh;
                    }
                }

                .image-card img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }

                .image-card:hover img {
                    transform: scale(1.05);
                }
            `}</style>

            <section className="horizontal-section" ref={sectionRef}>
                <div className="section-title">
                    <h2>Our Work</h2>
                </div>

                <div className="horizontal-scroll-container">
                    <div className="image-track" ref={imageContainerRef}>
                        <div className="image-card">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1200&fit=crop"
                                alt="Team collaboration"
                            />
                        </div>
                        <div className="image-card">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1200&fit=crop"
                                alt="Creative workspace"
                            />
                        </div>
                        <div className="image-card">
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=1200&fit=crop"
                                alt="Team meeting"
                            />
                        </div>
                        <div className="image-card">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=1200&fit=crop"
                                alt="Office environment"
                            />
                        </div>
                        <div className="image-card">
                            <img
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=1200&fit=crop"
                                alt="Team collaboration"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HorizontalImageScroll;