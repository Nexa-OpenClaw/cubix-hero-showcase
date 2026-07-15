"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  { tempId: 0, testimonial: "My favorite solution in the market. We work 5x faster with CUBIX.", by: "Alex, CEO at TechCorp", imgSrc: "https://i.pravatar.cc/150?img=1" },
  { tempId: 1, testimonial: "I'm confident my data is safe with CUBIX. I can't say that about other providers.", by: "Dan, CTO at SecureNet", imgSrc: "https://i.pravatar.cc/150?img=2" },
  { tempId: 2, testimonial: "I know it's cliche, but we were lost before we found CUBIX. Can't thank you guys enough!", by: "Stephanie, COO at InnovateCo", imgSrc: "https://i.pravatar.cc/150?img=3" },
  { tempId: 3, testimonial: "CUBIX makes planning for the future seamless. Can't recommend it enough!", by: "Marie, CFO at FuturePlanning", imgSrc: "https://i.pravatar.cc/150?img=4" },
  { tempId: 4, testimonial: "If I could give 11 stars, I'd give 12.", by: "Andre, Head of Design at CreativeSolutions", imgSrc: "https://i.pravatar.cc/150?img=5" },
  { tempId: 5, testimonial: "SO SO SO HAPPY WE FOUND YOU GUYS!!!! I'd bet you've saved me 100 hours so far.", by: "Jeremy, Product Manager at TimeWise", imgSrc: "https://i.pravatar.cc/150?img=6" },
  { tempId: 6, testimonial: "Took some convincing, but now that we're on CUBIX, we're never going back.", by: "Pam, Marketing Director at BrandBuilders", imgSrc: "https://i.pravatar.cc/150?img=7" },
  { tempId: 7, testimonial: "I would be lost without CUBIX's in-depth analytics. The ROI is EASILY 100X for us.", by: "Daniel, Data Scientist at AnalyticsPro", imgSrc: "https://i.pravatar.cc/150?img=8" },
  { tempId: 8, testimonial: "It's just the best. Period.", by: "Fernando, UX Designer at UserFirst", imgSrc: "https://i.pravatar.cc/150?img=9" },
  { tempId: 9, testimonial: "I switched 5 years ago and never looked back.", by: "Andy, DevOps Engineer at CloudMasters", imgSrc: "https://i.pravatar.cc/150?img=10" },
  { tempId: 10, testimonial: "I've been searching for a solution like CUBIX for YEARS. So glad I finally found one!", by: "Pete, Sales Director at RevenueRockets", imgSrc: "https://i.pravatar.cc/150?img=11" },
  { tempId: 11, testimonial: "It's so simple and intuitive, we got the team up to speed in 10 minutes.", by: "Marina, HR Manager at TalentForge", imgSrc: "https://i.pravatar.cc/150?img=12" },
];

interface TestimonialCardProps {
  position: number;
  testimonial: (typeof testimonials)[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-[#2563eb] text-white border-2 border-[#1d4ed8]"
          : "z-0 bg-white text-[#0a0a0a] border-2 border-[#e5e7eb] hover:border-[#93c5fd]"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `translate(-50%, -50%) translateX(${(cardSize / 1.5) * position}px) translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px) rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)`,
        boxShadow: isCenter ? "0px 8px 0px 4px #dbeafe" : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45"
        style={{
          right: -2,
          top: 48,
          width: Math.sqrt(5000),
          height: 2,
          background: isCenter ? "#1d4ed8" : "#e5e7eb",
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-14 w-12 bg-slate-200 object-cover object-top"
        style={{ boxShadow: "3px 3px 0px rgba(0,0,0,0.1)" }}
      />
      <h3
        className={cn("text-base sm:text-xl font-medium", isCenter ? "text-white" : "text-[#0a0a0a]")}
      >
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-blue-100" : "text-neutral-500"
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-[#f8fafc]"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-4">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-[#e5e7eb] hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb]"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-[#e5e7eb] hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb]"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
