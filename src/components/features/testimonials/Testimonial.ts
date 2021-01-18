import {Component} from "../../Component";


export default class Testimonial 
{
    private component : Component = new Component("Testimonials");
    private _imageUrl : string;
    private _className : string;
    private _textContent : string;
    private _citer: string;
    constructor(className: string, textContent: string, citer: string, imageUrl: string)
    {
        this._className = className;
        this._textContent = textContent;
        this._citer = citer;
        this._imageUrl = imageUrl;
    }
    render = () : HTMLDivElement => {
         let blockQuote : HTMLQuoteElement = this.component.CreateQuote(this._imageUrl, this._textContent, this._className, this._citer);
         let div : HTMLDivElement = this.component.CreateDivElement([blockQuote], "blockQuoteDiv");
         return div;
    }
}