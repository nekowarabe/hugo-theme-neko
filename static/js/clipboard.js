$(() => {
    // add button on code block
    let btnHTML = `<span class="btn-copy tooltipped tooltipped-sw" aria-label="複製"><i class="far fa-clone"></i></span>`;
    $("pre[class*='language-'] code[class*='language-']").before(btnHTML);

    // mouse on
    let clip = new ClipboardJS('.btn-copy', {
        text: (trigger) => trigger.nextElementSibling.innerText
    });
    clip.on('success', (e) => {
        e.trigger.setAttribute('aria-label', "成功！");
        e.clearSelection();
    })
})