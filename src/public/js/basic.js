const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

window.onload = () => {
    const preTags = $$('pre');
    Array.from(preTags).forEach((tag) => {
        tag.classList.add('csharp');
    })
    const codeTags = $$('code');
    Array.from(codeTags).forEach((tag) => {
        hljs.highlightElement(tag);
    });
}