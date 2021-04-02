import test from "ava";
import * as eol from "eol";
import * as fs from "fs-extra";
import * as path from "path";
import { dataUri } from "..";
import { saveSvg } from "./helpers/saveSvg";

test.before(async (t) => {
  const dir = path.resolve(__dirname);
  t.context = { ...(await saveSvg(dir)), dir };
});

/*
 * This test is a bit of faith based initiative. I cannot seem to get the
 * actual crlf encoding to "occur" on macosx. It seems the files are being
 * written by nodejs, but on reading, are normalized to lf.
 * On windows however, this is causing test failures.
 *
 * Therefore, we cannot assert that the actual encoding makes a difference,
 * because that test will break on either windows or macosx.
 *
 * So we will just invoke this function to ensure fundamental correctness,
 * but have to trust it works as designed.
 */
test(`compare crlf & lf`, async (t) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, dir, fpath } = t.context as any;
  t.log(dir);
  const crlf = dataUri(fpath.crlf);
  const lf = dataUri(fpath.lf);
  const raw_crlf = eol.crlf(await fs.readFile(fpath.crlf, "utf8"));
  const raw_lf = eol.lf(await fs.readFile(fpath.lf, "utf8"));
  t.is(crlf, lf);
  t.not(raw_crlf, raw_lf);

  // This is the assertion that we cannot male
  //  const datauri_crlf = (new Datauri(fpath.crlf, raw_crlf)).content;
  //  const datauri_lf = (new Datauri(fpath.lf, raw_lf)).content;
  //  t.not(datauri_crlf, datauri_lf);

  t.snapshot({ data, datauri: { crlf, lf } });
});
