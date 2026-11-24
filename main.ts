import * as fs from 'node:fs';
import * as path from 'node:path';

const line: string = "I spawned a subagent to write the code and another to review it; they're no longer on speaking terms.";

const outputDir: string = process.env.OUTPUT_DIR || '/output';
const outputPath: string = path.join(outputDir, 'entry.txt');

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, line, 'utf-8');

console.log(line);
