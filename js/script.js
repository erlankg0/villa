document.querySelectorAll('accordion__title').forEach(item =>  {
    item.addEventListener('click', () => {
        // get accordion__content
        const content = item.nextElementSibling;
        // toggle accordion__content
        console.log(content);,
        console.log(item);
    })
    }
)