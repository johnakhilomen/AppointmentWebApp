"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInPage = void 0;
const Component_1 = require("../Component");
const App_1 = require("./App");
const FooterContent_1 = require("../features/footer/FooterContent");
const Footer_1 = require("../features/footer/Footer");
const Login_1 = require("../features/forms/Login");
class SignInPage {
    constructor() {
        this.formHeader = new Component_1.Component("").CreateH("h2", "Sign in", "", "");
        this.formHeader.setAttribute("style", "text-align: center; margin-top:20px");
        let divRoot = document.querySelector("#root");
        divRoot.innerHTML = "";
        divRoot.appendChild(App_1.HeaderComponent);
        divRoot.appendChild(App_1.SubHeaderComponent);
        divRoot.appendChild(this.formHeader);
        divRoot.appendChild(new Login_1.Login().render());
        divRoot.appendChild(new Footer_1.default(FooterContent_1.default).render());
    }
}
exports.SignInPage = SignInPage;
