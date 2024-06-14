module.exports = {
  assigneesFromCodeOwners: true,
  autodiscover: true,
  autodiscoverFilter: ["!/bmi-digital/softserve/dxbtestautomation/"],
  customEnvVariables: {
    NPM_AUTH_READ_TOKEN: process.env.NPM_AUTH_READ_TOKEN,
  },
  gitLabIgnoreApprovals: true,
  hostRules: [
    {
      hostType: "npm",
      matchHost: "registry.npmjs.org",
      token: process.env.NPM_AUTH_READ_TOKEN,
    },
  ],
  labels: ["dependencies"],
  onboarding: true,
};
