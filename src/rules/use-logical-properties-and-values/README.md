# Use Logical Properties and Values

This rule is responsible for checking both CSS properties and values. When a
physical property or value is found, it will be flagged.

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
    "plugin/use-logical-properties-and-values": [true, {"severity": "warning" }]
  }
```

## Usage

### Not Allowed

```css
.heading {
  max-width: 90ch; /* Will flag the use of "width" */
  text-align: left; /* Will flag the use of "left" */
}
```

### Allowed

```css
.heading {
  max-inline-size: 90ch;
  text-align: start;
}
```

## Supported Properties and Values

### Properties for sizing

| Physical Property |  Logical Property |
| ----------------- | ----------------- |
| `height`          | `block-size`      |
| `width`           | `inline-size`     |
| `max-height`      | `max-block-size`  |
| `max-width`       | `max-inline-size` |
| `min-height`      | `min-block-size`  |
| `min-width`       | `min-inline-size` |

### Properties for margins, borders, and padding

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

### Properties for floating and positioning

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

### Properties for size containment

| Physical Property          |  Logical Property               |
| -------------------------- | ------------------------------- |
| `contain-intrinsic-height` | `contain-intrinsic-block-size`  |
| `contain-intrinsic-width`  | `contain-intrinsic-inline-size` |

### Other properties

| Physical Property       |  Logical Property            |
| ----------------------- | ---------------------------- |
| `caption-size: top`     | `caption-side: block-start`  |
| `caption-size: bottom`  | `caption-side: block-end`    |
| `caption-size: right`   | `caption-side: inline-end`   |
| `caption-size: left`    | `caption-side: inline-start` |
| `overflow-y`            | `overflow-block`             |
| `overflow-x`            | `overflow-inline`            |
| `overscroll-behavior-x` | `overscroll-behavior-inline` |
| `overscroll-behavior-y` | `overscroll-behavior-block`  |
| `resize: horizontal`    | `resize: inline`             |
| `resize: vertical`      | `resize: block`              |
| `text-align: left`      | `text-align: start`          |
| `text-align: right`     | `text-align: end`            |
