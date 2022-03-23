const box = document.querySelector("#box");
const pressed = [];
const secretCode = 'sinan';

window.addEventListener("keyup", (e)=> {
    console.log(e.key);
    pressed.push(e.key);
    console.log(pressed);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
     if (pressed.join('').includes(secretCode)) {
        console.log('DING DING!');
        cornify_add();
        const successMsg = document.createElement("h2");
        successMsg.className = "animate__animated animate__tada";
        successMsg.innerHTML = "Congrats! You already know me";
        box.appendChild(successMsg);
        setTimeout(function() {
            successMsg.remove();
          }, 2500);
    };
});





