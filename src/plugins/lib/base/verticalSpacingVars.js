module.exports = {
  '--spacing-minimal': '8px',
  '--spacing-tiny': '16px',
  '--spacing-petit': '24px',
  '--spacing-normal': '32px',
  '--spacing-roomy':
    'clamp(32px, (100vw - 599px) * 99, clamp(40px, (100vw - 959px) * 99, clamp(48px, (100vw - 1367px) * 99, 56px)))',
  '--spacing-spacious':
    'clamp(40px, (100vw - 599px) * 99, clamp(48px, (100vw - 959px) * 99, clamp(56px, (100vw - 1367px) * 99, 64px)))',
  '--spacing-big': 'clamp(56px, (100vw - 599px) * 99, clamp(64px, (100vw - 959px) * 99, clamp(72px, (100vw - 1367px) * 99, 80px)))',
  '--spacing-huge': 'clamp(72px, (100vw - 599px) * 99, clamp(88px, (100vw - 959px) * 99, clamp(96px, (100vw - 1367px) * 99, 112px)))',
}