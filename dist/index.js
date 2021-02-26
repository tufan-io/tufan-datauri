"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataUri = void 0;
const parser_1 = __importDefault(require("datauri/parser"));
const eol = __importStar(require("eol"));
const fs = __importStar(require("fs-extra"));
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
function dataUri(fpath) {
    // this is a little hacky and inefficient,
    // but serves the purpose for now.
    // tslint:disable-next-line: tsr-detect-non-literal-fs-filename
    const raw = eol.lf(fs.readFileSync(fpath, "utf8"));
    const datauri = new parser_1.default();
    const { content } = datauri.format(fpath, raw);
    return content;
}
exports.dataUri = dataUri;
//# sourceMappingURL=index.js.map