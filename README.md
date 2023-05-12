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

- [plugin/use-logical-properties-and-values](#pluginuse-logical-properties-and-values)
- [plugin/use-logical-units](#pluginuse-logical-units)

---

### plugin/use-logical-properties-and-values

This rule is responsible for checking both CSS properties and values. When a
physical property or value is found, it will be flagged.

```json
{
  "rules": {
    "plugin/use-logical-properties-and-values": [
      true,
      { "severity": "warning" }
    ]
  }
}
```

#### Options

| Option           | Description                                                              |
| ---------------- | ------------------------------------------------------------------------ |
| disable-auto-fix | Use this option to prevent auto-fixing warnings and errors while saving. |
| ignore           | Pass an array of physical properties to ignore while linting.            |

```json
{
  "rules": {
    "plugin/use-logical-properties-and-values": [
      true,
      {
        "severity": "warning",
        "disable-auto-fix": true,
        "ignore": ["overflow-y", "overflow-x"]
      }
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
  opacity: 1;
  transition: opacity 1s ease, max-width 1s ease; /* Will flag the use of 'max-width' */
}
```

##### Allowed

```css
.heading {
  max-inline-size: 90ch;
  text-align: start;
  opacity: 1;
  transition: opacity 1s ease, max-inline-size: 1s ease;
}
```

#### Supported Properties and Values

##### Properties for sizing

| Physical Property |  Logical Property |
| ----------------- | ----------------- |
| `height`          | `block-size`      |
| `width`           | `inline-size`     |
| `max-height`      | `max-block-size`  |
| `max-width`       | `max-inline-size` |
| `min-height`      | `min-block-size`  |
| `min-width`       | `min-inline-size` |

##### Properties for margins, borders, and padding

| Physical Property                          |  Logical Property           |
| ------------------------------------------ | --------------------------- |
| `border-top` & `border-bottom`             | `border-block`              |
| `border-top-color` & `border-bottom-color` | `border-block-color`        |
| `border-top-style` & `border-bottom-style` | `border-block-style`        |
| `border-top-width` & `border-bottom-width` | `border-block-width`        |
| `border-left` & `border-right`             | `border-inline`             |
| `border-left-color` & `border-right-color` | `border-inline-color`       |
| `border-left-style` & `border-right-style` | `border-inline-style`       |
| `border-left-width` & `border-right-width` | `border-inline-width`       |
| `border-bottom`                            | `border-block-end`          |
| `border-bottom-color`                      | `border-block-end-color`    |
| `border-bottom-style`                      | `border-block-end-style`    |
| `border-bottom-width`                      | `border-block-end-width`    |
| `border-top`                               | `border-block-start`        |
| `border-top-color`                         | `border-block-start-color`  |
| `border-top-style`                         | `border-block-start-style`  |
| `border-top-width`                         | `border-block-start-width`  |
| `border-right`                             | `border-inline-end`         |
| `border-right-color`                       | `border-inline-end-color`   |
| `border-right-style`                       | `border-inline-end-style`   |
| `border-right-width`                       | `border-inline-end-width`   |
| `border-left`                              | `border-inline-start`       |
| `border-left-color`                        | `border-inline-start-color` |
| `border-left-style`                        | `border-inline-start-style` |
| `border-left-width`                        | `border-inline-start-width` |
| `border-bottom-left-radius`                | `border-end-start-radius`   |
| `border-bottom-right-radius`               | `border-end-end-radius`     |
| `border-top-left-radius`                   | `border-start-start-radius` |
| `border-top-right-radius`                  | `border-start-end-radius`   |
| `margin-top` & `margin-bottom`             | `margin-block`              |
| `margin-top`                               | `margin-block-start`        |
| `margin-bottom`                            | `margin-block-end`          |
| `margin-left` & `margin-right`             | `margin-inline`             |
| `margin-left`                              | `margin-inline-start`       |
| `margin-right`                             | `margin-inline-end`         |
| `padding-top` & `padding-bottom`           | `padding-block`             |
| `padding-top`                              | `padding-block-start`       |
| `padding-bottom`                           | `padding-block-end`         |
| `padding-left` & `padding-right`           | `padding-inline`            |
| `padding-left`                             | `padding-inline-start`      |
| `padding-right`                            | `padding-inline-end`        |

##### Properties for floating and positioning

| Physical Property |  Logical Property     |
| ----------------- | --------------------- |
| `clear: left`     | `clear: inline-start` |
| `clear: right`    | `clear: inline-end`   |
| `float: left`     | `float: inline-start` |
| `float: right`    | `float: inline-end`   |
| `top` & `bottom`  | `inset-block`         |
| `top`             | `inset-block-start`   |
| `bottom`          | `inset-block-end`     |
| `left` & `right`  | `inset-inline`        |
| `left`            | `inset-inline-start`  |
| `right`           | `inset-inline-end`    |

##### Properties for size containment

| Physical Property          |  Logical Property               |
| -------------------------- | ------------------------------- |
| `contain-intrinsic-height` | `contain-intrinsic-block-size`  |
| `contain-intrinsic-width`  | `contain-intrinsic-inline-size` |

##### Other properties

| Physical Property                              |  Logical Property                   |
| ---------------------------------------------- | ----------------------------------- |
| `(-webkit-)box-orient: vertical`               | `(-webkit-)box-orient: block-axis`  |
| `(-webkit-)box-orient: horizontal`             | `(-webkit-)box-orient: inline-axis` |
| `caption-side: top`                            | `caption-side: block-start`         |
| `caption-side: bottom`                         | `caption-side: block-end`           |
| `caption-side: right`                          | `caption-side: inline-end`          |
| `caption-side: left`                           | `caption-side: inline-start`        |
| `overflow-y`                                   | `overflow-block`                    |
| `overflow-x`                                   | `overflow-inline`                   |
| `overscroll-behavior-x`                        | `overscroll-behavior-inline`        |
| `overscroll-behavior-y`                        | `overscroll-behavior-block`         |
| `resize: horizontal`                           | `resize: inline`                    |
| `resize: vertical`                             | `resize: block`                     |
| `scroll-margin-bottom`                         | `scroll-margin-block-end`           |
| `scroll-margin-bottom` & `scroll-margin-top`   | `scroll-margin-block`               |
| `scroll-margin-left`                           | `scroll-margin-inline-start`        |
| `scroll-margin-left` & `scroll-margin-right`   | `scroll-margin-inline`              |
| `scroll-margin-right`                          | `scroll-margin-inline-end`          |
| `scroll-margin-top`                            | `scroll-margin-block-start`         |
| `scroll-padding-bottom`                        | `scroll-padding-block-end`          |
| `scroll-padding-bottom` & `scroll-padding-top` | `scroll-padding-block`              |
| `scroll-padding-left`                          | `scroll-padding-inline-start`       |
| `scroll-padding-left` & `scroll-padding-right` | `scroll-padding-inline`             |
| `scroll-padding-right`                         | `scroll-padding-inline-end`         |
| `scroll-padding-top`                           | `scroll-padding-block-start`        |
| `text-align: left`                             | `text-align: start`                 |
| `text-align: right`                            | `text-align: end`                   |

---

### plugin/use-logical-units

This rule is responsible for checking that logical CSS units are used.
Specifically, viewport units like `vw` and `vh` which stand for viewport width
and viewport height respectively will not reflect different writing modes and
directions. Instead, this rule will enforce the logical equivalents, `vi` and
`vb`.

```json
{
  "rules": {
    "plugin/use-logical-units": [true, { "severity": "warning" }]
  }
}
```

#### Options

| Option           | Description                                                              |
| ---------------- | ------------------------------------------------------------------------ |
| disable-auto-fix | Use this option to prevent auto-fixing warnings and errors while saving. |
| ignore           | Pass an array of physical units to ignore while linting.                 |

```json
{
  "rules": {
    "plugin/use-logical-properties-and-values": [
      true,
      {
        "severity": "warning",
        "disable-auto-fix": true,
        "ignore": ["dvh", "dvw"]
      }
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

#### Supported Units

> Read about current
> [browser support for logical viewport units](https://caniuse.com/mdn-css_types_length_viewport_percentage_units_dynamic).

| Physical Unit |  Logical Unit |
| ------------- | ------------- |
| cqh           | cqb           |
| cqw           | cqi           |
| dvh           | dvb           |
| dvw           | dvi           |
| lvh           | lvb           |
| lvw           | lvi           |
| svh           | svb           |
| svw           | svi           |
| vh            | vb            |
| vw            | vi            |
