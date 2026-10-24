import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';
const styles = await Promise.all(['tokens.css', 'book.css'].map(file => readFile(new URL(import.meta.resolve('@x12i/docify-theme/' + file)), 'utf8')));
assert(styles.every(css => css.length > 0));
const html = '<!doctype html><html lang="en"><meta charset="utf-8"><title>Theme example</title><style>' + styles.join('\n') + '</style><body><main><article><h1>Example guide</h1><p>A local preview using the published theme.</p><h2>Next steps</h2><ul><li>Install the package</li><li>Import the theme styles</li></ul></article></main></body></html>';
await writeFile('preview.html', html);
assert((await readFile('preview.html', 'utf8')).includes('Example guide'));
console.log('Generated preview.html from the installed theme. Open it in a browser to inspect the appearance.');
