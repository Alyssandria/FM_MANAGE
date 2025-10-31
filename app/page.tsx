import { MAIN } from "@/lib/constants";
import HeroIllustration from "./assets/illustration-intro.svg";
import Image from "next/image";
import { NavLink } from "@/components/ui/nav-link";

export default function Home() {
  return (
    <div>
      <div className="container p-6 md:p-12">
        <section className="flex flex-col gap-6 justify-center items-center">
          <div>
            <Image src={HeroIllustration} className="z-20 size-full" alt="Hero Illustration" />
          </div>
          <div className="text-center flex flex-col gap-5 justify-center items-center">
            <h1 className="text-primary-foreground text-4xl font-bold">{MAIN.HERO.TAGLINE}</h1>
            <p className="text-gray-400">{MAIN.HERO.SUBTITLE}</p>
            <NavLink href={"/"} variant={"pill"} className="text-sm w-fit">Get Started</NavLink>
          </div>
        </section>
      </div>
    </div>
  );
}
