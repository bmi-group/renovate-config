module.exports = {
  hostRules: [
    {
      hostType: "npm",
      matchHost: "registry.npmjs.org",
      token: process.env.NPM_AUTH_READ_TOKEN,
    },
  ],
  customEnvVariables: {
    NPM_AUTH_READ_TOKEN: process.env.NPM_AUTH_READ_TOKEN,
  },
};
