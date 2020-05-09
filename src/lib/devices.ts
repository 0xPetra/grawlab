export const MEDIA_SIZES = {
  mobile: "425px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px",
};

export const DEVICES = {
  mobile: `(min-width: ${MEDIA_SIZES.mobile})`,
  tablet: `(min-width: ${MEDIA_SIZES.tablet})`,
  laptop: `(min-width: ${MEDIA_SIZES.laptop})`,
  desktop: `(min-width: ${MEDIA_SIZES.desktop})`,
};
