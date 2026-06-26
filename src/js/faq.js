const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

const question = item.querySelector(".faq-question");
const answer = item.querySelector(".faq-answer");
const icon = item.querySelector(".icon-faq");

question.addEventListener("click", () => {
// закриваємо інші відкриті питання
faqItems.forEach(otherItem => {
    
if (otherItem !== item) {
otherItem.classList.remove("active");
const otherAnswer = otherItem.querySelector(".faq-answer");
otherAnswer.style.maxHeight = null;

const otherIcon = otherItem.querySelector(".icon-faq");
otherIcon.style.transform = "rotate(0deg)";
}
});

// відкриття поточного
item.classList.toggle("active");
if (item.classList.contains("active")) {
answer.style.maxHeight = answer.scrollHeight + "px";

// кристал обертається і світиться
icon.style.transform = "rotate(360deg) scale(1.2)";
} else {
answer.style.maxHeight = null;
icon.style.transform = "rotate(0deg)";
}
});
});