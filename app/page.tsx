import { MAIN } from "@/lib/constants";
import HeroIllustration from "./assets/illustration-intro.svg";
import Image from "next/image";
import { NavLink } from "@/components/ui/nav-link";

export default function Home() {
  return (
    <div className="container flex flex-col gap-8 md:p-12">
      <section className="p-6 flex flex-col gap-6 justify-center items-center">
        <div>
          <Image src={HeroIllustration} className="z-20 size-full" alt="Hero Illustration" />
        </div>
        <div className="text-center flex flex-col gap-5 justify-center items-center">
          <h1 className="text-primary-foreground text-4xl font-bold">{MAIN.HERO.TAGLINE}</h1>
          <p className="text-gray-400">{MAIN.HERO.SUBTITLE}</p>
          <NavLink href={"/"} variant={"pill"} className="text-sm w-fit">Get Started</NavLink>
        </div>
      </section>
      <section>
        <div className="p-6 text-center flex flex-col gap-5 justify-center items-center">
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
    </div>
  );
}
