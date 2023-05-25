module.exports = {
  hostRules: [
    {
      hostType: "npm",
      matchHost: "registry.npmjs.org",
      token: process.env.NPM_AUTH_READ_TOKEN,
    },
  ],
  npmrc: process.env.RENOVATE_NPMRC,
  customEnvVariables: {
    NPM_AUTH_READ_TOKEN: process.env.NPM_AUTH_READ_TOKEN,
  },
};
