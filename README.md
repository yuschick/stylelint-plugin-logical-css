# 🛸 Stylelint Plugin Logical CSS

![License](https://img.shields.io/github/license/yuschick/stylelint-plugin-logical-css?style=for-the-badge)
![NPM Version](https://img.shields.io/npm/v/stylelint-plugin-logical-css?style=for-the-badge)
![Main Workflow Status](https://img.shields.io/github/actions/workflow/status/yuschick/stylelint-plugin-logical-css/main.yaml?style=for-the-badge)

Stylelint Plugin Logical CSS aims to enforce the use of logical CSS properties,
values and units. The plugin provides two rules. But first, let's get set up.

> [Read more about Logical CSS on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties)

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

With the plugin installed, the rule(s) can be added to the project's Stylelint
configuration.

```json
{
  "plugins": ["stylelint-plugin-logical-css"],
  "rules": {
    "plugin/use-logical-properties-and-values": [
      true,
      { "severity": "warning" }
    ],
    "plugin/use-logical-units": [true, { "severity": "warning" }]
  }
}
```

## Rules

Let's explore each rule to better understand what it does, and does not, allow.

### `plugin/use-logical-properties-and-values`

**👉 [Learn more about this rule](./src/rules/use-logical-properties-and-values)
👈**

This rule is responsible for checking both CSS properties and values. When a
physical property or value is found, it will be flagged.

#### Options

The use-logical-properties-and-values rule accepts the following options:

| Option          | Description                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------- |
| enable-auto-fix | Use this option in addition to the native Stylelint `--fix` flag to enable auto fixing on save. |

```json
{
  "rules": {
    "plugin/use-logical-properties-and-values": [
      true,
      { "severity": "warning", "enable-auto-fix": true }
    ]
  }
}
```

#### Usage

##### Not Allowed

```css
.heading {
  max-width: 90ch; /* Will flag the use of "width" */
  text-align: left; /* Will flag the use of "left" */
}
```

##### Allowed

```css
.heading {
  max-inline-size: 90ch;
  text-align: start;
}
```

---

### `plugin/use-logical-units`

**👉 [Learn more about this rule](./src/rules/use-logical-units) 👈**

This rule is responsible for checking that logical CSS units are used.
Specifically, viewport units like `vw` and `vh` which stand for viewport width
and viewport height respectively will not reflect different writing modes and
directions. Instead, this rule will enforce the logical equivalents, `vi` and
`vb`.

#### Options

The use-logical-units rule accepts the following options:

| Option          | Description                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------- |
| enable-auto-fix | Use this option in addition to the native Stylelint `--fix` flag to enable auto fixing on save. |

```json
{
  "rules": {
    "plugin/use-logical-units": [
      true,
      { "severity": "warning", "enable-auto-fix": true }
    ]
  }
}
```

#### Usage

##### Not Allowed

```css
body {
  max-block-size: 100vh; /* Will flag the physical use of viewport "height" */
}
```

##### Allowed

```css
body {
  max-block-size: 100vb;
}
```

## Skipped Properties

There are some CSS properties which do not yet have logical equivalents or
support for logical values. In these cases, including vendor-prefixed instances,
we skip any linting checks.

| Property              | Description                                                                              |
| --------------------- | ---------------------------------------------------------------------------------------- |
| `background`          | The shorthand `background` property can contain positioning terms like `top` and `left`. |
| `background-position` | The `background-position` property can contain positioning terms like `top` and `left`.. |
| `grid-area`           | It is possible for a grid area to have a name like 'bottom'.                             |
| `grid-template-areas` | It is possible for a grid area to have a name like 'bottom'.                             |
| `mask-position`       | The `mask-position` property can accept physical positions, but not logical ones.        |
| `transform-origin`    | The `transform-origin` property can accept physical positions, but not logical ones.     |
| `vertical-align`      | The `vertical-align` property can accept physical positions, but not logical ones.       |


## TODO

What can be expected in the future.

- Refactor to TypeScript
- Support disabling individual property checks