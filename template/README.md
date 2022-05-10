## Development
### without Docker

- Set `proxy` key in `package.json` to remote environment
- Set `src/keycloak.js` values to match remote environment keycloak config
- Run `start` script

### Docker with proxy (recommended)

- Set `proxy` key in `package.json` to remote environment
- Set `docker-compose.override.yaml` auth url to the same environment as above
- Run `docker:start` script

### Docker with local backend

- Set `proxy` key in package.json to `http://ensys-application:8080`
- Run `docker:start:local` script

## Other available scripts

`build` - builds production ready static files. Only used to set up remote environments.

`test` - runs whole test suite once, without watch. Mainly used for husky precommit validation.

`test:watch` - runs `Jest` in watch mode. It reruns rests for files that have been changed since last commit.

`test:coverage` - runs `Jest` in coverage mode. Returns report about test coverage.

`prepare` - `husky` specific script, used to set it up.

`pre-commit` - `husky` specific script. Runs `lint-staged` and `npm run test` if one of those fails then it block the commit.
