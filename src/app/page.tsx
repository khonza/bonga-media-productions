"use client";
import React from "react";
import Image from "next/image";
import TrueFocus from "@/components/TrueFocus/TrueFocus";
import GradientText from "@/components/GradientText/GradientText";
import { motion } from "framer-motion";
import TypewriterAnimation from "@/components/TypewriterAnimation";
import { FocusCards } from "@/components/ui/focus-cards";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const services = [
  {
    title: "Photography",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    ),
    description:
      "Professional photography services for events, products, portraits, and more.",
  },
  {
    title: "Videography",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect width="15" height="14" x="1" y="5" rx="2" ry="2" />
      </svg>
    ),
    description:
      "High-quality video production for commercials, events, documentaries, and social media content.",
  },
  {
    title: "Sound Hire",
    icon: (
      <svg fill="#ffc727" height="46" width="47" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> 
          <g> 
            <g> 
              <g> 
                <path d="M490.667,0h-128c-11.797,0-21.333,9.557-21.333,21.333V192H170.667V21.333C170.667,9.557,161.131,0,149.333,0h-128 C9.536,0,0,9.557,0,21.333v469.333C0,502.443,9.536,512,21.333,512h128h213.333h128c11.797,0,21.333-9.557,21.333-21.333V21.333 C512,9.557,502.464,0,490.667,0z M128,213.333v256H42.667V42.667H128V213.333z M234.667,256h42.667 c11.797,0,21.333,9.557,21.333,21.333s-9.536,21.333-21.333,21.333h-42.667c-11.797,0-21.333-9.557-21.333-21.333 S222.869,256,234.667,256z M256,448c-35.285,0-64-28.715-64-64c0-35.285,28.715-64,64-64s64,28.715,64,64 C320,419.285,291.285,448,256,448z M469.333,469.333H384v-256V42.667h85.333V469.333z"></path> 
                <path d="M256,362.667c-11.776,0-21.333,9.579-21.333,21.333c0,11.755,9.557,21.333,21.333,21.333s21.333-9.579,21.333-21.333 C277.333,372.245,267.776,362.667,256,362.667z"></path> <path d="M85.333,213.333c11.797,0,21.333-9.557,21.333-21.333v-85.333c0-11.776-9.536-21.333-21.333-21.333 C73.536,85.333,64,94.891,64,106.667V192C64,203.776,73.536,213.333,85.333,213.333z"></path> 
                <path d="M85.333,426.667c11.797,0,21.333-9.557,21.333-21.333V320c0-11.776-9.536-21.333-21.333-21.333 C73.536,298.667,64,308.224,64,320v85.333C64,417.109,73.536,426.667,85.333,426.667z"></path> 
                <path d="M426.667,213.333c11.797,0,21.333-9.557,21.333-21.333v-85.333c0-11.776-9.536-21.333-21.333-21.333 c-11.797,0-21.333,9.557-21.333,21.333V192C405.333,203.776,414.869,213.333,426.667,213.333z"></path> 
                <path d="M426.667,426.667c11.797,0,21.333-9.557,21.333-21.333V320c0-11.776-9.536-21.333-21.333-21.333 c-11.797,0-21.333,9.557-21.333,21.333v85.333C405.333,417.109,414.869,426.667,426.667,426.667z"></path> 
              </g> 
            </g> 
          </g>
        </g>
      </svg>
    ),
    description:
      "A range of high-quality sound systems for events, PA systems for large audiences for hire.",
  },
];

const gradientColors = ["#FFC727", "#cd9900", "#ffffff", "#cd9900", "#FFC727"];

