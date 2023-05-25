module.exports = {
  hostRules: [
    {
      hostType: "npm",
      matchHost: "registry.npmjs.org",
      token: process.env.NPM_AUTH_READ_TOKEN,
    },
  ],
  customEnvVariables: {
    GITHUB_COM_TOKEN: process.env.GITHUB_COM_TOKEN,
    NPM_AUTH_READ_TOKEN: process.env.NPM_AUTH_READ_TOKEN,
    RENOVATE_NPMRC: process.env.RENOVATE_NPMRC,
  },
};
