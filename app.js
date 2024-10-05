// Para solucionar mi problema con la jerga, me he apoyado en Chatgpt.

const excuse = document.querySelector("#excuse");
const button = document.querySelector("#generate-btn");

const updateExcuse = () => { excuse.innerHTML = generateExcuse(); };
window.onload = () => { updateExcuse(); };
button.addEventListener("click", updateExcuse);

const phrases = [
    ["The dog", "My grandma", "The mailman", "My bird"],
    ["ate", "peed", "crushed", "broke"],
    ["my homework", "my phone", "the car"],
    ["before the class", "when I was sleeping", "while I was exercising", "during my lunch", "while I was praying"]
];

const getValue = arr => arr[Math.floor(Math.random() * arr.length)];
const generateExcuse = () => phrases.map(getValue).join(" ");