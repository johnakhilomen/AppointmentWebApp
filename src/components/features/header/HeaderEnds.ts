import {Component} from "../../Component";

export default class HeaderEnds extends Component
{
    private _mainText: string;
    private _subText: string;
    public noCreditCard : HTMLParagraphElement = this.CreateP("No credit card required", "", "");
    constructor(mainText?: string, subText?: string)
    {
        super("HeaderEnds");
        this._mainText = mainText!;
        this._subText = subText!;
        this.noCreditCard.setAttribute("style", "color:white; letter-spacing: 1px; text-decoration: underline");      
    }

    render = () : HTMLElement =>{
        //Create h1 element
        let mainText = this.CreateH("h1", this._mainText, "whiteHeader", "");
        //Create paragraph element
        let subText = this.CreateP(this._subText, "whiteHeader", "");
        let br = this.CreateElement("br");
        //Create sign up button
        let signupButton = this.CreateAnchor("#", "Sign up", "button button3");
        //Create a paragraph element
        //this.noCreditCard = this.CreateP("No credit card required", "", "");
        //Set inline style for paragraph element
        //this.noCreditCard.setAttribute("style", "color:white; letter-spacing: 1px; text-decoration: underline");
        //create div element
        let headerEndsContainer = this.CreateDivElement([mainText, br, subText, br, signupButton, br, this.noCreditCard], "headerEndsContainer");
        let sectionelement = this.CreateDivElement([headerEndsContainer], "headerEnds");
        return sectionelement;
    }
}

