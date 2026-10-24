# @x12i/docify-theme usage example

Shared design-system CSS for x12i docify product sites and docs readers.

This consuming application demonstrates **build an html preview using the published book styles** using the published npm package, pinned to `1.3.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Apply the shared design-system CSS to a Docify reader.
- Keep product-site and documentation styling aligned through one versioned theme dependency.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/docify-theme)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Validation scope

This example consumes bundled assets or deterministic local fixtures. It does not contact providers, acquire real records, seed a database, or persist a production graph. Report examples check HTML generation only. Theme examples generate `preview.html`; visual appearance still needs browser review.
