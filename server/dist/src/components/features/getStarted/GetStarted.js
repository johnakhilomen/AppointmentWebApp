"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../../Component");
const HeaderEnds_1 = require("../header/HeaderEnds");
class GetStarted {
    constructor(buttonText, buttonClassName, headerText) {
        this._component = new Component_1.Component("GetStarted");
        this.render = () => {
            let header = this._component.CreateH("h1", this._headerText, "", "");
            header.setAttribute("style", "text-align:center");
            let button = this._component.CreateAnchor("", this._buttonText, this._buttonClassName);
            //button.setAttribute("style", "left:25%; position: relative; width: 250px");
            //A div element rendering a h1, button and noCreditCard components (the noCreditCard comes from the HeaderEnds class )
            let noCreditCard = new HeaderEnds_1.default().noCreditCard;
            noCreditCard.setAttribute("style", "color:black; text-align:center; text-decoration: underline");
            let div = this._component.CreateDivElement([header, button, noCreditCard], "getStarted");
            //div.setAttribute("style", "display: flex; flex-direction: column; justify-content: center");
            return div;
        };
        this._buttonText = buttonText;
        this._headerText = headerText;
        this._buttonClassName = buttonClassName;
    }
}
exports.default = GetStarted;
