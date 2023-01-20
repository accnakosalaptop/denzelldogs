const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/dogs-licensable.jpg") {
    myImage.setAttribute("src", "images/golden-retrievers.jpg");
  } else {
    myImage.setAttribute("src", "images/dogs-licensable.jpg");
  }
  return mySrc;
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name:");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Dogs are adorable, aren't they ${myName}?`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Dogs are adorable, aren't they ${storedName}?`;
}

myButton.onclick = () => {
    setUserName();
};
