import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
export default function Collaboration() {
  const targetRef = useRef();
  const extendedRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress:scrollusingoverlap } = useScroll({
    target: extendedRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(
    scrollYProgress,
    [0.1, 0.4, 0.75, 1],
    [1, 2.3, 3.2, 1]
  );
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.75, 1],
    ["0vw", "-55vw", "-85vw", "-18vw"]
  );
  const y = useTransform(
    scrollusingoverlap,
    [0.75, 1],
    ["0vh","80vh"]
  );
  const opacity=useTransform(scrollYProgress,[0.75,0.85],[0.85,0]);
  const avatargroupopacity=useTransform(scrollYProgress,
    [0,0.19,0.22],[0,0,1]);
    const avatargroupx=useTransform(scrollYProgress,
    [0,0.19,0.22,0.39,0.42,0.57,0.60],["60px","60px","40px","40px","20px","20px","0px"]);
  const avatar1scale=useTransform(scrollYProgress,
    [0,0.19,0.22,0.78,0.82],[0,0,1,1,0]);
  const avatar2scale=useTransform(scrollYProgress,
    [0,0.39,0.42],[0,0,1]);
  const avatar3scale=useTransform(scrollYProgress,
    [0,0.57,0.60,0.78,0.82],[0,0,1,1,0]);  
  const avatar2opacity=useTransform(scrollusingoverlap,[0,0.19,0.22,0.854,0.855],[0,0,1,1,0]); 
  
  return (
    <section ref={targetRef} className="relative z-10 mt-[-30vh] h-[300vh]">
      <div ref={extendedRef} className="mb-[-120vh] h-[420vh] w-full">
        <div className="sticky top-[10vh]">
          <div className="flex justify-center">
            <motion.div style={{scale:scale,x:x,y:y}} className="origin-top">
              <motion.img style={{opacity}}

                src="/main-screen.svg"
                className="h-auto max-h-none w-[70vw]"
              />
              <motion.div style={{opacity:avatargroupopacity,x:avatargroupx}}
                className="absolute right-[10%] top-[1.5%] flex gap-2"
              >
                <motion.img style={{scale:avatar1scale}}
                  
                  className="h-[1.5vw] w-[1.5vw] rounded-full border border-[#4ca] object-cover"
                  src="https://unsplash.com/photos/_H6wpor9mjs/download?force=true&w=128&h=128"
                />
                <motion.img style={{scale:avatar2scale,opacity:avatar2opacity}}
                  
                  className="h-[1.5vw] w-[1.5vw] rounded-full border border-[#c82] object-cover"
                  src="https://unsplash.com/photos/sibVwORYqs0/download?force=true&w=128&h=128"
                />
                <motion.img style={{scale:avatar3scale}}
                  
                  className="h-[1.5vw] w-[1.5vw] rounded-full border border-[#f0f] object-cover"
                  src="https://unsplash.com/photos/7YVZYZeITc8/download?force=true&w=128&h=128"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};