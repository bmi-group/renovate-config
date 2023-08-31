module.exports = {
  assigneesFromCodeOwners: true,
  autodiscover: true,
  autodiscoverFilter: [
    "bmi-digital/{apps-factory,bmi-cicd-config,c4c-automation,components,contentful-integrations,contentful-migration,devops,devops-interview-exercise,dxb,eslint-config,frontend-interview-exercise,gitlab-templates,gradle-project-starter,hybris-interview-exercise,intouch,intouch-nonprod-database-recreate,intouchdatabase,jira-connector,license-finder,sustainability-dashboard,tsconfig,ui-library,yarn-project-starter}",
    "bmi-digital/softserve/{auth0-config-automation,dxbtestautomation,pim-nextgen-ta}",
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
      // Seperated out as it usually updates the classnames, causing the tests to fail
      matchPackageNames: ["@bmi-digital/components"],
      automerge: true,
      automergeType: "pr",
      platformAutomerge: true
    },
    {
      // Seperated out as it usually updates the classnames, causing the tests to fail
      matchDepPatterns: ["^@mui"],
      automerge: true,
      automergeType: "pr",
      platformAutomerge: true
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
      groupSlug: "all-minor-patch"
    }
  ],
};
