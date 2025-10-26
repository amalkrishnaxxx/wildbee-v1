import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, Instagram, Linkedin, Facebook, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);
    const [hoveredSocial, setHoveredSocial] = useState(null);

    useEffect(() => {
        const footer = footerRef.current;

        gsap.fromTo('.footer-reveal',
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: footer,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        gsap.fromTo('.footer-divider',
            { scaleX: 0 },
            {
                scaleX: 1,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: footer,
                    start: 'top 80%',
                }
            }
        );
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const socialLinks = [
        { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/wildbee' },
        { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/wildbee' },
        { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/wildbee' }
    ];

    const quickLinks = [
        { name: 'About', target: '.hero-section' },
        { name: 'Services', target: '.services' },
        { name: 'Brands', target: '.brands-life' },
        { name: 'Contact', target: 'footer' }
    ];

    return (
        <footer ref={footerRef} className="relative bg-[#1E1E1E] text-white overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-16 py-12 md:py-16">

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-10">

                    {/* Company Info */}
                    <div className="footer-reveal">
                        <h3 className="text-2xl font-bold text-[#FFB400] mb-4">wildbee</h3>
                        <div className="flex items-start gap-2 text-[#CCCCCC] text-sm">
                            <MapPin size={16} className="text-[#FFB400] mt-1 flex-shrink-0" />
                            <div className="leading-relaxed">
                                <p>Vazhakala, Kakkanad</p>
                                <p>Kochi, Kerala, 682030</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-reveal">
                        <h4 className="text-base font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, i) => (
                                <li key={i}>
                                    <button
                                        onClick={() => scrollToSection(link.target)}
                                        className="text-[#CCCCCC] text-sm hover:text-[#FFB400] transition-all duration-300 hover:translate-x-1 transform"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-reveal">
                        <h4 className="text-base font-semibold mb-4 text-white">Contact</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li className="flex items-center gap-2">
                                <Phone size={16} className="text-[#FFB400] flex-shrink-0" />
                                <a href="tel:+919567282909" className="text-[#CCCCCC] hover:text-[#FFB400] transition-colors">
                                    +91 956 7282 909
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={16} className="text-[#FFB400] flex-shrink-0" />
                                <a href="mailto:team.wildbee@gmail.com" className="text-[#CCCCCC] hover:text-[#FFB400] transition-colors break-all">
                                    team.wildbee@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Decorative Divider */}
                <div className="footer-divider w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFB400] to-transparent my-8 origin-left" />

                {/* Follow Us Section */}
                <div className="footer-reveal mb-8">
                    <h4 className="text-base font-semibold mb-2 text-white">Follow Us</h4>
                    <p className="text-[#999] text-sm mb-4 max-w-2xl leading-relaxed">
                        Stay informed with our latest news, updates, and insights. Connect with us on our official channels.
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-3">
                        {socialLinks.map((social, i) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={i}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onMouseEnter={() => setHoveredSocial(i)}
                                    onMouseLeave={() => setHoveredSocial(null)}
                                    className="w-10 h-10 bg-[#2A2A2A] rounded-full flex items-center justify-center hover:bg-[#FFB400] transition-all duration-300 group"
                                    style={{
                                        transform: hoveredSocial === i ? 'scale(1.1) translateY(-2px)' : 'scale(1)'
                                    }}
                                    aria-label={social.name}
                                >
                                    <Icon size={18} className="text-white group-hover:text-[#1E1E1E] transition-colors" />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-reveal pt-6 border-t border-[#2A2A2A]">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-[#999] text-xs">
                        <p className="text-center md:text-left">
                            © Copyright wildbee. All Rights Reserved
                        </p>
                        <p className="text-center md:text-right">
                            Designed by <span className="text-[#FFB400] font-medium">Encrypt Bytes Labs</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;