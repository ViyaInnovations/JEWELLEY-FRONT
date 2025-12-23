"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail } from "lucide-react";

export default function Contact() {
    return (
        <section className="relative w-full text-white py-24 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/contact-bg.jpg" // MUST exist
                    alt="Jewellery Showroom"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-[rgb(148,70,70)]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                {/* Left – Image */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative h-130"
                >
                    <Image src="/design.jpg" alt="Jewellery Consultation" fill className="object-cover rounded-sm" />
                </motion.div>

                {/* Right – Content */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="uppercase tracking-[0.35em] text-sm text-gray-300 mb-4">Private Consultation</p>

                    <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
                        Let’s Create Something <br /> Truly Personal
                    </h2>

                    <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
                        With over <strong>15 years of experience</strong>, we specialise in bespoke and bridal jewellery
                        crafted with precision, purity, and trust.
                    </p>

                    {/* Contact Info */}
                    <div className="space-y-4 mb-10 text-gray-200">
                        <div className="flex items-center gap-3">
                            <Mail size={16} aria-hidden="true" />
                            <a href="mailto:larixgoldkdly@gmail.com" itemProp="email">
                                larixgoldkdly@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone size={18} />
                            <span>+91 96456 39916</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <MapPin size={18} />
                            <span>25/745, Main Road, Koduvally Kozhikode, Kerala</span>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-5">
                        <a
                            href="tel:+919645639916"
                            className="px-8 py-3 border border-white hover:bg-white hover:text-black transition"
                        >
                            Call Now
                        </a>

                        <a
                            href="https://wa.me/919645639916"
                            target="_blank"
                            className="px-8 py-3 bg-green-600 hover:bg-green-700 transition"
                        >
                            WhatsApp
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
