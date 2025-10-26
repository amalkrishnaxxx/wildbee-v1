import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Do you work with startups?",
            answer: "Yes. Whether you're just starting out or scaling up, we adapt to your stage and budget."
        },
        {
            question: "What industries do you specialize in?",
            answer: "Lifestyle-driven brands—fashion, hospitality, e-commerce, and events—where storytelling and community are key."
        },
        {
            question: "Do you produce content too?",
            answer: "Yes. From shoots to edits, we create photos, videos, and graphics tailored for your brand."
        }
    ];

    useGSAP(() => {
        gsap.from('.faq-header', {
            scrollTrigger: {
                trigger: '.faq-section',
                start: 'top 80%',
                end: 'top 50%',
                scrub: 1
            },
            y: 900,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        });


    });

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="faq-header text-center mb-16">
                    <p className="text-[#FFB400] text-sm font-medium tracking-wider uppercase mb-4">
                        F.A.Q
                    </p>
                    <h2 className="text-5xl lg:text-6xl font-bold">
                        <span className="text-gray-900">Frequently Asked </span>
                        <span className="text-[#FFB400]">Questions</span>
                    </h2>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="faq-item bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left group"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#FFB400] transition-colors pr-4">
                                    {faq.question}
                                </h3>
                                <ChevronDown
                                    className={`flex-shrink-0 text-[#FFB400] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                    size={24}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48' : 'max-h-0'
                                    }`}
                            >
                                <div className="px-8 pb-6">
                                    <p className="text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Decorative element */}
                <div className="mt-20 text-center">
                    <div className="inline-block">
                        <div className="w-16 h-1 bg-gradient-to-r from-[#FFB400] to-yellow-300 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;