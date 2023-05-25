# renovate-bot

This uses the [renovate-runner](https://gitlab.com/renovate-bot/renovate-runner) template to update the dependencies across all of the BMI Digital group repos.

## Config

A schedule has been configured to trigger the runner on a regular basis, so it will create MRs, update existing MRs and close redundant MRs.

The following environment variables have been set in the CI/CD config.

| Variable               | Value from                                                                                        |
| ---------------------- | ------------------------------------------------------------------------------------------------- |
| `GITHUB_COM_TOKEN`     | GitHub personal access token (has to be a classic token as it needs access to the GraphQL API)    |
| `NPM_AUTH_READ_TOKEN`  | Read only auth token (has to be set in the `customEnvVariables` so it is passed into the workers) |
| `RENOVATE_NPMRC`       | String representation of a would be .npmrc file                                                   |
| `RENOVATE_TOKEN`       | GitLab group access token                                                                         |
| `RENOVATE_EXTRA_FLAGS` | Extra flags to configure which repositories to update                                             |
