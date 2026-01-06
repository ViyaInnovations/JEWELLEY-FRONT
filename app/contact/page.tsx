"use client";

import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail } from "lucide-react";

/* ---------------- JSON-LD (Local Business) ---------------- */
 function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Contact",
        name: "Larix Gold & Diamonds",
        image: "https://larix-gold-diamonds.vercel.app/images/Necklac.jpg",
        address: {
            "@type": "PostalAddress",
            streetAddress: "25/745, Main Road",
            addressLocality: "Koduvally",
            addressRegion: "Kerala",
            postalCode: "673572",
            addressCountry: "IN",
        },
        telephone: "+91 96456 39916",
        email: "larixgoldkdly@gmail.com",
        url: "https://larix-gold-diamonds.vercel.app",
    };
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
export default function Contact() {
    return (
        <>
            <Head>
                <title>Gold Necklace Designs in Kozhikode | 22k Jewellery – Larix</title>

                <meta
                    name="description"
                    content="Discover elegant gold necklace designs in Kozhikode crafted in pure 22k gold at Larix Gold & Diamonds."
                />
            </Head>{" "}
            {/* Structured Data */} <LocalBusinessSchema />{" "}
            <section className="relative w-full text-white py-7 md:py-24 overflow-hidden">
                {" "}
                {/* Background */}{" "}
                <div className="absolute inset-0">
                    {" "}
                    <Image src="/images/Necklac.jpg" alt="Jewellery Showroom" fill priority className="object-cover" />{" "}
                    <div className="absolute inset-0 bg-[rgba(148,70,70,0.85)]" />{" "}
                </div>{" "}
                <div className=" relative z-10 max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-2 md:items-center ">
                    {" "}
                    {/* Image – MOBILE FIRST */}{" "}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className=" relative w-full h-56 sm:h-64 md:h-105 lg:h-120 "
                    >
                        {" "}
                        <Image
                            src="/design.jpg"
                            alt="Jewellery Consultation"
                            fill
                            className="object-cover rounded-xl"
                        />{" "}
                    </motion.div>{" "}
                    {/* Content */}{" "}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {" "}
                        <p className="uppercase tracking-[0.35em] text-xs text-gray-300 mb-4">
                            {" "}
                            Private Consultation{" "}
                        </p>{" "}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-6 leading-tight">
                            {" "}
                            Let’s Create Something <br className="hidden sm:block" /> Truly Personal{" "}
                        </h2>{" "}
                        <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
                            {" "}
                            With over <strong>15 years of experience</strong>, we specialise in bespoke and bridal jewellery
                            crafted with precision, purity, and trust.{" "}
                        </p>{" "}
                        {/* Contact Info */}{" "}
                        <div className="space-y-4 mb-10 text-gray-200 text-sm">
                            {" "}
                            <div className="flex items-center gap-3">
                                {" "}
                                <Mail size={16} /> <a href="mailto:larixgoldkdly@gmail.com"> larixgoldkdly@gmail.com </a>{" "}
                            </div>{" "}
                            <div className="flex items-center gap-3">
                                {" "}
                                <Phone size={16} /> <span>+91 96456 39916</span>{" "}
                            </div>{" "}
                            <div className="flex items-start gap-3">
                                {" "}
                                <MapPin size={16} /> <span> 25/745, Main Road, Koduvally Kozhikode, Kerala </span>{" "}
                            </div>{" "}
                        </div>{" "}
                        {/* Actions */}{" "}
                        <div className="flex flex-wrap gap-4">
                            {" "}
                            <a
                                href="tel:+919645639916"
                                className="px-7 py-3 border border-white hover:bg-white hover:text-black transition"
                            >
                                {" "}
                                Call Now{" "}
                            </a>{" "}
                            <a
                                href="https://wa.me/919645639916"
                                target="_blank"
                                className="px-7 py-3 bg-green-600 hover:bg-green-700 transition"
                            >
                                {" "}
                                WhatsApp{" "}
                            </a>{" "}
                        </div>{" "}
                    </motion.div>{" "}
                </div>{" "}
            </section>{" "}
        </>
    );
}
