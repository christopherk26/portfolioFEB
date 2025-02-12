import { Global, css } from '@emotion/react';

export const GlobalStyles = () => (
  <Global
    styles={theme => css`
      @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Source+Sans+Pro:wght@300;400;600&display=swap');

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: ${theme.fonts.primary};
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
        line-height: 1.6;
        transition: background-color 0.3s ease, color 0.3s ease;
      }

      h1, h2, h3, h4, h5, h6 {
        font-family: ${theme.fonts.secondary};
        margin-bottom: ${theme.spacing.medium};
        color: ${theme.colors.primary};
        transition: color 0.3s ease;
      }

      a {
        color: ${theme.colors.primary};
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: ${theme.colors.secondary};
        }
      }
    `}
  />
);