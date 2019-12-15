"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Datauri = require("datauri");
const eol = require("eol");
const fs = require("fs-extra");
function dataUri(fpath) {
    const raw = eol.lf(fs.readFileSync(fpath, "utf8"));
    const datauri = new Datauri();
    const { content } = datauri.format(fpath, raw);
    return content;
}
exports.dataUri = dataUri;
//# sourceMappingURL=index.js.map