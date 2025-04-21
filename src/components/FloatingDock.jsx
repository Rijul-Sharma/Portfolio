/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

// import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState, useEffect, cloneElement } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
  desktopIconClassName = "",
  desktopLabelClassName = "",
  mobileIconClassName = "",
  mobileLabelClassName = "",
  mobileToggleButtonClassName = "",
}) => {
  return (
    <>
      <FloatingDockDesktop
        items={items}
        className={desktopClassName}
        iconClassName={desktopIconClassName}
        labelClassName={desktopLabelClassName}
      />
      <FloatingDockMobile
        items={items}
        className={mobileClassName}
        iconClassName={mobileIconClassName}
        labelClassName={mobileLabelClassName}
        toggleButtonClassName={mobileToggleButtonClassName}
      />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
  iconClassName,
  labelClassName,
  toggleButtonClassName,
}) => {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`relative block md:hidden ${className || ""}`}
      style={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        transform: `translateY(${scrollY}px)`,
      }}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col items-end gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.label || item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: { delay: idx * 0.05 },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`text-sm text-neutral-700 dark:text-neutral-200 px-2 ${labelClassName}`}
                  >
                    {item.label || item.title}
                  </span>
                  <a
                    href={item.href || "#"}
                    onClick={(e) => {
                      if (item.onClick) {
                        e.preventDefault();
                        item.onClick();
                      }
                    }}
                    target={item.href ? "_blank" : undefined}
                    rel={item.href ? "noopener noreferrer" : undefined}
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 shadow-md dark:bg-neutral-900 ${iconClassName}`}
                  >

                    <div className="h-5 w-5">{item.icon}</div>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className={`flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800 ${toggleButtonClassName}`}
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-neutral-500 dark:text-neutral-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-neutral-500 dark:text-neutral-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({ items, className, iconClassName, labelClassName }) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-gray-50 px-4 pb-3 md:flex dark:bg-neutral-900 ${
        className || ""
      }`}
    >
      {items.map((item) => (
        <IconContainer
          key={item.label || item.title}
          mouseX={mouseX}
          title={item.label || item.title}
          icon={item.icon}
          href={item.href}
          onClick={item.onClick}
          iconClassName={iconClassName}
          labelClassName={labelClassName}
        />
      ))}
    </motion.div>
  );
};

const IconContainer = ({
  mouseX,
  title,
  icon,
  href,
  onClick,
  iconClassName,
  labelClassName,
}) => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const iconScaleTransform = useTransform(distance, [-150, 0, 150], [1, 1.8, 1]);

  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const iconScale = useSpring(iconScaleTransform, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <a
      href={href || "#"}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
    >
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800 ${iconClassName}`}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className={`absolute -top-8 left-1/2 w-fit whitespace-pre rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white ${labelClassName}`}
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ scale: iconScale }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
};
