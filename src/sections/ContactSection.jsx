import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
    const sectionRef = useRef(null);
    const beeRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [focusedField, setFocusedField] = useState(null);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;

        // Animate section on scroll
        gsap.fromTo('.contact-reveal',
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Bee idle animation - gentle float
        gsap.to('.bee-body', {
            y: -15,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });

        // Eye blink animation
        gsap.to('.bee-eye-left, .bee-eye-right', {
            scaleY: 0.1,
            duration: 0.15,
            repeat: -1,
            repeatDelay: 3,
            yoyo: true,
            ease: 'power2.inOut'
        });

        // Random eye movements
        const eyeLookAround = () => {
            gsap.to('.bee-pupil', {
                x: gsap.utils.random(-2, 2),
                y: gsap.utils.random(-2, 2),
                duration: 0.5,
                ease: 'power2.out',
                onComplete: () => {
                    gsap.delayedCall(gsap.utils.random(1, 3), eyeLookAround);
                }
            });
        };
        eyeLookAround();

        // Antenna sway
        gsap.to('.bee-antenna-left', {
            rotation: -8,
            transformOrigin: 'bottom center',
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });

        gsap.to('.bee-antenna-right', {
            rotation: 8,
            transformOrigin: 'bottom center',
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: 0.75
        });

    }, []);

    useEffect(() => {
        if (focusedField) {
            // Bee gets excited when user focuses on field
            gsap.to(beeRef.current, {
                scale: 1.15,
                duration: 0.3,
                ease: 'back.out'
            });

            // Eyes widen with excitement
            gsap.to('.bee-eye-left, .bee-eye-right', {
                scale: 1.3,
                duration: 0.2,
                ease: 'back.out'
            });

            // Pupils look at the form
            gsap.to('.bee-pupil', {
                x: 4,
                y: 2,
                duration: 0.3,
                ease: 'power2.out'
            });

            // Antenna wiggle excitedly
            gsap.to('.bee-antenna-left, .bee-antenna-right', {
                rotation: 15,
                duration: 0.15,
                repeat: 5,
                yoyo: true,
                ease: 'power2.inOut'
            });

            // Head tilt
            gsap.to('.bee-head', {
                rotation: 5,
                duration: 0.3,
                ease: 'power2.out'
            });
        } else {
            gsap.to(beeRef.current, {
                scale: 1,
                duration: 0.3
            });

            gsap.to('.bee-eye-left, .bee-eye-right', {
                scale: 1,
                duration: 0.3
            });

            gsap.to('.bee-pupil', {
                x: 0,
                y: 0,
                duration: 0.5
            });

            gsap.to('.bee-head', {
                rotation: 0,
                duration: 0.3
            });
        }
    }, [focusedField]);

    useEffect(() => {
        if (isTyping) {
            // Happy bounce when typing
            gsap.to('.bee-body', {
                y: -20,
                duration: 0.4,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut'
            });

            // Excited eye sparkle
            gsap.to('.bee-eye-left, .bee-eye-right', {
                scale: 1.2,
                duration: 0.3,
                repeat: -1,
                yoyo: true
            });

            // Happy smile expansion
            gsap.to('.bee-smile', {
                scaleX: 1.2,
                duration: 0.5,
                repeat: -1,
                yoyo: true
            });
        }
    }, [isTyping]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setIsTyping(value.length > 0);
    };

    const handleSubmit = () => {
        if (formData.name && formData.email && formData.message) {
            // Bee celebration animation
            gsap.timeline()
                .to(beeRef.current, {
                    rotation: 720,
                    scale: 1.4,
                    duration: 1,
                    ease: 'back.out'
                })
                .to('.bee-eye-left, .bee-eye-right', {
                    scaleY: 0,
                    duration: 0.1,
                    repeat: 3,
                    yoyo: true
                }, 0)
                .to('.bee-smile', {
                    scaleX: 1.5,
                    scaleY: 1.3,
                    duration: 0.5
                }, 0)
                .to(beeRef.current, {
                    rotation: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: 'elastic.out'
                });

            // Show particles
            for (let i = 0; i < 15; i++) {
                createParticle();
            }

            alert('Message sent! The bee is happy! 🐝');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setIsTyping(false);
        }
    };

    const createParticle = () => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = '✨';
        particle.style.cssText = `
      position: absolute;
      left: 50%;
      top: 50%;
      font-size: 20px;
      pointer-events: none;
      z-index: 100;
    `;
        beeRef.current.appendChild(particle);

        gsap.to(particle, {
            x: (Math.random() - 0.5) * 200,
            y: (Math.random() - 0.5) * 200,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            onComplete: () => particle.remove()
        });
    };

    return (
        <section ref={sectionRef} className="relative bg-white max-w-600 m-auto flex items-center overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-32 h-32 rounded-full bg-[#FFB400]"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${8 + i * 2}s ease-in-out infinite`,
                            animationDelay: `${i * 0.5}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-16">

                {/* Header */}
                <div className="contact-reveal text-center mb-16">
                    <span className="inline-block text-[#FFB400] font-semibold tracking-[0.2em] text-sm uppercase mb-3">
                        CONTACT
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-[#1E1E1E] mb-4">
                        Need Help? <span className="text-[#FFB400]">Contact Us</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Left Side - Contact Info & Bee Character */}
                    <div className="contact-reveal space-y-8">

                        {/* Contact Cards */}
                        {/* <div className="space-y-3">
                            {[
                                {
                                    icon: <MapPin size={20} />,
                                    title: "Address",
                                    content: (
                                        <>
                                            Wildbee, Vazhakala, Kakkanad<br />
                                            Kochi, Kerala, 682030
                                        </>
                                    ),
                                },
                                {
                                    icon: <Phone size={20} />,
                                    title: "Call Us",
                                    content: (
                                        <a
                                            href="tel:+919567282909"
                                            className="text-[#666] hover:text-[#FFB400] transition-colors"
                                        >
                                            +91 9567 282 909
                                        </a>
                                    ),
                                },
                                {
                                    icon: <Mail size={20} />,
                                    title: "Email Us",
                                    content: (
                                        <a
                                            href="mailto:team.wildbee@gmail.com"
                                            className="text-[#666] hover:text-[#FFB400] transition-colors break-all"
                                        >
                                            team.wildbee@gmail.com
                                        </a>
                                    ),
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="w-10 h-10 bg-[#FFB400]/10 rounded-lg flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-[#1E1E1E] mb-1">{item.title}</h4>
                                        <p className="text-sm text-[#666] leading-relaxed">{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div> */}
                        {/* Map Box */}
                        <div className="bg-white p-4 rounded-2xl shadow-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.2058!2d76.3361!3d9.9937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTknMzcuMyJOIDc2wrAyMCcxMC4wIkU!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Wildbee Location - Vazhakala, Kakkanad, Kochi"
                                className="rounded-lg"
                            />
                        </div>

                        {/* Animated Bee Character */}
                        <div className="hidden lg:flex justify-center items-center py-8">
                            <div ref={beeRef} className="relative w-48 h-48">
                                {/* Bee Body */}
                                <div className="bee-body absolute inset-0">
                                    {/* Head */}
                                    <div className="bee-head absolute top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#FFB400] rounded-full">
                                        {/* Eyes */}
                                        <div className="bee-eye-left absolute top-6 left-3 w-4 h-5 bg-white rounded-full overflow-hidden">
                                            <div className="bee-pupil absolute top-1 left-1 w-2.5 h-2.5 bg-[#1E1E1E] rounded-full" />
                                        </div>
                                        <div className="bee-eye-right absolute top-6 right-3 w-4 h-5 bg-white rounded-full overflow-hidden">
                                            <div className="bee-pupil absolute top-1 left-1 w-2.5 h-2.5 bg-[#1E1E1E] rounded-full" />
                                        </div>

                                        {/* Smile */}
                                        <div className="bee-smile absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-3 border-b-3 border-[#1E1E1E] rounded-full" style={{ borderBottomWidth: '3px' }} />

                                        {/* Antennae */}
                                        <div className="bee-antenna-left absolute -top-5 left-5 w-1.5 h-8 bg-[#1E1E1E] rounded-full origin-bottom" />
                                        <div className="bee-antenna-right absolute -top-5 right-5 w-1.5 h-8 bg-[#1E1E1E] rounded-full origin-bottom" />
                                        <div className="absolute -top-6 left-5 w-3 h-3 bg-[#FFB400] rounded-full border-2 border-[#1E1E1E]" />
                                        <div className="absolute -top-6 right-5 w-3 h-3 bg-[#FFB400] rounded-full border-2 border-[#1E1E1E]" />
                                    </div>

                                    {/* Body */}
                                    <div className="absolute top-24 left-1/2 -translate-x-1/2 w-28 h-36 bg-[#FFB400] rounded-full">
                                        {/* Stripes */}
                                        <div className="absolute top-6 w-full h-5 bg-[#1E1E1E] rounded-full" />
                                        <div className="absolute top-16 w-full h-5 bg-[#1E1E1E] rounded-full" />
                                        <div className="absolute top-26 w-full h-5 bg-[#1E1E1E] rounded-full" />

                                        {/* Cute legs */}
                                        <div className="absolute -bottom-2 left-4 w-1.5 h-6 bg-[#1E1E1E] rounded-full rotate-12" />
                                        <div className="absolute -bottom-2 left-12 w-1.5 h-6 bg-[#1E1E1E] rounded-full" />
                                        <div className="absolute -bottom-2 right-12 w-1.5 h-6 bg-[#1E1E1E] rounded-full" />
                                        <div className="absolute -bottom-2 right-4 w-1.5 h-6 bg-[#1E1E1E] rounded-full -rotate-12" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="contact-reveal">
                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl">
                            <div className="space-y-6">
                                {/* Name & Email */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[#1E1E1E] font-medium mb-2 text-sm">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full px-4 py-3 bg-[#F8F8F8] border-2 border-transparent rounded-lg focus:border-[#FFB400] focus:outline-none transition-colors text-[#1E1E1E]"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[#1E1E1E] font-medium mb-2 text-sm">Your Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full px-4 py-3 bg-[#F8F8F8] border-2 border-transparent rounded-lg focus:border-[#FFB400] focus:outline-none transition-colors text-[#1E1E1E]"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="block text-[#1E1E1E] font-medium mb-2 text-sm">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        onFocus={() => setFocusedField('subject')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full px-4 py-3 bg-[#F8F8F8] border-2 border-transparent rounded-lg focus:border-[#FFB400] focus:outline-none transition-colors text-[#1E1E1E]"
                                        placeholder="How can we help?"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-[#1E1E1E] font-medium mb-2 text-sm">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        rows="5"
                                        className="w-full px-4 py-3 bg-[#F8F8F8] border-2 border-transparent rounded-lg focus:border-[#FFB400] focus:outline-none transition-colors resize-none text-[#1E1E1E]"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    onClick={handleSubmit}
                                    className="group w-full bg-[#FFB400] hover:bg-[#FFC533] text-[#1E1E1E] font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
                                >
                                    <span>Send Message</span>
                                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
      `}</style>
        </section>
    );
};

export default ContactSection;