import { useMediaQuery } from "react-responsive";

export const useMaskSettings = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  if (isMobile) {
    return {
      initialMaskPos: "48.9% -1300vh",
      initialMaskSize: "3100% 3100%",
      maskPos: "50% 7vh",
      maskSize: "50% 50%",
    };
  }

  if (isTablet) {
    return {
      initialMaskPos: "50% -1700vh",
      initialMaskSize: "3500% 3500%",
      maskPos: "50% 17vh",
      maskSize: "30% 30%",
    };
  }

  return {
    initialMaskPos: "50% 35%",
    initialMaskSize: "15000% 15000%",
    maskPos: "50% 20%",
    maskSize: "50% 27%",
  };
};