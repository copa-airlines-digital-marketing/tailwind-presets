const BASE_SPACING = {
  minimal: "var(--spacing-minimal)",
  tiny: "var(--spacing-tiny)",
  petit: "var(--spacing-petit)",
  normal: "var(--spacing-normal)",
  roomy: "var(--spacing-roomy)",
  spacious: "var(--spacing-spacious)",
  big: "var(--spacing-big)",
  huge: "var(--spacing-huge)",
  'grid-gutter': "var(--grid-gutter)"
}

const getOverrides = () => {
  return {}
}

const getExtensions = () => {
  return BASE_SPACING
}

module.exports = {
  getOverrides: getOverrides,
  getExtensions: getExtensions
}