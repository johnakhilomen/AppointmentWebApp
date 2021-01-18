"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registration = void 0;
const Component_1 = require("../Component");
const Signup_1 = require("../features/forms/Signup");
const App_1 = require("./App");
const FooterContent_1 = require("../features/footer/FooterContent");
const Footer_1 = require("../features/footer/Footer");
class Registration {
    constructor() {
        this.formHeader = new Component_1.Component("").CreateH("h2", "Sign up", "", "");
        this.formHeader.setAttribute("style", "text-align: center; margin-top:20px");
        let divRoot = document.querySelector("#root");
        divRoot.innerHTML = "";
        divRoot.appendChild(App_1.HeaderComponent);
        divRoot.appendChild(App_1.SubHeaderComponent);
        divRoot.appendChild(this.formHeader);
        //divRoot.appendChild(HeaderEndsComponent);
        divRoot.appendChild(new Signup_1.Signup().render());
        divRoot.appendChild(new Footer_1.default(FooterContent_1.default).render());
    }
}
exports.Registration = Registration;
