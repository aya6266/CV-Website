export const leftAnimate = {
  offscreen: { x: 100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.5, duration: 1 },
  },
};

export const rightAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.5, duration: 1 },
  },
};

export const upAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.5, duration: 1 },
  },
};

export const opAnimation = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: { type: "spring", bounce: 0.5, duration: 1 },
  },
};
