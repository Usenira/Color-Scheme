const demos = document.querySelectorAll('.demo');
const body = document.querySelector('body');

demos.forEach(function (demo) {
    demo.addEventListener('click', function(e) {
        body.style.backgroundColor = e.target.id;
    })
})