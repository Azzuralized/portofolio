"use client"
import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";

export default function Home() {
  const [bgColor, setBgColor] = useState("bg-[#a7a999]");
  const pageTwoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('Page Two Intersection Status:', entry.isIntersecting);
        if (entry.isIntersecting) {
          setBgColor("bg-[#FEF8F0]");
        } else {
          setBgColor("bg-[#a7a999]");
        }
      },
      { threshold: 0.1 }
    );

    if (pageTwoRef.current) {
      observer.observe(pageTwoRef.current);
    }

    return () => {
      if (pageTwoRef.current) {
        observer.unobserve(pageTwoRef.current);
      }
    };
  }, []);

  return (
    <>
      <Header bgColor={bgColor} />

      <div className="bg-[#a7a999] flex flex-col pt-[5.725rem]">
        {/* Page One */}
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

      <div ref={pageTwoRef} className="w-full min-h-screen relative bg-[#fbddb5] bg-opacity-20">
        <div className="">
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
    </>
  );
}
