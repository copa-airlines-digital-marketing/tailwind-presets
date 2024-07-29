module.exports = () => ({
  "--spacing-minimal": "0.5rem",
  "--spacing-tiny": "1rem",
  "--spacing-petit": "1.5rem",
  "--spacing-normal": "2rem",
  "--spacing-roomy":
    "clamp(2rem, (100vw - 599px) * 99, clamp(2.5rem, (100vw - 959px) * 99, clamp(3rem, (100vw - 1367px) * 99, 3.5rem)))",
  "--spacing-spacious":
    "clamp(2.5rem, (100vw - 599px) * 99, clamp(3rem, (100vw - 959px) * 99, clamp(3.5rem, (100vw - 1367px) * 99, 4rem)))",
  "--spacing-big":
    "clamp(3.5rem, (100vw - 599px) * 99, clamp(4rem, (100vw - 959px) * 99, clamp(4.5rem, (100vw - 1367px) * 99, 5rem)))",
  "--spacing-huge":
    "clamp(4.5rem, (100vw - 599px) * 99, clamp(5.5rem, (100vw - 959px) * 99, clamp(6rem, (100vw - 1367px) * 99, 7rem)))",
})
