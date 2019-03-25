let articleContainer = document.createElement("div")
document.body.appendChild(articleContainer)


let containerLabel = document.createElement("label")

containerLabel.textContent = "";
articleContainer.appendChild(containerLabel);

let inputField = document.createElement("input");
inputField.id = "message";
inputField.placeholder = "enter text here"
articleContainer.appendChild(inputField)




const articleOne = document.createElement("article");
const articleTwo = document.createElement("article");

articleOne.id = "one";
articleTwo.id = "two";
articleOne.innerHTML = "hello";
articleTwo.innerHTML = "hello";

articleContainer.appendChild(articleOne)
articleContainer.appendChild(articleTwo)


inputField.addEventListener("keyup", function () {
    articleOne.textContent = inputField.value;
    articleTwo.textContent = inputField.value;
})