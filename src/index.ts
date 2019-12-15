import * as Datauri from "datauri";
import * as eol from "eol";
import * as fs from "fs-extra";

/**
 * Returns a platform agnostic datauri, from a filename.
 * Converts file contents to `lf` (unix) encoding before computing the data-uri.
 * This makes our dataUri independent of file-encoding configuration on disk.
 * Especially since git setup for this has multiple nuances, we don't want to
 * bother with setting things up so.
 *
 * Synchronous, so it can be used on import of metadata.
 *
 * @param fpath
 */
export function dataUri(fpath: string) {
  // this is a little hacky and inefficient,
  // but serves the purpose for now.
  // tslint:disable-next-line: tsr-detect-non-literal-fs-filename
  const raw = eol.lf(fs.readFileSync(fpath, "utf8"));
  const datauri = new Datauri();
  const { content } = datauri.format(fpath, raw);
  return content;
}