const HomePage = () => {
  const showcaseCards = [
    {
      title: "Funeral: Andile Mani",
      src: "/image/funeral-andile-mani.jpg",
    },
    {
      title: "Matric Dance 2025: Andikwazi Sana",
      src: "/image/md-andimazi-lomtana.jpg",
    },
    {
      title: "Wedding: Mr & Mrs Andibazi",
      src: "/image/wedding-andibazi.jpg",
    },
    {
      title: "uMaziso ka Yiva",
      src: "/image/umaziso-ka-yiva.jpg",
      
    },
    {
      title: "uMgidi Ka Aviwe",
      src: "/image/umgidi-ka-aviwe.jpg",
    },
    {
      title: "Funeral: Andimazi Naye",
      src: "/image/funeral-andimazi-naye.jpg",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="w-full min-h-screen px-0 mx-0 relative h-[100vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/bmp-header.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative w-full flex items-center justify-center">
          <div className="w-full px-4 md:px-6 text-center">
            <div className="animate-fade-in-up relative z-20 -mt-16">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <GradientText
                  colors={gradientColors}
                  showBorder={false}
                  className="relative z-20 font-serif italic"
                >
                  <span className="text-white font-sans not-italic relative">
                    Bonga Media
                    <svg
                      viewBox="0 0 301 200"
                      fill="none"
                      className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
                    >
                      <motion.path
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{
                          duration: 0.75,
                          ease: "easeInOut",
                        }}
                        d="M149.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 100.2652 180.700 99.7518C280.814 100.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                        stroke="#FACC15"
                        strokeWidth="3"
                      />
                    </svg>
                  </span>{" "}
                  Production
                </GradientText>
              </h1>
              <h1 className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
                <TypewriterAnimation
                  strings={[
                    "Moments to cherish Forever!",
                    "Photography Services",
                    "Let us capture your wonderful moments",
                  ]}
                  className="h-10 flex items-center justify-center"
                />
              </h1>
              <div className="transform transition-transform duration-300 hover:scale-105 active:scale-95">
                <a
                  href="#about"
                  className="bg-transparent border-amber-300 border-1 hover:bg-yellow-500 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-ratih-dark relative">
        <div className="w-full px-4 md:px-40 pl-4 relative z-10">
          <div className="flex flex-col md:flex-row items-start gap-10">
            {/* Left side - Logo and Title */}
            <ScrollReveal>
              <div className="md-full animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase text-white text-center">
                  <TrueFocus
                    sentence="Bonga Media Production"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="yellow"
                    animationDuration={0.65}
                    pauseBetweenAnimations={0.5}
                  />
                </h2>
                <div className="w-full mb-6 justify-center">
                  <img
                    src="/image/bmp-logo.jpg"
                    alt="BMP Logo"
                    width={200}
                    height={200}
                    className="w-md h-auto object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Right side - Description */}
            <ScrollReveal delay={0.4}>
              <div className="animate-fade-in">
                <div className="p-6 rounded-lg shadow-lg bg-black/0 text-lg">
                   <p className="mt-4 text-gray-300 justify-center text-justify">
                    <span className="text-ratih-gold">In 2010</span>, in the vibrant heart of Gugulethu, Cape Town, a young visionary named Bonga Silimela 
                    launched <span className="text-ratih-gold">Bonga Media Production</span> with nothing but a camera, unwavering passion, and a bold dream. 
                    Starting small by capturing the raw beauty of local events—weddings filled with joy, dignified 
                    funerals honoring loved ones, sacred imigidi ceremonies, proud graduations, and lively parties—he 
                    turned everyday moments into timeless stories. What began as a one-man mission rooted in community 
                    soon grew into a trusted name, proving that greatness often starts from humble beginnings and a deep 
                    love for the people and culture around you.{" "}
                  </p>
                  <p className="mt-4 text-gray-300 text-justify">
                    Today, Bonga Media Production stands as a <span className="text-ratih-gold">beacon of excellence</span> in event videography and photography 
                    across <span className="text-ratih-gold">Cape Town and beyond</span>.</p> 
                  {/* <p>
                    Having documented countless milestones over more than a decade, the 
                    company has built a legacy of cinematic quality, emotional depth, and respectful storytelling—especially 
                    in culturally significant moments that matter most to families and communities. Looking ahead, 
                    Bonga's vision remains clear and inspiring: to elevate local talent onto commercial stages, create 
                    opportunities for emerging creatives in Gugulethu and the Western Cape, and show the world the 
                    richness of African celebrations through world-class media. With every frame captured, BMP continues 
                    to chase that original dream—turning local stories into legacies that inspire generations.
                  </p> */}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 bg-black relative">
        <div className="w-full px-4 md:px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-xl md:text-md text-ratih-gold flex justify-center font-bold mb-2">
                <SparklesText>Moments...</SparklesText>
              </h1>
              <h1 className="text-5xl md:text-xl text-ratih-gold flex justify-center font-bold mx-auto">
                <SparklesText>Captured by BMP</SparklesText>
              </h1>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <FocusCards cards={showcaseCards} />
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black relative">
        <div className="w-full px-4 md:px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 mx-auto">
                We provide professional services in photography, videography, sound systems and many more.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={0.2 * (index + 1)}>
                <div className="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-amber-300 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ratih-dark relative">
        <div className="w-full px-4 md:px-6 relative z-10 text-center">
          <ScrollReveal>
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Let’s Capture Your Story
              </h2>
              <p className="text-xl text-gray-300 mb-8 mx-auto">
                Ready to turn your special day into timeless footage and photos? Drop us a message—we’d love to hear about your event!
              </p>
              <div className="transform transition-transform duration-300 hover:scale-105 active:scale-95">
                <a
                  href="#get-in-touch"
                  className="bg-ratih-gold hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg transition-colors duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default HomePage;
