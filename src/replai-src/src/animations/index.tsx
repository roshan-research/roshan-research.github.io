export const main_animation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 0.5,
    },
  },
};

export const text_bg_animation = {
  hidden: {
    maxWidth: "0px",
  },
  visible: {
    maxWidth: "300px",
    transition: {
      duration: 2,
      delay: 0.5,
    },
  },
};

export const text_animation = {
  hidden: {
    maxWidth: "0px",
  },
  visible: {
    maxWidth: "300px",
    transition: {
      duration: 2,
      delay: 0.5,
    },
  },
};

export const image_animation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2.5,
      delay: 0.4,
    },
  },
};

export const samples_animation = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const summary_animation = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.4,
    },
  },
};
