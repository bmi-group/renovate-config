module.exports = {
  assigneesFromCodeOwners: true,
  autodiscover: true,
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
    autoApprove: true,
  },
  onboarding: true,
  packageRules: [
    {
      matchPackageNames: ["@bmi-digital/components"],
      automerge: true,
      automergeType: "pr",
      platformAutomerge: true,
      autoApprove: true,
    },
    {
      matchDepPatterns: ["^@mui"],
      automerge: true,
      automergeType: "pr",
      platformAutomerge: true,
      autoApprove: true,
    },
    {
      excludeDepNames: ["@bmi-digital/components"],
      excludeDepPatterns: ["^@mui"],
      matchUpdateTypes: ["minor", "patch"],
      matchCurrentVersion: "!/^0/",
      automerge: true,
      automergeType: "pr",
      platformAutomerge: true,
      groupName: "all non-major dependencies",
      groupSlug: "all-minor-patch",
      autoApprove: true,
    },
    {
      matchPackageNames: ["@lhci/cli"],
      allowedVersions: "!/^0.13.0$/"
    }
  ],
};
