import React, { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

// Utility function for class name merging
const cn = (...classes) => classes.filter(Boolean).join(" ");

const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  startDelay = 1000, // Delay in ms before starting the animation
}) => {
  const [scope, animate] = useAnimate();
  const [isReady, setIsReady] = useState(false);
  let wordsArray = words.split(" ");
  
  useEffect(() => {
    // First wait for the startDelay
    const timer = setTimeout(() => {
      setIsReady(true);
    }, startDelay);
    
    return () => clearTimeout(timer);
  }, [startDelay]);
  
  useEffect(() => {
    // Only start the animation after the component is ready
    if (isReady && scope.current) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.2),
        }
      );
    }
  }, [isReady, scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-white opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className="text-2xl font-bold">
      <div className={cn("mt-4", className)}>
        <div className={"dark:text-white text-black leading-snug tracking-wide"}>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

export default TextGenerateEffect;