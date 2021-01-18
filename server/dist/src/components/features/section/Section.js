"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../../Component");
class Section {
    constructor(icon, sectionHeading, sectionText) {
        this._iconInlineStyle = ["style", "text-align:center;"];
        this._component = new Component_1.Component("Section");
        this.build = () => {
            const { iconName, iconClassName } = this._icon;
            let sectionIcon = this._component.CreateI(iconName, iconClassName);
            sectionIcon.setAttribute(this._iconInlineStyle[0], this._iconInlineStyle[1]);
            let sectionHeading = this._component.CreateH("h2", this._sectionHeading, "", "");
            let sectionText = this._component.CreateP(this._sectionText, "", "");
            let section = this._component.CreateDivElement([sectionIcon, sectionHeading, sectionText]);
            return section;
        };
        this._icon = icon;
        this._sectionHeading = sectionHeading;
        this._sectionText = sectionText;
    }
}
exports.default = Section;
