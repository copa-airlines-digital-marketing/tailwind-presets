const BASE_FONT_FAMILY = {
  gilroy: ['Gilroy', 'Helvetica', 'Arial', 'sans-serif'],
  suisse: ['"Suisse Int\'l"', 'Helvetica', 'Arial', 'sans-serif'],
};

const getOverrides = () => {
  return {};
};

const getExtensions = () => {
  return BASE_FONT_FAMILY;
};

export { getOverrides, getExtensions };
