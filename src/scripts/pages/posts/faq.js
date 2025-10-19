let faqBox = document.querySelectorAll('.faq .box-container .box');

faqBox.forEach(box => {
    box.onclick = () => {
        let content = box.querySelector('.content');
        let icon = box.querySelector('i');

        if (content.classList.contains('active')) {
            content.classList.remove('active');
        } else {
            document.querySelectorAll('.faq .box-container .box .content')
                .forEach(contents => {
                    contents.classList.remove('active');
                });
            content.classList.add('active');
        }

        if (icon.classList.contains('fa-minus')) {
            icon.classList.replace('fa-minus', 'fa-plus');
        } else {
            document.querySelectorAll('.faq .box-container .box i')
                .forEach(icons => {
                    icons.classList.replace('fa-minus', 'fa-plus');
                });
            icon.classList.replace('fa-plus', 'fa-minus');
        }
    }
})