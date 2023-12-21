import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import GithubIcon from "./Icons/github-mark-white.png"

export const Hero2 = () => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );
  return (
    <motion.section style={{ opacity: opacity }} ref={targetRef} className="relative mb-[8rem] h-screen py-16 text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-primary)_0%,_var(--color-secondary)_100%)] before:opacity-80">
      <motion.div style={{ scale: scale, position }}
        className="fixed z-10 flex flex-col items-center justify-center w-full"
      >
        <p className="mb-2 text-xl font-light">
          <span className="font-medium">Projects</span> Beta
        </p>
        <p className="text-5xl text-semibold text-white">vsdvdbsdb</p>
        <p className="mb-8 text-center text-xs font-light text-while">
          by{" "}
          <a
            href="https://www.codesandbox.com"
            target="_blank"
            rel="noopener nofollow noreferrer"
          >
            CodeSandbox
          </a>
          
        </p>

        <h1 className="mb-12 text-center font-heading font-semibold font-poppins text-5xl leading-[1]">
          Development
          <br />
          reimagined.
        </h1>

        <a href="https://github.com/Rohan07162003/HeroSections" className="flex items-center text-lg text-primary text-white">
          <img src={GithubIcon} className="mr-2 inline h-5 w-5" />
          Import GitHub project
        </a>
      </motion.div>
    </motion.section>
  );
};