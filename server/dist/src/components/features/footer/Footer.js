"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../../Component");
class Footer {
    constructor(toc) {
        this.component = new Component_1.Component("Footer.js");
        this.render = () => {
            let elements = [];
            if (this._toc) {
                this._toc.forEach(x => {
                    let p = this.component.CreateAnchor(x.href, x.text, x.className);
                    elements.push(p);
                });
            }
            let h2 = this.component.CreateH("h2", "Appointly", "", "");
            let p = this.component.CreateP("Copyright © 2021 Appointly", "", "");
            let tocdiv = this.component.CreateDivElement(elements, "tocDiv");
            let socialdiv = this.component.CreateDivElement([this.component.CreateI("fab fa-facebook-square", ""),
                this.component.CreateI("fab fa-twitter", ""), this.component.CreateI("fab fa-instagram", "")], "socialDiv");
            let textdiv = this.component.CreateDivElement([h2, p], "");
            let div = this.component.CreateDivElement([tocdiv, socialdiv, textdiv], "footerDiv");
            return div;
        };
        this._toc = toc;
    }
}
exports.default = Footer;
