import * as eol from "eol";
import * as fs from "fs-extra";
import * as path from "path";

const _svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
<rect width="100" height="100" style="fill:#208020" />
</svg>`;

export async function saveSvg(dir: string, svg = _svg) {
  const data = {
    crlf: eol.crlf(svg),
    lf: eol.lf(svg),
  };

  const fpath = {
    crlf: path.resolve(dir, "crlf.svg"),
    lf: path.resolve(dir, "lf.svg"),
  };

  // tslint:disable: tsr-detect-non-literal-fs-filename
  await fs.writeFile(fpath.crlf, data.crlf, "utf8");
  await fs.writeFile(fpath.lf, data.lf, "utf8");

  return { data, fpath };
}
