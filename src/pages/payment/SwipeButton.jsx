import React, { useState, useRef, useEffect } from "react";

const SwipeButton = ({ onSwipeSuccess }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const trackRef = useRef(null);
  const handleRef = useRef(null);

  useEffect(() => {
    if (isAnimating) {
      const handle = handleRef.current;
      const track = trackRef.current;
      const handleWidth = handle.offsetWidth;
      const trackWidth = track.offsetWidth;
      const maxDrag = trackWidth - handleWidth;

      // Animate the handle to the right
      handle.style.transform = `translateX(${maxDrag}px)`;
      handle.style.opacity = "0";

      // Set the handle to disappear after reaching the end
      setTimeout(() => {
        setIsCompleted(true);
        onSwipeSuccess();
      }, 1500); // Duration should match the CSS transition
    }
  }, [isAnimating, onSwipeSuccess]);

  const handleClick = () => {
    setIsAnimating(true);
  };

  // Text based on the state
  let text = isCompleted
    ? "Processing..."
    : isAnimating
    ? "Paying..."
    : "Swipe to Pay";
  //   return (
  //     <button onClick={() => console.log("Button clicked")}>Click Me</button>
  //   );
  return (
    <div
      className="w-full p-2 bg-gray-200 rounded-full flex items-center relative"
      ref={trackRef}
      onClick={handleClick}
    >
      <div
        className={`h-10 w-10 bg-[#4D9C7D] rounded-full cursor-pointer transition-all duration-1000 ease-out ${
          isCompleted ? "opacity-0" : ""
        }`}
        onClick={handleClick}
        ref={handleRef}
      />
      <p
        className="absolute left-0 right-0 text-center transition-opacity duration-1000 ease-out"
        style={{ opacity: isAnimating || isCompleted ? 0 : 1 }}
      >
        {text}
      </p>
      {isCompleted && (
        <p
          className="absolute left-0 right-0 text-center animate-pulse"
          style={{ opacity: 1 }}
        >
          {text}
        </p>
      )}
    </div>
  );
};

export default SwipeButton;
