const text = document.querySelector(".problem2");
console.log(text);
const strText = text.textContent;
console.log(strText);

text.textContent = "";

let strTextIndex = 0;
let charIndex = 0;

const type = () => {
  if (charIndex <= strText.length -1) {
    text.textContent += strText.charAt(charIndex);
    charIndex++;
    setTimeout(type, 250);
  } else {
    setTimeout(erase, 2000);
  }
};

const erase = () => {
  if (charIndex > 0) {
    text.textContent = strText.slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    strTextIndex++;
    if (strTextIndex > strText.length - 1) {
      strTextIndex = 0;
    }
    setTimeout(type, 1000);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 1500);
})







