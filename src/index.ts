import { fileURLToPath } from "url";
import { dirname } from "path";
import callsites from "callsites";

function extractFilePathFromFileUrl(url?: string | null) {
  if (!url) {
    throw new Error("Unable to get filename");
  }

  return fileURLToPath(url);
}

export function getFileName() {
  const url = callsites()[1]?.getFileName();

  return extractFilePathFromFileUrl(url);
}

export function getDirName() {
  // Can't be reused from getFilename because that would change the callstack and make [1] not what we need.
  const url = callsites()[1]?.getFileName();

  return dirname(extractFilePathFromFileUrl(url));
}

export function getModulePaths() {
  const url = callsites()[1]?.getFileName();
  const fileName = extractFilePathFromFileUrl(url);

  return {
    __filename: fileName,
    __dirname: dirname(fileName),
  };
}

export const __filename = getFileName;
export const __dirname = getDirName;
