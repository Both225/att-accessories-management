import { useState, useEffect } from "react";

function useIsSmallScreen(threshold = 1000) {
  const [isSmall, setIsSmall] = useState(
    typeof window !== "undefined" ? window.innerWidth < threshold : false,
  );

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth < threshold);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [threshold]);

  return isSmall;
}

export { useIsSmallScreen };
