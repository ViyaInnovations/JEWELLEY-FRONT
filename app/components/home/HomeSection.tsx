import React from 'react';
import { Sparkles, Award, Shield, Heart, MapPin, Phone } from 'lucide-react';

export default function HomeSection() {
    const features = [
        { icon: Sparkles, title: 'Premium Quality', desc: 'Certified gold & diamonds' },
        { icon: Award, title: '25+ Years Legacy', desc: 'Trusted craftsmanship' },
        { icon: Shield, title: 'Lifetime Warranty', desc: 'Complete protection' },
        { icon: Heart, title: 'Custom Designs', desc: 'Your vision, our craft' }
    ];

    return (
        <section className="relative min-h-screen flex items-center">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url(/design.jpg)',
                    backgroundAttachment: 'fixed', // works on desktop
                }}
            >
                <div className="absolute inset-0 bg-linear-to-r from-secondary/50 via-secondary/40 to-secondary/30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="text-primary-light">
                        <div className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-sm rounded-full text-primary text-sm font-medium mb-6 border border-primary/30">
                            Kozhikode's Finest Since 1998
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Where <span className="text-primary">Timeless Elegance</span> Meets Modern Craftsmanship
                        </h1>

                        <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90">
                            At Larix Gold and Diamonds, we transform precious metals and gemstones into heirlooms that tell your unique story. Located in the heart of Koduvally, we've been Kozhikode's trusted jewelers for over two decades.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <button className="px-8 py-3.5 bg-primary text-secondary font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                                Explore Collections
                            </button>
                            <button className="px-8 py-3.5 bg-transparent text-primary-light font-semibold rounded-lg border-2 border-primary-light/30 hover:bg-primary-light/10 hover:border-primary transition-all duration-300">
                                Book Appointment
                            </button>
                        </div>

                        {/* Contact Info */}
                        <div className="grid sm:grid-cols-2 gap-4 text-sm">
                            <div className="flex items-start gap-3 bg-secondary-light/20 backdrop-blur-sm p-4 rounded-lg border border-secondary-light/30">
                                <div className="text-primary mt-0.5">
                                    <MapPin size={20} />
                                </div>

                                <div>
                                    <p className="font-medium text-primary mb-1">Visit Our Store</p>
                                    <p className="opacity-90 leading-relaxed">25/745, Main Road, Koduvally<br />Kozhikode, Kerala</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 bg-secondary-light/20 backdrop-blur-sm p-4 rounded-lg border border-secondary-light/30">
                                <div className="text-primary mt-0.5">
                                    <Phone size={20} />
                                </div>

                                <div>
                                    <p className="font-medium text-primary mb-1">Get in Touch</p>
                                    <a href="tel:+919645639916" className="opacity-90 hover:text-primary transition-colors block">+91 9645 639 916</a>
                                    <a href="mailto:Larixgoldkdly@gmail.com" className="opacity-90 hover:text-primary transition-colors text-xs">Larixgoldkdly@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Features */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-secondary-light/20 backdrop-blur-sm p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:transform hover:scale-105 group"
                                >
                                    <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                                        <Icon className="text-primary" size={24} />
                                    </div>
                                    <h3 className="text-primary font-semibold text-lg mb-2">{feature.title}</h3>
                                    <p className="text-primary-light/80 text-sm">{feature.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 pt-8 border-t border-primary-light/20">
                    <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 text-primary-light/60 text-sm">
                        <div className="text-center">
                            <p className="text-2xl font-bold text-primary mb-1">25+</p>
                            <p>Years Experience</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-primary mb-1">10,000+</p>
                            <p>Happy Customers</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-primary mb-1">100%</p>
                            <p>Certified Gold</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-primary mb-1">500+</p>
                            <p>Unique Designs</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
