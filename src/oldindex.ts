import { FormElement } from "./components/features/forms/FormElement";
import { IFormElement } from "./components/features/forms/IFormElement";

/*const form = document.querySelector('form')!;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = formData(form);
  console.log(data);
});
*/
let hTag = document.querySelector("h1")!;
console.log(hTag.innerText);

//getting forms by class
let formByClass = document.querySelector(".loginForm") as HTMLFormElement;
console.log(formByClass.children);

//input fields
let email = document.querySelector("#email_login") as HTMLInputElement;
let password = document.querySelector("#password") as HTMLInputElement;

formByClass.addEventListener("submit", (e: Event)=> {
    e.preventDefault();
    console.log(email.value);
    console.log(password.value);

    const addressValue = document.querySelector("#address") as HTMLInputElement;
    console.log("Address value is" +addressValue.value);

})

let divRoot = document.querySelector("#root");

/*let newInput = document.createElement("input");
newInput.id = "username";
newInput.className= "inputClass";
newInput.addEventListener("onChange", (e)=> {
  console.log(e.target);
})*/

let iFormElement : IFormElement;
//iFormElement = new FormElement("address", "inputClass", "input", "addressOnChange");
//divRoot.appendChild(iFormElement.Input());

let countryFormElement : IFormElement;
//countryFormElement = new FormElement("country", "inputClass", "input", "countryOnChange");
//divRoot.appendChild(countryFormElement.Input());

let mainFormElement : IFormElement;
//mainFormElement = new FormElement("newform", "newForm", "submit", "formSubmit");
//let elements : any = [iFormElement.Input(), countryFormElement.Input()];
//divRoot.appendChild(mainFormElement.Form("Register", elements));

//let y = new InputEvent();
document.addEventListener("addressOnChange", (e)=>{
  let y = e as CustomEvent;
  console.log(y.detail);
});


//let y = new InputEvent();
document.addEventListener("countryOnChange", (e)=>{
  let y = e as CustomEvent;
  console.log(y.detail);
});


