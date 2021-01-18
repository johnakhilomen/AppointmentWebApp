"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
const Section_1 = require("./features/section/Section");
/**
 * This class has separate functions for creating or generating HTML elements
 */
class Component {
    constructor(name) {
        console.log(name + " is loaded!");
    }
    CreateElement(element) {
        return document.createElement(element);
    }
    /**
     * This function creates an H1 element
     * @param text
     * @param className
     * @param id
     */
    CreateH(headtype, text, className, id) {
        let h1 = this.CreateElement(headtype);
        h1.innerText = text;
        h1.className = className;
        h1.id = id;
        return h1;
    }
    /**
     * This function creates an Anchor element
     * @param href
     * @param text
     * @param className
     */
    CreateAnchor(href, text, className = "") {
        let a = this.CreateElement("a");
        a.innerText = text;
        a.href = href;
        a.className = className;
        return a;
    }
    /**
     * This function creates a Button element
     * @param text
     * @param className
     */
    CreateButton(text = "", className = "") {
        let button = this.CreateElement("button");
        button.innerText = text;
        button.className = className;
        return button;
    }
    /**
     * This function creates a DIV element
     * @param elements
     * @param className
     */
    CreateDivElement(elements, className = "") {
        //Create a div element
        let div = document.createElement("div");
        div.className = className;
        if (!elements) {
            console.log("elements array is null or not defined");
        }
        elements.forEach((element) => {
            div.appendChild(element);
        });
        return div;
    }
    CreateP(text, className, id) {
        let p = this.CreateElement("p");
        p.innerText = text;
        p.className = className;
        p.id = id;
        return p;
    }
    /**
     * This Creates a section element using the Section class
     * @param searchIcon
     * @param className
     * @param sectionHeading
     * @param sectionText
     */
    CreateSection(searchIcon, className, sectionHeading, sectionText) {
        let obj = { iconName: searchIcon, iconClassName: className };
        let section = new Section_1.default(obj, sectionHeading, sectionText).build();
        return section;
    }
    CreateI(name, className) {
        let i = this.CreateElement("i");
        i.className = name + " " + className;
        return i;
    }
    CreateQuote(text, className, citerString) {
        let citer = this.CreateElement("cite");
        citer.textContent = citerString;
        let p = this.CreateP(text, "", "");
        let blockQuote = this.CreateElement("blockquote");
        blockQuote.className = className;
        blockQuote.appendChild(p);
        blockQuote.appendChild(citer);
        return blockQuote;
    }
}
exports.Component = Component;
