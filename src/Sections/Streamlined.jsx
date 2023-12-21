
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Streamlined(){
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  

  const finalTextOpacity = useTransform(
    scrollYProgress,
    [0.49, 0.5, 0.65, 0.8, 0.9],
    [0, 0, 1, 1, 0]
  );

  const finalTextScale = useTransform(scrollYProgress, [0.8, 0.9], [1, 0.7]);

  return (
    <motion.section ref={targetRef}
      className="mt-[50vh] flex h-[100vh] items-start justify-start"
    >
      <div className="sticky top-1/2 left-1/2 min-h-[50rem] min-w-[50rem] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
        

        <motion.p
          style={{opacity:finalTextOpacity,scale:finalTextScale}}
          className="absolute left-1/5 top-1/3 text-[6.8rem] pl-28 leading-none text-white font-poppins font-semibold"
        >
          Streamlined
          <br />
          Experience.
        </motion.p>
      </div>
      
    </motion.section>
    
  );
};