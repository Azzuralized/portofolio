"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {
  const [bgColor, setBgColor] = useState("bg-[#a7a999]");
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sectionElement = sectionRef.current;
    const triggerElement = triggerRef.current;

    if (!sectionElement || !triggerElement) return;

    // Calculate the total width of the scrolling container
    const totalWidth = sectionElement.scrollWidth - window.innerWidth;
    gsap.to(sectionElement, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: triggerElement,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: 0.6,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Cleanup function is simplified
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Horizontal Scrolling Container */}
      <section
        ref={triggerRef}
        className={`w-screen overflow-hidden ${bgColor}`}
      >
        <div
          ref={sectionRef}
          className="flex flex-nowrap w-[300vw] min-h-screen"
        >
          {/* Page One */}
          <div className="flex-none w-screen bg-[#a7a999] flex flex-col pt-[5.725rem]">
            <div className="flex flex-col px-[0.75rem]">
              <div className="text-[#2d312b] text-[2rem] font-normal font-['Inter'] self-end">
                Hi, I’m an aspiring software engineer and a content creator<br />
                posting regularly about my daily life and projects. A gentle<br />
                rebellious student who believes content is fire but social<br />
                media is gasoline<br />
              </div>

              <div className="flex mt-[14rem] items-center">
                <div className="text-[#2d312b] text-[15rem] leading-none font-extralight font-['Inter']">
                  Lanre
                </div>
                <div className="text-[#2d312b] text-[1.25rem] font-normal font-['Inter'] mt-[6.5rem] ml-[1rem]">
                  A gentle rebellious studio who<br /> believes content is fire but social<br /> media is gasoline
                </div>
              </div>
            </div>
          </div>

          {/* Page Two */}
          <div className="flex-none w-screen bg-[#fbddb5] bg-opacity-20">
            <div className="relative">
              <img
                className="w-[25rem] h-[37.525rem] left-[2.5rem] top-[8.265rem] mt-[3.25rem] absolute origin-top-left rotate-[-10.03deg] rounded-[0.8125rem]"
                src="/img/image.png"
                alt="Description of image"
              />
              <div className="w-[30.125rem] h-[6.25rem] left-[45rem] ml-[0.5rem] top-[14.6875rem] absolute text-neutral-900 text-[1.1875rem] font-normal font-['Inter']">
                I am a Computer science student at Wilfrid Laurier University and an aspiring software engineer and I’m currently growing and willing to find new environment to learn. (think of more stuff to write)
              </div>
              <div className="w-[10.75rem] h-[1.1875rem] left-[45.375rem] ml-[0.5625rem] mt-[1.1875rem] top-[21.6875rem] absolute text-neutral-900 text-[0.875rem] font-normal font-['Inter']">
                GET IN TOUCH (arrow)
              </div>
            </div>
          </div>

          {/* Page Three */}
          <div className="flex-none w-screen bg-[#fbddb5] bg-opacity-20">
            <div className="relative">
              <div className="w-[9.0625rem] h-[1.375rem] left-[2.5rem] top-[26.5rem] absolute text-black text-sm font-normal font-['Inter']">CONTACT</div>
              <div className="w-[37.75rem] h-[15.0625rem] left-[2.5rem] top-[8.6875rem] absolute text-[#2d312b] text-[6.25rem] font-normal font-['Inter']">LET’S GET <br />SOCIAL!</div>

              <div className="">
                <div className="w-[19rem] h-[0rem] left-[59.625rem] top-[14.875rem] absolute border border-black"></div>
                <div className="w-[19rem] h-[0rem] left-[38.625rem] top-[14.875rem] absolute border border-black"></div>
                <div className="w-[19rem] h-[0rem] left-[59.625rem] top-[19.0625rem] absolute border border-black"></div>
                <div className="w-[19rem] h-[0rem] left-[59.625rem] top-[16.9375rem] absolute border border-black"></div>
                <div className="w-[19rem] h-[1.125rem] left-[59.625rem] top-[13.3125rem] absolute flex justify-between text-black text-[0.9375rem] font-normal font-['Inter'] border-b border-black ">
                  <h1>Instagram</h1>
                  <h1>@Codebylanre</h1>
                </div>
                <div className="w-[19rem] h-[1.125rem] left-[59.625rem] top-[17.625rem] absolute flex justify-between text-black text-[0.9375rem] font-normal font-['Inter'] border-b border-black">
                  <h1>Tiktok</h1>
                  <h1>@Codebylanre</h1>
                </div>
                <div className="w-[19rem] h-[1.125rem] left-[59.625rem] top-[15.4375rem] flex justify-between absolute text-black text-[0.9375rem] font-normal font-['Inter '] border-b border-black">
                  <h1>Youtube</h1>
                  <h1>@Codebylanre</h1>
                </div>
                <div className="w-[19rem] h-[1.125rem] left-[38.625rem] top-[13.3125rem] flex justify-between absolute text-black text-[0.9375rem] font-normal font-['Inter']">
                  <h1>Mail</h1>
                  <h1>Codebylanre@gmail.com</h1>
                </div>
              </div>

              <div className="w-[15.0625rem] h-[3rem] left-[2.5rem] top-[39.6875rem] absolute text-[#2d312b] text-[2.5rem] font-extralight font-['Inter']">Lanre</div>
              <div className="w-[14.9375rem] h-[1.625rem] left-[11.5625rem] top-[40.375rem] absolute text-[#2d312b] text-[0.6875rem] font-normal font-['Inter']">A gentle rebellious studio who believes content is fire but social media is gasoline</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
