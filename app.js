const text = [`I'm a front-end developer with a burning passion for coding`];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
setTimeout(400)
(function type(){
    if(count === text.length){
        count =0
    }
    currentText = text[count]
    letter = currentText.slice(0, ++index)

    document.querySelector('.typing').textContent = letter;

    if(letter.length === currentText.length){
        index = 0;
        count++;
        setTimeout(type, 3000);
    } else {
      setTimeout(type, 100);
    }
}());