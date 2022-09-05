const wrapper = document.querySelector('.btn-block');
const btns = wrapper.querySelectorAll('button');

console.log(btns);

btns[1].classList.add('red');


btns[0].addEventListener('click', (e) => {
    btns[1].classList.toggle('red');
});

// btns.forEach((item) => {
//     item.addEventListener('click', () => {
//         item.classList.toggle('red');
//     });
// });

wrapper.addEventListener('click', (e) => {
    if(e.target && e.target.tagName === "BUTTON") {
        console.log('Hello')
    }
})