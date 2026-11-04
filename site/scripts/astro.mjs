import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import path from 'node:path';
import fs from 'node:fs';

const require = createRequire(import.meta.url);
const manifestPath = require.resolve('astro/package.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const cli = path.join(path.dirname(manifestPath), typeof manifest.bin === 'string' ? manifest.bin : manifest.bin.astro);
const child = spawn(process.execPath, [cli, ...process.argv.slice(2)], {
  stdio: 'inherit',
  env: { ...process.env, ASTRO_TELEMETRY_DISABLED: '1' }
});
child.on('error', error => { console.error(error.message); process.exitCode = 1; });
child.on('exit', code => { process.exitCode = code ?? 1; });
