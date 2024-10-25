"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Twitter,
  Send,
  Menu,
  X,
  Wallet,
  ArrowRightLeft,
  CreditCard,
  CheckCircle,
  Download,
  ChevronLeft,
  ChevronRight,
  DollarSign,
  Rocket,
} from "lucide-react";
import Marquee from "react-fast-marquee";

const RiverBorder = () => (
  <div className="absolute inset-x-0 h-4 z-0">
    <div
      className="w-full h-full bg-repeat-x"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 4'%3E%3Cpath fill='none' stroke='%23fff' stroke-width='1' d='M0 3.5c5 0 5-3 10-3s5 3 10 3 5-3 10-3 5 3 10 3'/%3E%3C/svg%3E\")",
        backgroundSize: "20px 4px",
        animation: "flowRight 10s linear infinite",
      }}
    ></div>
  </div>
);

const CloudBorder = ({ className }) => (
  <div
    className={`absolute inset-0 ${className}`}
    style={{
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='none'%3E%3Cpath fill='%23ffffff' d='M30 20c0-11 9-20 20-20s20 9 20 20h20c0-22-18-40-40-40S10 -2 10 20H30zm0 80c0-11 9-20 20-20s20 9 20 20h20c0-22-18-40-40-40S10 78 10 100H30z'/%3E%3C/svg%3E\")",
      backgroundSize: "100px 100px",
      backgroundRepeat: "repeat",
      opacity: 0.5,
    }}
  />
);

const BuyButton = ({ className = "" }) => (
  <Link
    href={"https://dexscreener.com/solana/9hwqf6x7wja2unv9amxfxri19k9zfgwgez2ryj64qn95"}
    target="_blank"
    className={`bg-white text-green-500 px-6 py-3 rounded-full hover:bg-green-100 transition duration-300 flex items-center space-x-2 transform hover:scale-105 ${className}`}
  >
    <DollarSign className="w-5 h-5" />
    <span>Buy $Toby</span>
    <Rocket className="w-5 h-5 animate-bounce" />
  </Link>
);

