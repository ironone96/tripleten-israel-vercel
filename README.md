# 🇮🇱 TripleTen IL — Astro/React Project

This project is a **rebuild** of the legacy page [tripleten.co.il](https://tripleten.co.il/), developed using **Astro** and **React components**.

The page is component-based, supports modular styling, and includes external JS-based header and WA widgets.

---

## 🚀 Tech Stack

- ⚡ [Astro](https://astro.build/) — static site generator
- ⚛ [React](https://reactjs.org/) — component-based UI
- 🧠 [TypeScript](https://www.typescriptlang.org/) — type safety
- 🎨 CSS Modules — scoped styling per component
- 🌀 [SwiperJS](https://swiperjs.com/react) — interactive sliders

---

## 📂 Project Structure

```text
src/
  components/         # React components (Hero, Slider, etc.)
  pages/index.astro   # Main page layout

public/
  js/
    israel-landing-header.js  # Header script
    israel-wa-widget.js       # WA widget script
  images/             # Static images

astro.config.mjs
tsconfig.json
package.json
```

## 🧩 Embedded JS Widgets

### 1. 🧭 Header (`public/js/israel-landing-header.js`)

Integrated via `mountHeader`:

```js
mountHeader("#header", "israel", {
   disableBottomPanel: true,
   hideMenu: true,
   tool: "eye",
   onToolClick: () => waWidget.open(),
   actionButton: {
      title: "Explore",
      tagName: "a",
      href: "https://tripleten.com/",
      className: "custom-action-button",
      newTab: true,
   },
});
```

### 2. 🧭 WA Widget (`public/js/israel-wa-widget.js`)

Integrated via `mountWaWidget`:

```js
const waWidget = mountWaWidget("#wa-widget", { fixed: true });
```