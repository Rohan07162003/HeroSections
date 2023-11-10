import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import GithubIcon from "./Icons/github-mark-white.png"

export const Hero = () => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );
  return (
    <motion.section style={{ opacity: opacity }} ref={targetRef} className="relative mb-[8rem] h-screen py-16 text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-secondary)_0%,_var(--color-primary)_100%)] before:opacity-90">
      <motion.div style={{ scale: scale, position }}
        className="fixed z-10 flex flex-col items-center justify-center w-full"
      >
        <p className="mb-2 text-xl font-light">
          <span className="font-medium">Projects</span> Beta
        </p>
        <p className="mb-8 text-center text-xs font-light text-text">
          by{" "}
          <a
            href="https://www.codesandbox.com"
            target="_blank"
            rel="noopener nofollow noreferrer"
          >
            CodeSandbox
          </a>
          
        </p>

        <h1 className="mb-12 text-center font-heading text-3xl leading-[1]">
          Development
          <br />
          reimagined.
        </h1>

        <a href="#" className="flex items-center text-lg text-primary">
          <img src={GithubIcon} className="mr-2 inline h-5 w-5" />
          Import GitHub project
        </a>
      </motion.div>
    </motion.section>
  );
};