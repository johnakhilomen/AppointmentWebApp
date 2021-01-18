import {Component} from "../../Component"
import HeaderEnds from "../header/HeaderEnds";

export default class GetStarted 
{
    private _buttonText: string;
    private _headerText: string;
    private _buttonClassName : string
    private _component: Component = new Component("GetStarted");
    constructor(buttonText: string, buttonClassName : string, headerText: string)
    {
        this._buttonText = buttonText;
        this._headerText = headerText;
        this._buttonClassName = buttonClassName;
    }
    render = () : HTMLDivElement => {
        let header = this._component.CreateH("h1", this._headerText, "", "");
        header.setAttribute("style", "text-align:center");
        let button = this._component.CreateAnchor("", this._buttonText, this._buttonClassName);
        //button.setAttribute("style", "left:25%; position: relative; width: 250px");
        //A div element rendering a h1, button and noCreditCard components (the noCreditCard comes from the HeaderEnds class )
        let noCreditCard = new HeaderEnds().noCreditCard
        noCreditCard.setAttribute("style", "color:black; text-align:center; text-decoration: underline");
        let div = this._component.CreateDivElement([header, button, noCreditCard], "getStarted");
        //div.setAttribute("style", "display: flex; flex-direction: column; justify-content: center");
        return div;
    }
}