window.addEventListener('DOMContentLoaded', () => {


    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        console.log('Touch');
    });

    box.addEventListener('touchmove', (e) => {
        console.log('Touch_Mooooove');
        console.log(e.targetTouches[0].pageX);
    });


    box.addEventListener('touchend', (e) => {
        console.log('End');
    });

});



function solution(str, ending){
    // TODO: complete
    return str.endsWith(ending);
  }


  console.log(solution('abcde', 'abc'));

  function squareDigits(num){
    let n = ('' + num).split('').map((num) => num * num).join('');

    return typeof(+n);
  }


  console.log(squareDigits(3212)); //9414

  function grow(x){
    let a = 1;
    x.forEach(item => a *= item);
    return a;
}

console.log(grow([1, 2, 3, 4])); //24

console.log(grow([2, 2, 2, 2, 2, 2])); // 64



function User (name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hi friend ${this.name}`)
    }

}
User.prototype.exit = function () {
    console.log(`User ${this.name} exited`)
}

const bohdan = new User ('Bodan', 28);

bohdan.exit();