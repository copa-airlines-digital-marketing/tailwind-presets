const BASE_FONT_FAMILY = {
  heading: ["Gilroy", "Helvetica", "Arial", "sans-serif"],
  sans: ['"Suisse Int\'l"', "Helvetica", "Arial", "sans-serif"],
};

const getOverrides = () => {
  return BASE_FONT_FAMILY;
};

const getExtensions = () => {
  return {};
};

module.exports = {
  getOverrides: getOverrides,
  getExtensions: getExtensions,
};
