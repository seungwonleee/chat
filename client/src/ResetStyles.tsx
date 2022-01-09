import { css } from '@emotion/react';

const resetStyles = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body,
  #root {
    font-size: 10px;
    height: 100%;
    width: 100%;
  }
`;

export default resetStyles;
