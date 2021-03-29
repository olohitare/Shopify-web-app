const customMediaQuery = (maxWidth) =>
  `@media (min-width: ${maxWidth}px)`;

export const devices = {
  custom: customMediaQuery,
  tablet: customMediaQuery(768),
  tabletL: customMediaQuery(968),
  laptop: customMediaQuery(1024),
  laptopM: customMediaQuery(1240),
  laptopL: customMediaQuery(1440),
  desktop: customMediaQuery(2560),
  phone: customMediaQuery(500),
  phoneM: customMediaQuery(576),
  phoneS: customMediaQuery(450),
  phoneXS: customMediaQuery(250),
};
