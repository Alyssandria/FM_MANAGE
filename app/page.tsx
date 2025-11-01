import { MAIN } from "@/lib/constants";
import HeroIllustration from "./assets/illustration-intro.svg";
import Image from "next/image";
import { NavLink } from "@/components/ui/nav-link";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import patternBg from "./assets/bg-simplify-section-mobile.svg";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <section className="p-6 md:p-12 flex flex-col gap-6 justify-center items-center overflow-hidden md:flex-row-reverse">
        <div>
          <Image src={HeroIllustration} className="z-20 size-full" alt="Hero Illustration" />
        </div>
        <div className="text-center flex flex-col gap-5 justify-center items-center">
          <h1 className="text-primary-foreground text-4xl font-bold">{MAIN.HERO.TAGLINE}</h1>
          <p className="text-gray-400">{MAIN.HERO.SUBTITLE}</p>
          <NavLink href={"/"} variant={"pill"} className="text-sm w-fit">Get Started</NavLink>
        </div>
      </section>
      <section className="p-6 container md:p-12">
        <div className="text-center flex flex-col gap-5 justify-center items-center">
          <h2 className="text-primary-foreground text-3xl font-bold">{MAIN.FEATURES.TAGLINE}</h2>
          <p className="text-gray-400">{MAIN.FEATURES.SUBTITLE}</p>
        </div>
        <div className="text-center flex flex-col gap-10 justify-center items-center">
          {MAIN.FEATURES.CARDS.map(el => (
            <div key={el.STEP} className="flex flex-col gap-4 w-full pl-6">
              <div className="rounded-l-full gap-2 flex items-center bg-neutral-orange-50 pr-6">
                <span className="w-fit text-sm font-bold text-left flex bg-primary text-secondary-foreground px-6 py-2.5 rounded-full">{el.STEP}</span>
                <span className="text-primary-foreground font-bold text-sm md:text-base">{el.TITLE}</span>
              </div>
              <p className="text-gray-400 text-left text-sm md:text-base">{el.CONTENT}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container flex flex-col gap-10 p-6 md:p-12">
        <div className="text-center flex flex-col gap-5 justify-center items-center">
          <h1 className="text-primary-foreground text-3xl font-bold">{MAIN.TESTIMONIALS.TAGLINE}</h1>
        </div>
        <TestimonialCarousel />
        <NavLink href={"/"} variant={"pill"} className="self-center text-sm w-fit">Get Started</NavLink>
      </section>
      <section className="relative bg-primary py-12 flex flex-col justify-center items-center gap-4">
        <Image src={patternBg} className="z-10 absolute left-0 object-contain" alt="Aestethic" />
        <div className="p-6 text-center">
          <h2 className="text-secondary-foreground text-4xl font-bold">{MAIN.MARKETING.TAGLINE}</h2>
        </div>
        <NavLink href={"/"} variant={"pill"} className="self-center text-sm w-fit bg-white text-primary font-bold">Get Started</NavLink>
      </section>
    </div>
  );
}
