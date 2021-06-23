import { white, black, blue, pink, yellow, green, agGreen, darkGreen, red, boxShadow, CardColor } from './colors'

const theme = {
  borderRadius: 2,
  breakpoints: {
    mobile: 400,
  },
  color: {
    layoutColor: darkGreen,
    textPrimary: agGreen[100],
    textSecondary: white,
    bgPrimary: agGreen[100],
    bgSecondary: agGreen[200],
    bgWhite: white,
    CardColor: CardColor,
    white,
    black,
    agGreen,
    blue,
    pink,
    yellow,
    green,
    red,
    boxShadow,
  },
  siteWidth: 1200,
  spacing: {
    1: 4,
    2: 8,
    3: 16,
    4: 24,
    5: 32,
    6: 48,
    7: 64,
  },
}

export default theme