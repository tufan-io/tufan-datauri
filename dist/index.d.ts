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
export declare function dataUri(fpath: string): string;
