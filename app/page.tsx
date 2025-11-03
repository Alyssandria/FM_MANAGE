import { MAIN } from "@/lib/constants";
import HeroIllustration from "./assets/illustration-intro.svg";
import Image from "next/image";
import { NavLink } from "@/components/ui/nav-link";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import simplifyPatternMobile from "./assets/bg-simplify-section-mobile.svg";
import simplifyPatternDesktop from "./assets/bg-simplify-section-desktop.svg";
import heroPattern from "./assets/bg-tablet-pattern.svg";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <section className="container p-6 md:p-12 flex flex-col gap-6 justify-center items-center overflow-hidden lg:flex-row-reverse">
        <div className="size-full">
          <Image src={HeroIllustration} className="max-h-[500px] object-contain z-20 size-full" alt="Hero Illustration" />
        </div>
        <div className="size-full text-center lg:text-left lg:justify-start lg:gap-12 flex flex-col gap-5 justify-center items-center">
          <h1 className="text-primary-foreground text-4xl lg:w-fit lg:text-6xl font-bold">{MAIN.HERO.TAGLINE}</h1>
          <p className="text-gray-400 lg:self-start lg:w-3/5">{MAIN.HERO.SUBTITLE}</p>
          <NavLink href={"/"} variant={"pill"} className="text-sm w-fit lg:self-start">Get Started</NavLink>
        </div>
      </section>
      <section className="relative">
        <Image src={heroPattern} className="
          max-md:max-w-[375px]
          -z-20 
          -right-62 
          -top-82 
          absolute 
          object-contain 
          md:top-auto 
          md:right-auto 
          md:-bottom-130
          md:-left-125"
          alt="Aestethic"
        />
        <div className="container flex flex-col gap-14 md:p-12 md:flex-row">
          <div className="p-6 text-center flex flex-col gap-5 md:gap-8 justify-center items-center md:justify-start md:text-left md:p-0">
            <h2 className="text-primary-foreground text-3xl font-bold md:text-4xl">{MAIN.FEATURES.TAGLINE}</h2>
            <p className="text-gray-400 lg:w-4/5 md:self-start">{MAIN.FEATURES.SUBTITLE}</p>
          </div>
          <div className="text-center flex flex-col gap-10 justify-center items-center">
            {MAIN.FEATURES.CARDS.map(el => (
              <div key={el.STEP} className="grid grid-cols-[fit-content(100%)_1fr] md:gap-4 max-md:place-items-center w-full gap-y-6 pl-6">
                <div className="max-md:bg-neutral-orange-50 max-md:rounded-l-full">
                  <span className="w-fit text-sm font-bold text-left flex bg-primary text-secondary-foreground px-6 py-2.5 rounded-full">{el.STEP}</span>
                </div>
                <div className="grid max-md:place-items-center md:items-center text-primary-foreground size-full max-md:bg-neutral-orange-50">
                  <span className="text-left font-bold text-sm md:text-base">{el.TITLE}</span>
                </div>
                <p className="pr-6 md:pr-0 text-gray-400 text-left text-sm col-span-full md:col-start-2 md:text-base">{el.CONTENT}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container flex flex-col gap-10 p-6 md:p-12">
        <div className="text-center flex flex-col gap-5 justify-center items-center">
          <h1 className="text-primary-foreground text-3xl font-bold">{MAIN.TESTIMONIALS.TAGLINE}</h1>
        </div>
        <TestimonialCarousel />
        <NavLink href={"/"} variant={"pill"} className="self-center text-sm w-fit">Get Started</NavLink>
      </section>
      <section className="relative bg-primary">
        <Image src={simplifyPatternMobile} className="md:hidden z-10 absolute left-0 object-contain" alt="Aestethic" />
        <Image src={simplifyPatternDesktop} className="z-10 size-full absolute top-0 left-0 object-contain" alt="Aestethic" />
        <div className="container p-6 md:p-12 flex flex-col justify-center items-center gap-4 md:flex-row md:justify-between">
          <div className="p-6 text-center md:w-1/2 md:text-left">
            <h2 className="text-secondary-foreground text-4xl font-bold">{MAIN.MARKETING.TAGLINE}</h2>
          </div>
          <NavLink href={"/"} variant={"pill"} className="self-center text-sm w-fit bg-white text-primary font-bold">Get Started</NavLink>
        </div>
      </section>
    </div>
  );
}
