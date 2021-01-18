"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const Component_1 = require("../../Component");
const Registration_1 = require("../../pages/Registration");
class Header extends Component_1.Component {
    constructor(menu) {
        super("Header");
        this.homePage = "http://127.0.0.1:5500/public";
        /**
         * Navigate to Registration page
         */
        this.renderRegistrationPage = () => {
            new Registration_1.Registration();
        };
        /**
         * The render function would render the menu, hambugger and nav items
         * on the <header> HTML elements
         *
         */
        this.render = () => {
            let header = this.CreateElement("header");
            header.appendChild(this.CreateAnchor(this.homePage, "Appointly", "logo"));
            //We'll create a checkbox which we'd trigger for hambugger menu
            let checkBox = this.CreateElement("input");
            checkBox.type = "checkbox";
            checkBox.id = "nav";
            let label = this.CreateElement("label");
            label.htmlFor = "nav";
            //Append checkbox input on the header element
            header.appendChild(checkBox);
            //append the label element on the header element
            header.appendChild(label);
            //Create a UL element
            let uList = this.CreateElement("ui");
            //Append menu items to UL as LI
            this.menu.forEach((m) => {
                //Iterate the menu items and create an li element for each menu item
                let li = this.CreateElement("li");
                //Create an anchor element with the title prop
                let anchorEle = this.CreateAnchor("#", m.title);
                //Bind the event prop to the onclick of the anchorElement
                anchorEle.onclick = m.evt;
                //Append an anchor element to the li element
                li.appendChild(anchorEle);
                //append the li to the ul element
                uList.appendChild(li);
            });
            //Create button element as single LI
            let signupButton = this.CreateAnchor("#", "Sign up", "button button3");
            signupButton.onclick = () => {
                this.renderRegistrationPage();
            };
            //Create an LI Element for signup button
            let signUpLiElement = this.CreateElement("li");
            //append button to LI Element
            signUpLiElement.appendChild(signupButton);
            //append LI Element to UL Element
            uList.appendChild(signUpLiElement);
            this.nav(header, uList);
            return header;
        };
        this.nav = (header, uList) => {
            let nav = this.CreateElement("nav");
            nav.appendChild(uList);
            header.appendChild(nav);
        };
        this.menu = menu;
    }
}
exports.Header = Header;
