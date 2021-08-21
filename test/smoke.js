// @ts-nocheck
import {
  __dirname,
  __filename,
  getDirname,
  getFilename,
} from "../dist/index.js";
import { URL } from "url";
import { dirname } from "path";
import { ok } from "assert";

const actualFileName = new URL(import.meta.url).pathname;
const actualDirName = dirname(actualFileName);

ok(actualFileName === __filename(), "__filename matches");
ok(actualDirName === __dirname(), "__dirname matches");

ok(actualFileName === getFilename(), "__filename matches");
ok(actualDirName === getDirname(), "__dirname matches");
