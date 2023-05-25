# renovate-bot

This is the runner for updating dependencies across all of the BMI Digital group repos.

## Config

| Variable              | Value from                                                                                     |
| --------------------- | ---------------------------------------------------------------------------------------------- |
| `GITHUB_COM_TOKEN`    | GitHub personal access token (has to be a classic token as it needs access to the GraphQL API) |
| `NPM_AUTH_READ_TOKEN` | Read only auth token                                                                           |
| `RENOVATE_NPMRC`      | String representation of a would be .npmrc file                                                |
