import React, { useState, useEffect, useRef } from 'react';

const Timeline = ({ 
  children,
  primaryColor = "#8B5CF6", 
  secondaryColor = "#1F2937",
  lineColor = "#4B5563",
  checkpointSize = 20,
  lineWidth = 4,
  spacing = 120,
  containerClassName = "",
  containerStyle = {}
}) => {
  const [fillPercentage, setFillPercentage] = useState(0);
  const [activeIndices, setActiveIndices] = useState([]);
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);
  const childCount = React.Children.count(children);

  // Initialize refs array
  useEffect(() => {
    itemRefs.current = Array(childCount)
      .fill()
      .map((_, i) => itemRefs.current[i] || React.createRef());
  }, [childCount]);

  // Calculate timeline position and active items
  const calculateTimelinePosition = () => {
    if (!timelineRef.current) return;
  
    const timelineRect = timelineRef.current.getBoundingClientRect();
    const timelineTop = timelineRect.top + window.scrollY;
    const timelineHeight = timelineRect.height;
    const viewportHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const viewportMiddle = scrollY + viewportHeight / 1.7;
  
    let newFillPercentage;
  
    if (viewportMiddle <= timelineTop) {
      newFillPercentage = 0;
    } else if (viewportMiddle >= timelineTop + timelineHeight) {
      newFillPercentage = 100;
    } else {
      const scrolledDistance = viewportMiddle - timelineTop;
      newFillPercentage = (scrolledDistance / timelineHeight) * 100;
    }
  
    setFillPercentage(Math.max(0, Math.min(100, newFillPercentage)));
  
    // Calculate filled pixel height on the timeline line
    const fillPixelHeight = (newFillPercentage / 100) * timelineHeight;
    const fillAbsoluteY = timelineTop + fillPixelHeight;
  
    const newActiveIndices = [];
  
    itemRefs.current.forEach((ref, index) => {
      if (ref.current) {
        const itemRect = ref.current.getBoundingClientRect();
        const itemTop = itemRect.top + window.scrollY;
  
        // Trigger activation as soon as the fill line reaches the item's top
        if (itemTop <= fillAbsoluteY) {
          newActiveIndices.push(index);
        }
      }
    });
  
    setActiveIndices(newActiveIndices);
  };

  // Setup scroll handler with a more robust initialization
  useEffect(() => {
    const handleScroll = () => {
      calculateTimelinePosition();
    };
    
    // Add event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initialize with a delay to ensure all animations are complete
    // and the component is in its final position
    const initialTimer = setTimeout(() => {
      calculateTimelinePosition();
      
      // Additional check to ensure proper initialization
      const secondaryTimer = setTimeout(() => {
        calculateTimelinePosition();
      }, 1000);
      
      return () => clearTimeout(secondaryTimer);
    }, 5500); // Slightly longer than your animation times (4000 + 1000 + buffer)
    
    // Also set up an interval to periodically check and update for 
    // a short while after initialization - this addresses remaining timing issues
    const updateInterval = setInterval(() => {
      calculateTimelinePosition();
    }, 200);
    
    // // Clear the interval after a reasonable amount of time
    // const clearIntervalTimer = setTimeout(() => {
    //   clearInterval(updateInterval);
    // }, 8000); // Clear interval after animations should be complete
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(initialTimer);
      // clearTimeout(clearIntervalTimer);
      clearInterval(updateInterval);
    };
  }, []);

  // Also recalculate on resize
  useEffect(() => {
    const handleResize = () => {
      calculateTimelinePosition();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      ref={timelineRef}
      className={`relative py-12 ${containerClassName}`}
      style={{ 
        background: secondaryColor,
        ...containerStyle
      }}
    >
      {/* Timeline vertical line */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 h-full top-0"
        style={{ width: `${lineWidth}px`, background: lineColor }}
      >
        {/* Animated fill line */}
        <div 
          className="absolute top-0 w-full h-full transition-transform duration-100 ease-out origin-top"
          style={{ 
            background: primaryColor,
            transform: `scaleY(${fillPercentage / 100})`,
          }}
        />
      </div>

      {/* Timeline content */}
      <div className="relative z-10">
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            ref: itemRefs.current[index],
            index: index,
            active: activeIndices.includes(index),
            primaryColor,
            inactiveColor: lineColor,
            checkpointSize,
            spacing,
            "data-index": index
          });
        })}
      </div>
    </div>
  );
};

// Timeline item component remains unchanged
const TimelineItem = React.forwardRef(({ 
  leftContent,
  rightContent,
  active = false,
  primaryColor,
  inactiveColor,
  checkpointSize = 20,
  spacing = 120,
  index,
  ...props
}, ref) => {
  return (
    <div 
      ref={ref}
      className="flex items-start relative mb-8"
      style={{ minHeight: `${spacing}px` }}
      {...props}
    >
      {/* Left content */}
      <div 
        className="w-1/2 pr-8 text-right transition-all duration-300" 
        style={{ opacity: active ? 1 : 0.5 }}
      >
        {leftContent}
      </div>
      
      {/* Checkpoint */}
      <div className="flex items-center justify-center">
        <div
          className="rounded-full transition-all duration-300 flex items-center justify-center z-10"
          style={{ 
            width: `${checkpointSize}px`, 
            height: `${checkpointSize}px`,
            background: active ? primaryColor : inactiveColor,
            transform: active ? 'scale(1.2)' : 'scale(1)'
          }}
        >
          {active && (
            <div className="rounded-full bg-white" style={{ width: '30%', height: '30%' }} />
          )}
        </div>
      </div>
      
      {/* Right content */}
      <div 
        className="w-1/2 pl-8 transition-all duration-300" 
        style={{ opacity: active ? 1 : 0.5 }}
      >
        {rightContent}
      </div>
    </div>
  );
});

export { Timeline, TimelineItem };