const p = {
  primary: {
    DEFAULT: "hsl(var(--color-primary) / <alpha-value>)",
    ultralight: "hsl(var(--color-primary-ultralight) / <alpha-value>)",
    light: "hsl(var(--color-primary-light) / <alpha-value>)",
    dark: "hsl(var(--color-primary-dark) / <alpha-value>)",
    ultradark: "hsl(var(--color-primary-ultradark) / <alpha-value>)",
    faded: "hsl(var(--color-primary-faded) / <alpha-value>)"
  },
  secondary: {
    DEFAULT: "hsl(var(--color-secondary) / <alpha-value>)",
    faded: "hsl(var(--color-secondary-faded) / <alpha-value>)"
  },
  tertiary: "hsl(var(--color-tertiary) / <alpha-value>)",
  backgound: {
    lightblue: "hsl(var(--color-background-lightblue) / <alpha-value>)",
    paper: "hsl(var(--color-background-paper) / <alpha-value>)"
  },
  alternative: {
    pardo: "hsl(var(--color-alternative-pardo) / <alpha-value>)",
    gold: "hsl(var(--color-alternative-gold) / <alpha-value>)",
    darkorange: "hsl(var(--color-alternative-darkorange) / <alpha-value>)",
    lightorange: "hsl(var(--color-alternative-lightorange) / <alpha-value>)",
    prefermemberblue: "hsl(var(--color-alternative-prefermemberBlue) / <alpha-value>)"
  },
  system: {
    warning: {
      DEFAULT: "hsl(var(--color-system-warning) / <alpha-value>)",
      faded: "hsl(var(--color-system-warning-faded) / <alpha-value>)"
    },
    error: {
      DEFAULT: "hsl(var(--color-system-error) / <alpha-value>)",
      faded: "hsl(var(--color-system-error-faded) / <alpha-value>)"
    },
    success: {
      DEFAULT: "hsl(var(--color-system-success) / <alpha-value>)",
      faded: "hsl(var(--color-system-success-faded) / <alpha-value>)"
    }
  },
  status: {
    member: "hsl(var(--color-status-member) / <alpha-value>)",
    silver: "hsl(var(--color-status-silver) / <alpha-value>)",
    gold: "hsl(var(--color-status-gold) / <alpha-value>)",
    platinum: "hsl(var(--color-status-platinum) / <alpha-value>)",
    presidential: "hsl(var(--color-status-presidential) / <alpha-value>)"
  },
  grey: {
    800: "hsl(var(--color-grey-800) / <alpha-value>)",
    700: "hsl(var(--color-grey-700) / <alpha-value>)",
    600: "hsl(var(--color-grey-600) / <alpha-value>)",
    500: "hsl(var(--color-grey-500) / <alpha-value>)",
    400: "hsl(var(--color-grey-400) / <alpha-value>)",
    300: "hsl(var(--color-grey-300) / <alpha-value>)",
    200: "hsl(var(--color-grey-200) / <alpha-value>)",
    100: "hsl(var(--color-grey-100) / <alpha-value>)",
    75: "hsl(var(--color-grey-75) / <alpha-value>)",
    50: "hsl(var(--color-grey-50) / <alpha-value>)"
  },
  common: {
    black: "hsl(var(--color-common-black) / <alpha-value>)",
    white: "hsl(var(--color-common-white) / <alpha-value>)"
  }
}, s = () => p, n = {
  blank: ""
}, m = () => ({
  ...n
}), i = {
  gilroy: ["Gilroy", "Helvetica", "Arial", "sans-serif"],
  suisse: [`"Suisse Int'l"`, "Helvetica", "Arial", "sans-serif"]
}, v = () => i, e = (...r) => [
  r[0],
  {
    letterSpacing: r[2],
    lineHeight: r[1]
  }
], u = {
  u6: e(
    "var(--font-size-u6)",
    "var(--line-height-u6)",
    "var(--letter-spacing-u6)"
  ),
  u5: e(
    "var(--font-size-u5)",
    "var(--line-height-u5)",
    "var(--letter-spacing-u5)"
  ),
  u4: e(
    "var(--font-size-u4)",
    "var(--line-height-u4)",
    "var(--letter-spacing-u4)"
  ),
  u3: e(
    "var(--font-size-u3)",
    "var(--line-height-u3)",
    "var(--letter-spacing-u3)"
  ),
  u2: e(
    "var(--font-size-u2)",
    "var(--line-height-u2)",
    "var(--letter-spacing-u2)"
  ),
  u1: e(
    "var(--font-size-u1)",
    "var(--line-height-u1)",
    "var(--letter-spacing-u1)"
  ),
  b: e("var(--font-size-b)", "var(--line-height-b)", "var(--letter-spacing-b)"),
  d1: e(
    "var(--font-size-d1)",
    "var(--line-height-d1)",
    "var(--letter-spacing-d1)"
  ),
  d2: e(
    "var(--font-size-d2)",
    "var(--line-height-d2)",
    "var(--letter-spacing-d2)"
  ),
  d3: e(
    "var(--font-size-d3)",
    "var(--line-height-d3)",
    "var(--letter-spacing-d3)"
  )
}, g = () => u, h = {
  xs: {
    max: "599px"
  },
  sm: "600px",
  "sm-only": {
    min: "600px",
    max: "959px"
  },
  md: "960px",
  "md-only": {
    min: "960px",
    max: "1366px"
  },
  "cm-laptop": {
    min: "1280px",
    max: "1367px"
  },
  lg: "1367px"
}, d = () => h, x = {
  minimal: "var(--spacing-minimal)",
  tiny: "var(--spacing-tiny)",
  petit: "var(--spacing-petit)",
  normal: "var(--spacing-normal)",
  roomy: "var(--spacing-roomy)",
  spacious: "var(--spacing-spacious)",
  big: "var(--spacing-big)",
  huge: "var(--spacing-huge)",
  "grid-gutter": "var(--grid-gutter)"
}, y = () => x, w = () => ({
  screens: d()
}), f = () => ({
  content: m(),
  colors: s(),
  fontFamily: v(),
  fontSize: g(),
  spacing: y()
}), b = () => ({
  ...w(),
  extend: {
    ...f()
  }
});
function t(r, a) {
  return { handler: r, config: a };
}
t.withOptions = function(r, a = () => ({})) {
  function l(o) {
    return { handler: r(o), config: a(o) };
  }
  return l.__isOptionsFunction = !0, l;
};
var c = t;
const z = () => c(function({ addComponents: r }) {
  r({
    ".container": {
      maxWidth: "calc(100% - 2rem)",
      "@screen sm": {
        maxWidth: "560px"
      },
      "@screen md": {
        maxWidth: "calc(100% - 144px)"
      },
      "@screen lg": {
        maxWidth: "1224px"
      }
    },
    ".container-grid": {
      display: "grid",
      gridTemplateColumns: "16px 1fr 16px",
      "@screen sm": {
        gridTemplateColumns: "1fr 560px 1fr"
      },
      "@screen md": {
        gridTemplateColumns: "72px 1fr 72px"
      },
      "@screen lg": {
        gridTemplateColumns: "1fr 1224px 1fr"
      }
    }
  });
}), E = () => [z()], k = {
  "--color-primary": "221 100% 31%",
  "--color-primary-light": "218 100% 53%",
  "--color-primary-dark": "221 100% 25%",
  "--color-primary-ultralight": "221 100% 92%",
  "--color-primary-ultradark": "225 100% 20%",
  "--color-primary-faded": "218 100% 81%",
  "--color-secondary": "196 100% 44%",
  "--color-secondary-faded": "196 78% 72%",
  "--color-tertiary": "26 34% 72%",
  "--color-background-lightblue": "218 100% 97%",
  "--color-background-paper": "0 0% 99%",
  "--color-alternative-pardo": "35 28% 41%",
  "--color-alternative-gold": "25 34% 51%",
  "--color-alternative-darkorange": "18 53% 45%",
  "--color-alternative-lightorange": "42 66 66%",
  "--color-alternative-prefermemberBlue": "212 81% 14%",
  "--color-system-warning": "44 100% 59%",
  "--color-system-warning-faded": "44 100% 92%",
  "--color-system-error": "360 70% 49%",
  "--color-system-error-faded": "0 100% 97%",
  "--color-system-success": "147 83% 27%",
  "--color-system-success-faded": "146 31% 85%",
  "--color-grey-800": "0 0% 7%",
  "--color-grey-700": "0 0% 40%",
  "--color-grey-600": "0 0% 40%",
  "--color-grey-500": "0 0% 60%",
  "--color-grey-400": "240 1% 67%",
  "--color-grey-300": "40 4% 85%",
  "--color-grey-200": "40 4% 85%",
  "--color-grey-100": "60 3% 94%",
  "--color-grey-75": "60 8% 97%",
  "--color-grey-50": "60 8% 97%",
  "--color-common-black": "0 0% 0%",
  "--color-common-white": "0 0% 100%",
  "--color-status-member": "221 100% 31%",
  "--color-status-silver": "219 88% 20%",
  "--color-status-gold": "36 32% 42%",
  "--color-status-platinum": "0 0% 40%",
  "--color-status-presidential": "0 0% 7%"
}, S = {
  "--font-size-u6": "clamp(2.25rem, (100vw - 599px) * 99, clamp(3.5rem, (100vw - 959px) * 99, clamp(4.125rem, (100vw - 1367px) * 99, 4.75rem)))",
  // 36, 56, 66, 76px
  "--font-size-u5": "clamp(2rem, (100vw - 599px) * 99, clamp(2.75rem, (100vw - 959px) * 99, clamp(3.25rem, (100vw - 1367px) * 99, 3.75rem)))",
  // 32, 44, 52, 60px
  "--font-size-u4": "clamp(1.875rem, (100vw - 599px) * 99, clamp(2.25rem, (100vw - 959px) * 99, clamp(2.5rem, (100vw - 1367px) * 99, 3rem)))",
  // 30, 36, 40, 48px
  "--font-size-u3": "clamp(1.5rem, (100vw - 599px) * 99, clamp(1.875rem, (100vw - 959px) * 99, clamp(2.25rem, (100vw - 1367px) * 99, 2.5rem)))",
  // 24, 30, 36, 40px
  "--font-size-u2": "clamp(1.25rem, (100vw - 599px) * 99, clamp(1.5rem, (100vw - 959px) * 99, clamp(1.75rem, (100vw - 1367px) * 99, 2rem)))",
  // 20, 24, 28, 32px
  "--font-size-u1": "clamp(1.125rem, (100vw - 1367px) * 99, 1.25rem)",
  // 18, 20px
  "--font-size-b": "1rem",
  //16px
  "--font-size-d1": "0.875rem",
  //14px
  "--font-size-d2": "0.75rem",
  //12px
  "--font-size-d3": "0.75rem"
  //12px
}, A = {
  "--letter-spacing-u6": "clamp(-0.08875rem, (100vw - 599px) * 99, clamp(-0.138125rem, (100vw - 959px) * 99, clamp(-0.163125rem, (100vw - 1367px) * 99, -0.1875rem)))",
  "--letter-spacing-u5": "clamp(-0.083125rem, (100vw - 599px) * 99, clamp(-0.114375rem, (100vw - 959px) * 99, clamp(-0.135625rem, (100vw - 1367px) * 99, -0.15625rem)))",
  "--letter-spacing-u4": "clamp(-0.078125rem, (100vw - 599px) * 99, clamp(-0.09375rem, (100vw - 959px) * 99, clamp(-0.078125rem, (100vw - 1367px) * 99, -0.09375rem)))",
  "--letter-spacing-u3": "clamp(-0.046875rem, (100vw - 599px) * 99, clamp(-0.05875rem, (100vw - 959px) * 99, clamp(-0.09375rem, (100vw - 1367px) * 99, -0.078125rem)))",
  "--letter-spacing-u2": "clamp(-0.063rem, (100vw - 599px) * 99, clamp(-0.046875rem, (100vw - 959px) * 99, clamp(-0.055rem, (100vw - 1367px) * 99, -0.0625rem)))",
  "--letter-spacing-u1": "0rem",
  "--letter-spacing-b": "0rem",
  "--letter-spacing-d1": "0rem",
  "--letter-spacing-d2": "0.0625rem",
  "--letter-spacing-d3": "0rem"
}, T = {
  "--line-height-u6": "clamp(2.5rem, (100vw - 599px) * 99, clamp(4rem, (100vw - 959px) * 99, clamp(4.5rem, (100vw - 1367px) * 99, 5rem)))",
  // 40, 64, 72, 80px
  "--line-height-u5": "clamp(2.5rem, (100vw - 599px) * 99, clamp(3rem, (100vw - 959px) * 99, clamp(3.5rem, (100vw - 1367px) * 99, 4rem)))",
  // 40, 48, 56, 64px
  "--line-height-u4": "clamp(2rem, (100vw - 599px) * 99, clamp(2.5rem, (100vw - 959px) * 99, clamp(3rem, (100vw - 1367px) * 99, 4rem)))",
  // 32, 40, 48, 64px
  "--line-height-u3": "clamp(2rem, (100vw - 599px) * 99, clamp(2.5rem, (100vw - 1367px) * 99, 3rem))",
  // 32, 40, 48px
  "--line-height-u2": "clamp(1.5rem, (100vw - 599px) * 99, clamp(2rem, (100vw - 1367px) * 99, 2.5rem))",
  // 24, 32, 40px
  "--line-height-u1": "clamp(1.5rem, (100vw - 1367px) * 99, 2rem)",
  // 24, 32px
  "--line-height-b": "1.5rem",
  //24px
  "--line-height-d1": "1.25rem",
  //20px
  "--line-height-d2": "1rem",
  //16px
  "--line-height-d3": "1rem"
  //16px
}, F = {
  // Vertical Spacing
  "--spacing-minimal": "0.5rem",
  "--spacing-tiny": "1rem",
  "--spacing-petit": "1.5rem",
  "--spacing-normal": "2rem",
  "--spacing-roomy": "clamp(2rem, (100vw - 599px) * 99, clamp(2.5rem, (100vw - 959px) * 99, clamp(3rem, (100vw - 1367px) * 99, 3.5rem)))",
  "--spacing-spacious": "clamp(2.5rem, (100vw - 599px) * 99, clamp(3rem, (100vw - 959px) * 99, clamp(3.5rem, (100vw - 1367px) * 99, 4rem)))",
  "--spacing-big": "clamp(3.5rem, (100vw - 599px) * 99, clamp(4rem, (100vw - 959px) * 99, clamp(4.5rem, (100vw - 1367px) * 99, 5rem)))",
  "--spacing-huge": "clamp(4.5rem, (100vw - 599px) * 99, clamp(5.5rem, (100vw - 959px) * 99, clamp(6rem, (100vw - 1367px) * 99, 7rem)))",
  //Grid spacing
  "--grid-gutter": "clamp(1rem, (100vw - 959px) * 99, 1.5rem)"
}, O = () => c(function({ addBase: r }) {
  r({
    ":root": {
      ...k,
      ...S,
      ...A,
      ...T,
      ...F
    }
  });
}), C = () => [O(), ...E()], L = (r, a) => {
  const l = {};
  return r().length > 0 && (l.plugins = r()), Object.keys(a()).length > 0 && (l.theme = a()), l;
}, _ = {
  corePlugins: {
    container: !1
  },
  ...L(C, b)
};
export {
  _ as default
};
