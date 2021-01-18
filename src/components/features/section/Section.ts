import {Component} from "../../Component";

export default class Section {

    private _icon: any;
    private _iconInlineStyle : string[] = ["style", "text-align:center;"]
    private _sectionHeading: string;
    private _sectionText: string;
    private _divClassname : string;
    private _component : Component = new Component("Section");
    constructor(icon: any, sectionHeading: string, sectionText: string, divClassname: string = "")
    {
        this._icon = icon;
        this._sectionHeading = sectionHeading;
        this._sectionText = sectionText;
        this._divClassname = divClassname;
    }
    build = () : HTMLDivElement=> {
        const {iconName, iconClassName} = this._icon;
        //let sectionIcon = this._component.CreateI(iconName, iconClassName);
        //sectionIcon.setAttribute(this._iconInlineStyle[0], this._iconInlineStyle[1]);
        let sectionIcon = this._component.CreateImage(iconName, iconClassName);
        let sectionHeading = this._component.CreateH("h2", this._sectionHeading, "", "");
        let sectionText = this._component.CreateP(this._sectionText, "", "");
        let section = this._component.CreateDivElement([sectionIcon, sectionHeading, sectionText], this._divClassname);
        
        return section;
    }
}