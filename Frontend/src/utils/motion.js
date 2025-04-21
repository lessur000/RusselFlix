export const sidebarNav = (direction) => ({
    hidden: {
      x: direction === "left" ? -50 : direction === "right" ? 100 : 0,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
    },
  });

  export const slideInLeft = {
    hidden: {
      x: -100,
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  