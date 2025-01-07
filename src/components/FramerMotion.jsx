

export const mobileMenu = {
  hidden: { opacity: 0, x: "100%" },
  visible: { opacity: 1, x: "0%", transition: { duration: 0.3 } },
  exit: { opacity: 0, x: "100%", transition: { duration: 0.3 } },
};

export const mobileMenuLink = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
  exit: { opacity: 0, y: -10 },
};
