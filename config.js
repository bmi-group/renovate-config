module.exports = {
  assigneesFromCodeOwners: true,
  autodiscover: true,
  autodiscoverFilter: [
    "bmi-digital/{eslint-config,tsconfig,ui-library,yarn-project-starter}",
  ],
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
  lockFileMaintenance: {
    enabled: true,
    automerge: true,
    automergeType: "pr",
    platformAutomerge: true,
  },
  onboarding: true,
  packageRules: [
    {
      matchUpdateTypes: ["minor", "patch"],
      matchCurrentVersion: "!/^0/",
      automerge: true,
      // Uncomment if we want to have all non-major updates grouped together in the same MR to save on build minutes
      //   groupName: "all non-major dependencies",
      //   groupSlug: "all-minor-patch",
    },
  ],
};
