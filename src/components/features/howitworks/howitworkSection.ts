import {Component} from "../../Component";

export default class HowitworkSection {

    private _image: any;
    private _sectionHeading: string;
    private _sectionText: string;
    private _component : Component = new Component("Section");
    constructor(image: string, sectionHeading: string, sectionText: string)
    {
        this._image = image;
        this._sectionHeading = sectionHeading;
        this._sectionText = sectionText;
    }
    build = () : HTMLDivElement=> {
        let image = this._component.CreateImage(this._image, "");
        let leftdiv = this._component.CreateDivElement([image], "howitworksectionleft");
        let rightsectionHeading = this._component.CreateH("h2", this._sectionHeading, "", "");
        let rightsectionText = this._component.CreateP(this._sectionText, "", "");
        let rightdiv = this._component.CreateDivElement([rightsectionHeading, rightsectionText], "howitworksectionright");
        let div = this._component.CreateDivElement([leftdiv, rightdiv], "howitworksection");
        
        return div;
    }
}