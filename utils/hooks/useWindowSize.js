import { useCallback, useEffect, useState } from "react";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState("large");

  const handleResize = useCallback(() => {
    // Set window width/height to state
    console.log(windowSize)
    if (window.innerWidth <= 768 && windowSize !== "small") {
      console.log(windowSize, window.innerWidth)
      setWindowSize("small");
    }
    else if (window.innerWidth <= 1200 && windowSize !== "medium") {
      console.log(windowSize, window.innerWidth)

      setWindowSize("medium");

    }
    else if (window.innerWidth > 1200 && windowSize !== "large") {
      console.log(windowSize, window.innerWidth)

      setWindowSize("large");
    }
  }, [windowSize])

  useEffect(() => {
    // only execute all the code below in client side
    // if (typeof window !== 'undefined') {
      // Handler to call on window resize

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    // }
  }, []); // Empty array ensures that effect is only run on mount


  return windowSize;
}

export default useWindowSize