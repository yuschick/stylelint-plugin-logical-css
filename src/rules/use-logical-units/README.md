# Use Logical Units

This rule is responsible for checking that logical CSS units are used.
Specifically, viewport units like `vw` and `vh` which stand for viewport width
and viewport height respectively will not reflect different writing modes and
directions. Instead, this rule will enforce the logical equivalents, `vi` and
`vb`.

## Getting Started

> Before getting started with the plugin, you must first have
> [Stylelint](https://stylelint.io/) version 14.0.0 or greater installed

To get started using the plugin, it must first be installed.

```bash
npm i stylelint-plugin-logical-css --save-dev
```

```bash
yarn add stylelint-plugin-logical-css --dev
```

With the plugin installed, the rule(s) can now be added to the project's
Stylelint configuration.

```json
"plugins": ["stylelint-plugin-logical-css"],
  "rules": {
    "plugin/use-logical-units": [true, {"severity": "warning" }]
  }
```

## Usage

### Not Allowed

```css
body {
  max-block-size: 100vh; /* Will flag the physical use of viewport "height" */
}
```

### Allowed

```css
body {
  max-block-size: 100vb;
}
```

## Supported Units

> Read about current
> [browser support for logical viewport units](https://caniuse.com/mdn-css_types_length_viewport_percentage_units_dynamic).

| Physical Unit |  Logical Unit |
| ------------- | ------------- |
| dvh           | dvb           |
| dvw           | dvi           |
| lvh           | lvb           |
| lvw           | lvi           |
| svh           | svb           |
| svw           | svi           |
| vh            | vb            |
| vw            | vi            |
