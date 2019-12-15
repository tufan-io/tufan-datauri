# @tufan/tufan-datauri

[![Build status](https://tufan-io.github.io/tufan-datauri/ci/badge/build.svg)](https://github.com/tufan-io/tufan-datauri/actions)
![Coverage](https://tufan-io.github.io/tufan-datauri/ci/badge/coverage.svg)

A simple, full-functionality starter package for node modules, built in TypeScript.

The goal is to be simple, lean and automated.

- minimize dependencies.
- use simpler-to-understand dependencies when necessary.
- enable a move-fast mindset.

Support for the following is baked in:

- [x] [tslint](https://github.com/palantir/tslint)
- [x] build automation
- [x] [ava](https://github.com/avajs/ava) test-automation
- [x] test coverage (remapped to TypeScript)
- [x] checks dependencies for known vulnerabilities before commit.
- [x] CI integration - using github actions
- [x] Code-of-conduct
- [x] [commitizen](https://www.npmjs.com/package/commitizen) integration

## Usage

```bash
degit tufan-io/tufan-datauri my-app
# alternatively
#   git clone https://github.com/tufan-io/tufan-datauri my-app
cd my-app
npm install
```

### Disclosure
npm install includes running a pre-install and post-install script.
These automates configuration changes required on first initialization.

This script itself self-deletes on completion, removes the pre/post-install hooks.
It also protects against doing to on the template repository!
Please see [.reinit](https://github.com/tufan-io/tufan-datauri/blob/master/.reinit)
for details.

Fundamentally, the `.reinit` script does these things:
- pre-install:
  - queries user for `org` & `repo` names
  - replaces these in `package.json`
  - removes git-repo of template (unnecessary when using degit, but still)
  - initializes a new git repo
  - stages all files
- post-install:
  - delete `.reinit`
  - builds the module (`npm run build`)
  - sets git remote configuration
  - warns about needing to set username on local git config

That gives you a spanking new repo to start, with all the promised tooling.
At this point, explore `./src` for the bare bones example.
Typically, you'd want to modify `./src/index.ts` to get started.

### Activating Badges in README.md
We use github actions as our CI system. The badges are generated as part of the
build process into a [./.badges](./.badges) directory.

Since many of the tufan-io repos are private, we have to go through a few hoops
to expose these badges to the public internet without sacrificing security/privacy
of the code base.

We do this by exporting the ./.badges directory to an orphaned `gh-pages` branch.
This is accomplished in the [ci-build workflow](./github/workflows/ci-build.yml)

For the badges to be visible to the internet however, currently, we require a
manual activation. This is accomplished *AFTER the first CI build has completed*,
on the [settings page](https://github.com/tufan-io/tufan-datauri/settings)
find the "Github Pages", and under "Source", select the "gh-pages branch".

Once done, reloading the README file should display the build icons

## Development Tooling

- [Development tooling](./docs/DevTools.md)
- [CLOC reports](./cloc.md)
- [Changelog](./CHANGELOG.md)

## License

[Apache-2.0](./LICENSE.md)

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](code-of-conduct.md). By participating in this project you agree to abide by its terms.

## Support

Bugs, PRs, comments, suggestions welcomed!
