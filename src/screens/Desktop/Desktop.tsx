"use client"
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { LaunchpadListSection } from "./sections/LaunchpadListSection";
import { NavigationSection } from "./sections/NavigationSection";
import { SecurityTrustSection } from "./sections/SecurityTrustSection/SecurityTrustSection";
import { TokenUtilitySection } from "./sections/TokenUtilitySection"; 
import './DesktopStars.css';
import frame from "../../../Public/frame.png"
import freepik from "../../../Public/freepik--background--35766-1.png"
import groupA from "../../../Public/groupA.svg"  
import lineA from "../../../Public/lineB.svg" 
import star from '../../../Public/star.svg'
export const Desktop = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation menu items
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Terrs", href: "#" },
    { label: "Docs", href: "#" },
    { label: "FAQs", href: "#" },
  ];

  // Decorative elements data
  const stars = [
    {
      className: "star-1 min-[1750px]:ml-[450px] min-[1610px]:ml-[250px] min-[1500px]:ml-[100px]",
      src: star,
    },
    {
      className: "star-2 min-[1750px]:ml-[300px] min-[1610px]:ml-[150px] max-[1500px]:ml-0",
      src: star,
    },
    {
      className: "star-3 min-[1500px]:ml-[40px]",
      src: star,
    },
  ];

  const dots = [
    {
      className:
        "absolute w-[5px] h-[7px] min-[1500px]:left-[150px] min-[1500px]:top-[420px] top-[413px] max-[1300px]:top-[380px] max-[1300px]:left-[100px] left-[119px] bg-white rounded-[2.5px/3.5px]",
    },
    {
      className:
        "absolute w-[5px] h-2 top-[595px] left-[1361px] bg-[#bb2ada] rounded-[2.5px/4px]",
    },
    {
      className:
        "absolute w-[5px] h-[7px] top-[290px] left-[1283px] bg-[#bb2ada] rounded-[2.5px/3.5px]",
    },
    {
      className:
        "absolute w-[5px] h-[7px] top-[605px] left-[278px] bg-[#3bcbff] rounded-[2.5px/3.5px]",
    },
    {
      className:
        "absolute w-[5px] h-[7px] min-[1500px]:left-[800px]  top-[130px] left-[705px] bg-[#bb2ada] rounded-[2.5px/3.5px]",
    },
  ];

  // Decorative borders data
  const decorativeBorders = [
    {
      className:
        "absolute w-[390px] h-[164px] top-[111px] left-11 rounded-[195.24px/82.15px] border-[3.47px] border-solid border-[#544bbf4c] rotate-[42.98deg]",
    },
    {
      className:
        "absolute w-[390px] h-[164px] top-[119px] left-6 rounded-[195.24px/82.15px] border-[3.47px] border-solid border-[#544bbf4c] rotate-[42.98deg]",
    },
    {
      className:
        "absolute w-[390px] h-[164px] top-[135px] left-1 rounded-[195.24px/82.15px] border-[3.47px] border-solid border-[#544bbf4c] rotate-[42.98deg]",
    },
    {
      className:
        "absolute w-[390px] h-[137px] top-[115px] left-px rounded-[195.24px/68.33px] border-[3.47px] border-solid border-[#544bbf4c] rotate-[42.98deg]",
    },
    {
      className:
        "absolute w-[390px] h-[137px] top-[141px] -left-1.5 rounded-[195.24px/68.33px] border-[3.47px] border-solid border-[#544bbf4c] rotate-[42.98deg]",
    },
    {
      className:
        "absolute w-[390px] h-[137px] top-[303px] left-[1084px] rounded-[195.24px/68.33px] border-[3.47px] border-solid border-[#544bbf4c] rotate-[42.98deg]",
    },
    {
      className:
        "absolute w-[390px] h-[137px] top-[332px] left-[1077px] rounded-[195.24px/68.33px] border-[3.47px] border-solid border-[#544bbf4c] rotate-[42.98deg]",
    },
    {
      className:
        "absolute w-[390px] h-[137px] top-[266px] left-[1091px] rounded-[195.24px/68.33px] border-[3.47px] border-solid border-[#544bbf4c] rotate-[42.98deg]",
    },
  ];

  return (
    <div className="bg-[#020022] flex flex-row justify-center w-full">
      <div className="bg-[#020022] overflow-hidden min-[1500px]:w-[100%] w-[1440px] relative">
        <div className="relative w-full">
          <div className="relative w-full">
            <div className="relative w-full">
              {/* Header Navigation */}
              <div className="flex items-center justify-between px-[120px] max-[1500px]:px-[80px] py-[50px] max-[1100px]:px-[50px] max-[680px]:px-[25px] max-[680px]:py-[32px]">
                {/* Logo */}
                <div className="flex items-end gap-[5px]">
                    <img
                    className="relative w-[200px] h-[42px] object-contain max-[680px]:w-[150px] max-[680px]:h-[32px]"
                    alt="Frame"
                    src={frame} 
                  />
                </div>
{/* Navigation Links - Hidden on mobile */}
                <div className="flex items-center gap-12 max-[1100px]:gap-6 max-[1000px]:hidden">
                  {navItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#afaabf] hover:text-white text-xl tracking-[0] leading-[normal]"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                {/* Connect Wallet Button - Hidden on mobile */}
                <Button className="px-5 py-[18px] h-[66px] bg-[#060232] hover:bg-[#060232]/80 rounded-[15px] border border-solid border-[#afaabf80] shadow-[inset_0px_-4px_11.7px_#907ce640] [font-family:'Poppins',Helvetica] font-medium text-[#afaabf] text-xl max-[1000px]:hidden">
                  Connect Wallet
                </Button>

                {/* Mobile Menu Toggle Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="hidden max-[1000px]:flex flex-col justify-center items-center w-8 h-8 space-y-1"
                >
                  <span className={`block w-6 h-0.5 bg-[#afaabf] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-[#afaabf] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-[#afaabf] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>
              </div>

              {/* Mobile Menu: Backdrop + Slide-in Panel */}
              {/* Backdrop */}
              <div
                onClick={() => setIsMenuOpen(false)}
                className={`hidden max-[1000px]:block fixed inset-0  z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
              />
              {/* Panel */}
              <div
                className={`hidden max-[1000px]:block fixed top-0 right-0 w-[220px] h-full bg-[#020022] bg-opacity-95 z-50 transform transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
              >
                <div className="flex flex-col items-start pt-[80px] h-full pl-[30px] pr-6 space-y-6">
                  {/* Close button */}
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-8 right-8 text-[#afaabf] text-2xl"
                  >
                    ×
                  </button>

                  {/* Mobile Navigation Links */}
                  <div className="flex flex-col items-start space-y-4">
                    {navItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="[font-family:'Poppins',Helvetica] font-medium text-[#afaabf] text-2xl max-[767px]:text-[18px] tracking-[0] leading-[normal] hover:text-white transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>

                  {/* Mobile Connect Wallet Button */}
                  <Button className="relative z-11 px-2 py-4 bg-[#060232] hover:bg-[#060232]/90 rounded-[15px] border border-solid border-[#afaabf80] shadow-[inset_0px_-4px_11.7px_#907ce650] [font-family:'Poppins',Helvetica] font-medium text-[#afaabf] text-xl max-[767px]:text-[16px] hover:text-white transition-colors">
                    Connect Wallet
                  </Button>
                </div>
              </div>

              {/* Hero Section */}
              <HeroSection />

              {/* Decorative Elements */}
               {stars.map((star, index) => (
                 <img
                   key={`star-${index}`}
                   src={star.src}
                   className={star.className}
                   alt="star"
                 />
               ))}

              {dots.map((dot, index) => (
                <div key={`dot-${index}`} className={dot.className} />
              ))} 

              {/* Navigation Section */}
              <NavigationSection />

            
              <div className="absolute w-[402px] h-[402px] top-[257px] right-[150px] max-[1500px]:left-[899px] bg-[#a097ffcc] rounded-[201px] blur-[88.6px] max-[1300px]:w-[302px] max-[1300px]:h-[302px] max-[1100px]:top-[250px] max-[1100px]:left-[640px]  max-[1000px]:left-[250px] max-[767px]:left-[230px] max-[1000px]:top-[600px] max-[767px]:top-[340px] max-[365px]:top-[390px] max-[400px]:left-[170px] max-[400px]:h-[300px] max-[767px]:w-[102px] max-[680px]:h-[400px]" />
              <img  className="absolute max-w-[659px] max-h-[659px] top-[100px]  right-[30px] max-[1500px]:left-[750px] object-cover z-10 max-[1300px]:max-w-[559px] max-[1300px]:max-h-[559px] max-[767px]:max-w-[400px] max-[767px]:h-[400px] max-[1100px]:top-[50px] max-[1100px]:left-[500px] max-[1000px]:left-[150px] max-[1000px]:top-[500px] max-[767px]:top-[300px] max-[365px]:top-[360px] max-[767px]:left-[70px] max-[500px]:w-[300px] max-[400px]:left-[30px] max-[340px]:left-[10px] max-[400px]:object-center  rotate-[221deg]"
                alt="Freepik background"
                src={freepik}
              />
            </div>

          
            <div className="absolute top-[-100px] left-[-250px] max-[1700px]:left-[-300px]  w-full  max-[1400px]:left-[-300px] max-[1300px]:top-[-200px] max-[1000px]:top-[300px] max-[1100px]:left-[-250px] max-[1000px]:left-[-300px] max-[680px]:left-[-300px] max-[767px]:top-[-100px]">
              <div className="absolute w-[438px] h-[410px] top-[822px] left-0">
                {decorativeBorders.slice(0, 3).map((border, index) => (
                  <div key={`border-${index}`} className={border.className} />
                ))}
              </div>
            </div>
          </div>

          <SecurityTrustSection />

         
          <div className="absolute top-[280px] right-[-1660px] max-[1750px]:right-[-1500px] max-[1600px]:right-[-1400px] max-[1500px]:right-[-1293px]  w-full max-[1350px]:right-[-1100px] max-[1200px]:right-[-900px] max-[1000px]:top-[600px] max-[1000px]:right-[-700px] max-[680px]:right-[-400px]">
              <div className="absolute w-[438px] h-[410px] top-[822px] left-0">
                {decorativeBorders.slice(0, 3).map((border, index) => (
                  <div key={`border-${index}`} className={border.className} />
                ))}
              </div>
            </div>
        </div>

        {/* Token Utility Section */}
        <TokenUtilitySection />

        {/* Decorative Group */}
        <div className="absolute w-[456px] h-[470px] top-[2103px] left-[-400px] max-[1500px]:left-[-358px] max-[1100px]:top-[2300px] max-[1000px]:left-[-400px] max-[680px]:top-[3500px] max-[1000px]:top-[3000px]">
          <img
            className="absolute w-[445px] h-[1166px] top-[-348px] left-[400px] max-[1500px]:left-[358px]"
            alt="Group"
            src={groupA}
          />
        </div>

        {/* Footer and Launchpad Sections Container */}
       

        {/* Call To Action Section */}
        <CallToActionSection />

        <div className="relative w-full mt-8">

      
          <div className="relative w-full">
          
            {decorativeBorders.slice(5).map((border, index) => (
              <div
                key={`border-footer-${index}`}
                className={`${border.className} ml-[650px] max-[1800px]:ml-[450px] max-[1680px]:ml-[330px] max-[1500px]:ml-[200px] max-[1300px]:w-[300px]  max-[1300px]:ml-[80px] max-[1100px]:ml-[50px]`}
              />
            ))}

       
            <FooterSection />
          </div>

          
          <LaunchpadListSection />
        </div>

        {/* Copyright Footer */}
        <div className="relative w-full mt-8 px-[47px] max-[767px]:px-[25px]">
          <img
            className="w-full h-[3px] object-cover"
            alt="Line"
                  src={lineA}
          />
          <div className="flex  items-center max-[500px]:flex-wrap justify-between w-full w-[741px] px-[349px] pt-4 pb-[32px]   max-[1300px]:px-[100px] max-[1100px]:px-[0px] max-[767px]:px-[0px] max-[680px]:py-[20px]">
            <div className="relative [font-family:'Poppins',Helvetica] font-normal text-white text-lg tracking-[0] leading-[27px] whitespace-nowrap max-[480px]:text-[12px] ">
              Copyright © ABC
            </div>
            <div className="relative [font-family:'Poppins',Helvetica] font-normal text-white text-[17px] max-[1500px]:text-[15px] text-center tracking-[0] leading-[17.4px] whitespace-nowrap max-[480px]:text-[12px]">
              © 2025&nbsp;&nbsp;All rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
