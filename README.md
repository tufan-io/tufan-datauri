# @tufan/datauri

[![action-ci](https://github.com/tufan-io/tufan-datauri/workflows/action-ci/badge.svg)](https://github.com/tufan-io/tufan-datauri/actions)

OS independent way to convert file contents to a datauri.
Used to convert icon files to datauris that can be embedded within metadata
specifications.

## Usage
```bash
# set registry config
npm config set @tufan-io:registry https://npm.pkg.github.com/tufan-io

# install the package
npm install @tufan-io/datauri
```

### API
```
/**
 *  Returns a platform agnostic datauri, from a filename.
 *  Converts file contents to `lf` (unix) encoding before computing the data-uri.
 *  This makes our dataUri independent of file-encoding configuration on disk.
 *  Synchronous, so it can be used on import of metadata.
 */
dataUri(fpath: string): string
```

## Development Tooling
- [Development tooling](docs/DevTools.md)
- [CLOC reports](docs/cloc.md)
- [TODOS](docs/TODOs.md)
- [Changelog](CHANGELOG.md)
- [Security](SECURITY.md)

## License
[Apache-2.0](LICENSE.md)

## Code of Conduct
This project is released with a [Contributor Code of Conduct](code-of-conduct.md).
By participating, you agree to abide by its terms.

## Support
Bugs, PRs, comments, suggestions welcomed!
