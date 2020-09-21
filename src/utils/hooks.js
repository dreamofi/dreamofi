import { useEffect, useState } from "react";

export const useScrollPassYOffset = (yOffset) => {
  const [isPass, setIsPass] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isPass]);

  const handleScroll = () => {
    if (window.pageYOffset > yOffset) {
      setIsPass(true);
    } else {
      setIsPass(false);
    }
  };

  return isPass;
};

export const useShowVisibleWhenPassYOffset = (yOffset) => {
  const [isVisible, setVisible] = useState("invisible");
  const checkYOffset = useScrollPassYOffset(yOffset);

  useEffect(() => {
    handleScroll();
  }, [checkYOffset]);

  const handleScroll = () => {
    if (checkYOffset === true) {
      setVisible("visible");
    } else {
      setVisible("invisible");
    }
  };

  return isVisible;
}
