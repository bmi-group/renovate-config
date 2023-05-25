module.exports = {
  autodiscover: true,
  autodiscoverFilter: ["bmi-digital/{yarn-project-starter,ui-library}"],
  customEnvVariables: {
    NPM_AUTH_READ_TOKEN: process.env.NPM_AUTH_READ_TOKEN,
  },
  hostRules: [
    {
      hostType: "npm",
      matchHost: "registry.npmjs.org",
      token: process.env.NPM_AUTH_READ_TOKEN,
    },
  ],
  onboarding: true,
};
