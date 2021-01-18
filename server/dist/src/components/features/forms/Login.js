"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const ElementType_1 = require("../../../enums/ElementType");
const CreateForm_1 = require("./CreateForm");
const FormData_1 = require("./FormData");
class Login {
    constructor() {
        this._elementModels = [];
        this.usernameEventBinding = (e) => {
            let y = e;
            //console.log(y.detail);   
        };
        /**
         *
         * @param e Event for Form's OnSubmitEventHandler
         * Any logic to post form data to some API should go here
         */
        this.submitEvent = (e) => {
            e.preventDefault();
            //console.log(email.value);
            //console.log(password.value);
            //const addressValue = document.querySelector("#address") as HTMLInputElement;
            //console.log("Address value is" +addressValue.value);
            let signupFormById = document.querySelector("#signin");
            let data = FormData_1.FormData(signupFormById);
            console.log(data);
        };
        this.render = () => {
            this._elementModels =
                [
                    {
                        id: "username",
                        className: "inputClass",
                        elementType: ElementType_1.ElementType.INPUT_TEXT,
                        dispatcherName: "usernameDispatcher",
                        eventType: "input",
                        label: "Username"
                    },
                    {
                        id: "password",
                        className: "inputClass",
                        elementType: ElementType_1.ElementType.INPUT_PASSWORD,
                        dispatcherName: "passwordDispatcher",
                        eventType: "input",
                        label: "Password"
                    }
                ];
            let labels = this._elementModels.map(x => x.label);
            let form = new CreateForm_1.CreateForm("signin", "signup", "Sign in", this._elementModels, labels).build();
            form.addEventListener("submit", this.submitEvent);
            document.addEventListener(this._elementModels[0].dispatcherName, this.usernameEventBinding);
            return form;
        };
    }
}
exports.Login = Login;
