import { createTheme, Theme } from '@mui/material/styles';
import { CSSInterpolation } from '@mui/system';

const globalStyles = (theme: Theme): CSSInterpolation => ({
  body: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    fontVariantNumeric: 'tabular-nums',
    fontSize: '14px',
    lineHeight: 2,
  },
  'h1, h2, h3, h4, h5, h6': {
    color: '#000000d9',
    fontWeight: 500,
  },
  h1: {
    marginTop: '8px',
    marginBottom: '20px',
    fontSize: '30px',
    lineHeight: '38px',
  },
  h2: {
    fontSize: '24px',
    lineHeight: '32px',
  },
  h3: {
    fontSize: '18px',
    lineHeight: 2,
  },
  h4: {
    fontSize: '16px',
    lineHeight: 2,
  },
  h5: {
    fontSize: '14px',
    lineHeight: 2,
  },
  h6: {
    fontSize: '12px',
    lineHeight: 2,
  },
});

/**
 * 全局主题设置，需要在入口文件中引入 <CssBaseline />
 */
const globalTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: globalStyles,
    },
  },
});

export default globalTheme;