const StickerImage = ({ src, alt, className }) => (
  <Image
    src={src}
    alt={alt}
    width={120}
    height={120}
    className={`absolute ${className}`}
    onContextMenu={(e) => e.preventDefault()}
    draggable={false}
  />
);

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const assets = [
    "/sa1.png?height=300&width=300",
    "/sa2.png?height=300&width=300",
    "/sa3.png?height=300&width=300",
    "/sa4.png?height=300&width=300",
    "/sa5.png?height=300&width=300",
    "/sa6.png?height=300&width=300",
    "/sa7.png?height=300&width=300",
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % assets.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + assets.length) % assets.length);
  };

  const downloadAsset = () => {
    const link = document.createElement("a");
    link.href = assets[currentSlide];
    link.download = `sa${currentSlide + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#02418a] font-comic-sans">
      <div className="container mx-auto px-4 pt-8">
        <header className="bg-green-500 text-white rounded-[3rem] fixed top-6 left-12 right-12  shadow-lg mb-8 border-2 border-white z-50 overflow-hidden">
          <CloudBorder className="z-0" />
          <nav className="flex justify-between items-center py-4 px-6 relative z-10">
            <div className="text-xl font-bold">
              <Image
                src="/logo.png?height=40&width=40"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
            </div>
            <div className="hidden md:flex space-x-4 items-center">
              <button
                onClick={() => scrollToSection("tokenomics")}
                className="text-white hover:underline hover:animate-pulse font-bold"
              >
                Tokenomics
              </button>
              <button
                onClick={() => scrollToSection("how-to-buy")}
                className="text-white hover:underline hover:animate-pulse font-bold"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("join-us")}
                className="text-white hover:underline hover:animate-pulse font-bold"
              >
                Pack
              </button>
              <BuyButton />
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </header>

        {isMenuOpen && (
          <div className="md:hidden px-6 py-4 bg-green-500 rounded-3xl border-2 border-white fixed top-24 left-4 right-4 z-20 shadow-lg animate-fadeIn">
            <button
              onClick={() => scrollToSection("tokenomics")}
              className="block py-2 text-white hover:underline font-bold"
            >
              Tokenomics
            </button>
            <button
              onClick={() => scrollToSection("how-to-buy")}
              className="block py-2 text-white hover:underline font-bold"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("join-us")}
              className="block py-2 text-white hover:underline font-bold"
            >
              Pack
            </button>
            <BuyButton className="mt-2 w-full justify-center" />
          </div>
        )}

        <main className="relative z-0">
          <div className="container mx-auto px-4 py-16 relative">
            <StickerImage
              src="/st1.svg"
              alt="Sticker 1"
              className="top-0 -z-50 right-0"
            />
            <StickerImage
              src="/st2.svg"
              alt="Sticker 2"
              className="bottom-0 -z-50 left-0"
            />
            <div className="flex flex-col md:flex-row items-center justify-between relative">
              <StickerImage
                src="/st3.svg"
                alt="Sticker 1"
                className="absolute inset-0 -z-50 top-4"
              />
              <div className="md:w-1/2 space-y-6 text-center ml-10 md:text-left hidden md:block">
                <Image
                  src="/hero-left.svg"
                  alt="Left Hero Image"
                  priority={true}
                  width={500}
                  height={500}
                  className="rounded-lg mb-6 mx-auto md:mx-0"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col items-center mt-[-20px] md:mt-[-50px]">
                {/* <StickerImage src="/st2.svg" alt="Sticker 1" className="top-0 left-0" /> */}

                <Image
                  src="/right-hero.svg"
                  alt="Right Hero Image"
                  priority={true}
                  width={1000}
                  height={1000}
                  className="rounded-lg animate-float "
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />

                <div className="md:w-1/2 space-y-6 text-center md:text-left block md:hidden mt-[-100px]">
                  <Image
                    src="/hero-left-mobile.svg"
                    alt="Left Hero Image"
                    priority={true}
                    width={500}
                    height={500}
                    className="rounded-lg mx-auto md:mx-0"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable={false}
                  />
                </div>

                <div className="flex items-center space-x-4 md:mt-[-100px]">
                  <BuyButton className="mb-0" />
                  <Link
                    href="https://twitter.com/TobyOnSolCTO"
                    target="_blank"
                    className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition duration-300 z-0"
                  >
                    <Twitter size={24} />
                  </Link>
                  <Link
                    href="https://t.me/CTOTobySol"
                    target="_blank"
                    className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300 z-0"
                  >
                    <Send size={24} />
                  </Link>
                </div>
              </div>
              <StickerImage
                src="/st6.svg"
                alt="Sticker 1"
                className="absolute -z-50 bottom-[-60px] md:bottom-10 right-0"
              />
            </div>
          </div>
        </main>
      </div>

      <div className="mt-12 bg-green-500 py-4 relative overflow-hidden">
        <RiverBorder />
        <Marquee gradient={false} speed={50} className="relative z-10">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="flex items-center">
              <span className="text-2xl font-bold text-white mx-4">$Toby</span>
              <span className="text-2xl font-bold text-white mx-4">
                Toby on SOL
              </span>
            </div>
          ))}
        </Marquee>
        <RiverBorder />
      </div>

      <div id="tokenomics" className="container mx-auto px-4 py-16 pt-28 relative">
        <StickerImage
          src="/st5.svg"
          alt="Sticker 7"
          className="top-0 right-0 z-0"
        />
        <StickerImage
          src="/st7.svg"
          alt="Sticker 8"
          className="bottom-0 left-0"
        />
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          &quot;Tokenomics&quot;
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/toby2.png"
              alt="Tokenomics Illustration"
              width={500}
              height={700}
              className="rounded-lg shadow-2xl"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
            />
          </div>
          <div className="md:w-1/2">
            <div className="bg-green-500 rounded-xl p-6 shadow-lg relative overflow-hidden">
              <CloudBorder className="z-0" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {[
                  { title: "Ticker", content: "$TOBY" },
                  { title: "Tax", content: "No" },
                  { title: "Chain", content: "Solana" },
                  { title: "Current Supply", content: "999,746,965 $TOBY" },
                  {
                    title: "Contract Address",
                    content: "9hwqf6X7wja2UNv9AmxfxRi19K9ZfgwGeZ2Ryj64qn95",
                    span: "col-span-full",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`bg-green-500 border-2 border-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition duration-300 ${
                      item.span || ""
                    }`}
                  >
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p
                      className={`text-sky-100 ${
                        item.title === "Contract Address"
                          ? "text-sm break-all"
                          : "text-2xl"
                      }`}
                    >
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-green-500 py-4 relative overflow-hidden">
        <RiverBorder />
        <Marquee gradient={false} speed={50} className="relative z-10">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="flex items-center">
              <span className="text-2xl font-bold text-white mx-4">$Toby</span>
              <span className="text-2xl font-bold text-white mx-4">
                Toby on SOL
              </span>
            </div>
          ))}
        </Marquee>
        <RiverBorder />
      </div>

      <div id="how-to-buy" className="container mx-auto px-4 py-16 pt-28 relative">
        <StickerImage
          src="/st3.svg"
          alt="Sticker 7"
          className="top-0 right-0"
        />
        <StickerImage
          src="/st2.svg"
          alt="Sticker 8"
          className="bottom-0 left-0"
        />
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          &quot;How to Buy&quot;
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-green-500 rounded-xl p-6 shadow-lg relative overflow-hidden">
            <CloudBorder className="z-0" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {[
                {
                  icon: Wallet,
                  title: "Create a Wallet",
                  content: "Download a Solana-compatible wallet and set it up",
                },
                {
                  icon: ArrowRightLeft,
                  title: "Get SOL",
                  content:
                    "Purchase SOL from an exchange or transfer it to your wallet",
                },
                {
                  icon: CreditCard,
                  title: "Connect to DEX",
                  content: "Visit a Solana DEX and connect your wallet",
                },
                {
                  icon: CheckCircle,
                  title: "Swap for $TOBY",
                  content: "Use SOL to swap for $TOBY tokens",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-green-500 rounded-xl p-6 shadow-lg transform hover:scale-105 transition duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-green-500">
                      {step.title}
                    </h3>
                  </div>
                  <step.icon className="w-12 h-12 text-green-500 mb-4" />
                  <p className="text-green-700">{step.content}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <BuyButton />
          </div>
        </div>
      </div>

      <div id="join-us" className="container mx-auto px-4 py-16 pt-28 relative">
        <StickerImage
          src="/st9.svg"
          alt="Sticker 7"
          className="top-0 right-0"
        />
        <StickerImage
          src="/st4.svg"
          alt="Sticker 8"
          className="bottom-0 left-0"
        />
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          &quot;Family Pack&quot;
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-green-500 rounded-xl p-6 shadow-lg relative overflow-hidden">
            <CloudBorder className="z-0" />
            <div className="relative z-10">
              <div className="relative" ref={carouselRef}>
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {assets.map((asset, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <Image
                          src={asset}
                          alt={`Asset ${index + 1}`}
                          width={300}
                          height={300}
                          className="mx-auto"
                          onContextMenu={(e) => e.preventDefault()}
                          draggable={false}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-green-500 p-2 rounded-full"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-green-500 p-2 rounded-full"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              <div className="flex justify-center mt-4 space-x-4">
                <button
                  onClick={downloadAsset}
                  className="bg-white text-green-500 px-6 py-2 rounded-full hover:bg-green-700 hover:text-white transition duration-300"
                >
                  <Download className="inline-block mr-2" size={20} />
                  Download
                </button>
                <Link
                  href="https://twitter.com/intent/tweet?text=Check out $Toby 🚀🐸 on Solana&url=https://dexscreener.com/solana/9hwqf6x7wja2unv9amxfxri19k9zfgwgez2ryj64qn95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300"
                >
                  <Twitter className="inline-block mr-2" size={20} />
                  Tweet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-green-500 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Link
                href="https://twitter.com/TobyOnSolCTO"
                target="_blank"
                className="hover:text-green-200 transition duration-300"
              >
                <Twitter size={24} />
              </Link>
              <Link
                href="https://t.me/CTOTobySol"
                target="_blank"
                className="hover:text-green-200 transition duration-300"
              >
                <Send size={24} />
              </Link>
              <BuyButton />
            </div>
            <div className="text-sm">© 2023 $Toby. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
