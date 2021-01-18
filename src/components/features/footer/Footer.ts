import {Component} from "../../Component";

export interface IFooter {
    text: string;
    href: string;
    className: string;
}

export default class Footer  
{
    private _toc : IFooter[];
    private component : Component = new Component("Footer.js");
    constructor(toc : IFooter[])
    {
        this._toc = toc;
    }
    render = () => {
        let elements : HTMLElement[] = [];
        if(this._toc)
        {
            this._toc.forEach(x=>{
                let p = this.component.CreateAnchor(x.href, x.text, x.className);
                elements.push(p);
            })
        }
        let h2 = this.component.CreateH("h2", "Appointly", "", "");
        let p = this.component.CreateP("Copyright © 2021 Appointly", "", "");
        let tocdiv = this.component.CreateDivElement(elements, "tocDiv");
        let socialdiv = this.component.CreateDivElement([this.component.CreateI("fab fa-facebook-square", "")
        , this.component.CreateI("fab fa-twitter", ""), this.component.CreateI("fab fa-instagram", "")], "socialDiv");
        let textdiv = this.component.CreateDivElement([h2, p], "");
        let div = this.component.CreateDivElement([tocdiv, socialdiv, textdiv], "footerDiv")
        return div;
    }
}
