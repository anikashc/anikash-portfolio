import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import {theme as chakraTheme} from "@chakra-ui/react"
import { createBreakpoints, Styles } from '@chakra-ui/theme-tools'
import { mode } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
})
const styles: Styles = {
    global: (props) => ({
      body: {
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('yellow.50', 'gray.900')(props)
      }
    })
  };

const fonts = {
    ...chakraTheme.fonts, 
    heading: "Montserrat, sans-serif",
    body: "Montserrat, sans-serif",
    mono: "Menlo, monospace"
}
const colorConfig: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: true,
}
const overrides = {
    ...chakraTheme,
    colorConfig,
    fonts,
    breakpoints,
    fontWeights: {
        normal: 400,
        medium: 500,
        bold: 700,
    },
    fontSizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
    },
    styles
}

const customTheme = extendTheme(overrides);
export default customTheme;