import Hero from "@/components/Home/Hero";
import Latest from "@/components/Home/Latest";
import MotionButton from "@/components/motion/MotionButton";
import {
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoGmail,
} from "react-icons/bi";
import { Metadata } from "next";
import * as Main from "@/style/main";

export default async function Home() {
  return (
    <div>
      <Hero></Hero>
      <div className="h-20"></div>
      <Latest
        type="projects"
        CTA={adventureCTA}
        titleID="latestProject"
        hrefMore={"/Projects"}
      ></Latest>
      <div className="h-20"></div>
      <Latest
        type="adventure"
        CTA={contactCTA}
        titleID="latestAdventure"
        hrefMore={"/Adventures"}
      ></Latest>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Home",
};

const adventureCTA = (
  <MotionButton
    clickable
    className="flex justify-center"
    href="#latestAdventure"
  >
    See what I have been up to
  </MotionButton>
);

const contactCTA = (
  <div className={Main.p + "mx-auto align-text-bottom"}>
    Lets develop the future together
    <div className="flex justify-center gap-4 text-3xl pt-2">
      <MotionButton clickable href="https://www.linkedin.com/in/sibulus0/">
        <BiLogoLinkedin></BiLogoLinkedin>
      </MotionButton>
      <MotionButton clickable href="https://github.com/sibulus13">
        <BiLogoGithub></BiLogoGithub>
      </MotionButton>
      <MotionButton clickable href="mailto:chengjie.michael.huang@gmail.com">
        <BiLogoGmail></BiLogoGmail>
      </MotionButton>
    </div>
  </div>
);
