"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../../Component");
class Testimonial {
    constructor(className, textContent, citer) {
        this.component = new Component_1.Component("Testimonials");
        this.render = () => {
            let blockQuote = this.component.CreateQuote(this._textContent, this._className, this._citer);
            let div = this.component.CreateDivElement([blockQuote], "blockQuoteDiv");
            return div;
        };
        this._className = className;
        this._textContent = textContent;
        this._citer = citer;
    }
}
exports.default = Testimonial;
