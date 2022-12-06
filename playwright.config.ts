import type { PlaywrightTestConfig } from "@playwright/test";
const config: PlaywrightTestConfig = {
  timeout: 60000,
  projects: [
    {
      name: "staging-ui",
      use: {
        baseURL: "https://stage-dot-project-galileo-dev.uc.r.appspot.com/#/",
        viewport: { width: 1200, height: 1000 },
        ignoreHTTPSErrors: true,
        colorScheme: "light",
      },
    },
  ],
};
export default config;
