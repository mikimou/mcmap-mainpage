import { c as create_ssr_component, v as validate_component, e as escape } from "../../chunks/index2.js";
import "../../chunks/index.js";
/* empty css                       */const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-qtblvf{display:flex;justify-content:space-between}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header class="${"svelte-qtblvf"}">

	


</header>`;
});
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-8o1gnw{display:flex;flex-direction:column;min-height:100vh}main.svelte-8o1gnw{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.svelte-8o1gnw{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}@media(min-width: 480px){footer.svelte-8o1gnw{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let teraz = new Date(), year;
  year = teraz.getFullYear();
  $$result.css.add(css);
  return `<div class="${"app svelte-8o1gnw"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main class="${"svelte-8o1gnw"}">${slots.default ? slots.default({}) : ``}</main>

	<footer class="${"svelte-8o1gnw"}"><p class="${"drac-text drac-text-white"}">${escape(year)} mikimou</p></footer>
</div>`;
});
export {
  Layout as default
};
