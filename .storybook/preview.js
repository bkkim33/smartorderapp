/** @type { import('@storybook/react').Preview } */
import { StyledEngineProvider } from "@mui/material/styles";
import "../src/styles/global.scss";
import "../src/styles/common/reset.scss";
const preview = {
  decorators: [
    (storyFn) => <StyledEngineProvider injectFirst>{storyFn()}</StyledEngineProvider>,
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
