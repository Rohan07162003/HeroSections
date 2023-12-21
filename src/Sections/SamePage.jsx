import { useScroll, useTransform, motion } from "framer-motion";
import { BranchIcon } from "../Icons/branch";
import { useRef } from "react";
const animationOrder = {
    initial: 0.03,
    fadeInEnd: 0.15,
    showParagraphOne: 0.25,
    hideParagraphOne: 0.3,
    showParagraphTwoStart: 0.35,
    showParagraphTwoEnd: 0.4,
    hideParagraphTwo: 0.5,
    showLoadingScreenStart: 0.53,
    showLoadingScreenEnd: 0.58,
    createBranchStart: 0.65,
    createBranchEnd: 0.69,
    createBranchFadeInStart: 0.7,
    createBranchFadeInEnd: 0.74,
    endTextFadeInStart: 0.85,
    endTextFadeInEnd: 0.89,
};
export default function SamePage() {
    const targetRef = useRef();
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });
    const opacity = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.fadeInEnd,
            0.73,
            0.87,
        ],
        [0, 1, 1, 0]
    );
    const scale = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.fadeInEnd,
            animationOrder.showLoadingScreenEnd,
            animationOrder.createBranchStart,
        ],
        [3, 1, 1, 0.5]
    );
    const x = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.showParagraphOne,
            animationOrder.hideParagraphOne,
            animationOrder.showParagraphTwoStart,
            animationOrder.showParagraphTwoEnd,
            animationOrder.hideParagraphTwo,
            animationOrder.showLoadingScreenStart,
            animationOrder.showLoadingScreenEnd,
            animationOrder.createBranchEnd,
        ],
        ["50%", "50%", "55%", "-50%", "-50%", "-55%", "0%", "0%", "-27%"]
    );
    const loadingScreenOpacity = useTransform(
        scrollYProgress,
        [
            animationOrder.showLoadingScreenStart,
            animationOrder.showLoadingScreenEnd,
        ],
        [0, 1]
    );
    const loadingScreenX = useTransform(
        scrollYProgress,
        [animationOrder.createBranchStart, animationOrder.createBranchEnd],
        ["0%", "27%"]
    );
    const loadingScreenscale = useTransform(
        scrollYProgress,
        [animationOrder.createBranchStart, animationOrder.createBranchEnd],
        [1, 0.5]
    );
    const newBranchOpacity = useTransform(
        scrollYProgress,
        [
            animationOrder.createBranchFadeInStart,
            animationOrder.createBranchFadeInEnd,
        ],
        [0, 1]
    );
    const paragraph1Opacity = useTransform(
        scrollYProgress,
        [
            animationOrder.fadeInEnd + 0.02,
            animationOrder.showParagraphOne,
            animationOrder.hideParagraphOne,
        ],
        [0, 1, 0]
    );
    const paragraph1TranslateY = useTransform(
        scrollYProgress,
        [
            animationOrder.fadeInEnd + 0.02,
            animationOrder.showParagraphOne,
            animationOrder.hideParagraphOne,
        ],
        ["4rem", "0rem", "-4rem"]
    );

    const paragraph2Opacity = useTransform(
        scrollYProgress,
        [
            animationOrder.showParagraphTwoStart,
            animationOrder.showParagraphTwoEnd,
            animationOrder.hideParagraphTwo,
        ],
        [0, 1, 0]
    );
    const paragraph2TranslateY = useTransform(
        scrollYProgress,
        [
            animationOrder.showParagraphTwoStart,
            animationOrder.showParagraphTwoEnd,
            animationOrder.hideParagraphTwo,
        ],
        ["4rem", "0rem", "-4rem"]
    );
    const position = useTransform(scrollYProgress, (pos) =>
        pos >= 1 ? "relative" : "fixed"
    );
    const endTextOpacity = useTransform(
        scrollYProgress,
        [animationOrder.endTextFadeInStart, animationOrder.endTextFadeInEnd],
        [0, 1]
    );

    const endTexty = useTransform(
        scrollYProgress,
        [animationOrder.endTextFadeInStart, animationOrder.endTextFadeInEnd],
        ["4rem", "0rem"]
    );
    const avataropacity=useTransform(
        scrollYProgress,
        [
            animationOrder.fadeInEnd+0.0099,
            animationOrder.fadeInEnd+0.010,
            
        ],
        [0, 1]
    );
    return (
        <section ref={targetRef}>
            <div className="relative h-[800vh]">
                <div className="sticky top-1/2 flex origin-center -translate-y-1/2 justify-center">
                    <motion.div style={{ scale: scale, opacity: opacity, x }}
                        className="translate-x-centered-offset flex w-[50vw] -translate-y-1/2 scale-[var(--scale)] flex-col items-center justify-center "

                    >
                        <img src="/main-screen.svg" className="h-auto w-full" />
                        <motion.img style={{opacity:avataropacity}}
                            
                            className="absolute left-[13%] top-[7.1vh] h-[1.5vw] w-[1.5vw] translate-y-1/2 rounded-full border border-[#c82] object-cover will-change-transform"
                            src="https://unsplash.com/photos/sibVwORYqs0/download?force=true&w=128&h=128"
                        />
                        <motion.span style={{ opacity: newBranchOpacity }}
                            className="mt-3 block text-2xl text-white"

                        >
                            <BranchIcon className="mr-3 inline-block h-12 w-12" /> Feature
                            branch
                        </motion.span>
                    </motion.div>
                    <motion.div style={{ opacity: loadingScreenOpacity, scale: loadingScreenscale, x: loadingScreenX }}
                        className="translate-x-centered-offset absolute left-1/4 top-1/5 flex w-[50vw] -translate-y-1/2 scale-[var(--scale)] flex-col items-center justify-center"

                    >
                        <img src="/loading-screen.svg" className="h-auto w-full" />
                        <motion.div style={{ opacity: newBranchOpacity }}

                            className="absolute inset-0"
                        >
                            <img src="/main-screen.svg" className="h-auto w-full" />
                        </motion.div>
                        <motion.span style={{ opacity: newBranchOpacity }}
                            className="mt-3 block text-2xl text-white"

                        >
                            <BranchIcon className="mr-3 inline-block h-12 w-12" /> Rohan's
                             branch
                        </motion.span>
                    </motion.div>

                    <motion.p style={{opacity:endTextOpacity,y:endTexty}} className="translate-y-centered-offset absolute top-1/4 left-32 w-[450px] px-16 text-3xl font-semibold font-poppins text-white"

                    >
                        <span className="text-lime-300">Built for flow</span>
                        <br />
                        Spin up a new branch for any sized project in seconds.
                    </motion.p>
                </div>
                <motion.p style={{ opacity: paragraph1Opacity, y: paragraph1TranslateY, position }} className="translate-y-centered-offset top-1/3 left-24 w-[400px] px-16 text-5xl font-semibold font-poppins text-white">
                    Not only share code,
                    <br />
                    <span className="text-lime-300">share the context.</span>
                </motion.p>
                <motion.p style={{ opacity: paragraph2Opacity, y: paragraph2TranslateY, position }} className="translate-y-centered-offset top-1/3 right-24 w-[400px] px-16 text-3xl leading-tight font-semibold font-poppins text-white"
                >
                    Sometimes it's not about code.
                    <br />
                    <span className="text-lime-300">
                        Get everybody on the same page. Literally.
                    </span>
                </motion.p>
            </div>
        </section>
    );
}