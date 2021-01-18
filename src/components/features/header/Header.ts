import { Component } from "../../Component";
import { Registration } from "../../pages/Registration";
import {homePage} from "../../config/config";
export interface IHeaderContent 
{
    title: string, 
    evt: any
}
export class Header extends Component
{
    //private homePage : string = "http://localhost:3000/";
    private menu: IHeaderContent[];
    constructor(menu: IHeaderContent[])
    {
        super("Header");
        this.menu = menu;
    }
    /**
     * The render function would render the menu, hambugger and nav items 
     * on the <header> HTML elements  
     * 
     */
    render = () : HTMLElement =>
    {
        let header = this.CreateElement("header") as HTMLInputElement;
        header.appendChild(this.CreateAnchor(homePage, "Appointly", "logo"));
        //We'll create a checkbox which we'd trigger for hambugger menu
        let checkBox = this.CreateElement("input") as HTMLInputElement;
        checkBox.type = "checkbox";
        checkBox.id = "nav";
        
        let label = this.CreateElement("label") as HTMLLabelElement;
        label.htmlFor = "nav";
        //Append checkbox input on the header element
        header.appendChild(checkBox);
        //append the label element on the header element
        header.appendChild(label);
        //Create a UL element
        let uList = this.CreateElement("ui") as HTMLUListElement;
        //Append menu items to UL as LI
        this.menu.forEach((m)=> {
            //Iterate the menu items and create an li element for each menu item
            let li = this.CreateElement("li") as HTMLLIElement;
            //Create an anchor element with the title prop
            let anchorEle = this.CreateAnchor("", m.title);
            //Bind the event prop to the onclick of the anchorElement
            anchorEle.onclick = m.evt;
            //Append an anchor element to the li element
            li.appendChild(anchorEle);
            //append the li to the ul element
            uList.appendChild(li);
        });    
      
        //Create button element as single LI
        let signupButton = this.CreateAnchor("", "Sign up", "button button3");
        signupButton.onclick = () => {
            history.pushState(null, "", "/signup");
        }
        //Create an LI Element for signup button
        let signUpLiElement = this.CreateElement("li") as HTMLLIElement;
        //append button to LI Element
        signUpLiElement.appendChild(signupButton);
        //append LI Element to UL Element
        uList.appendChild(signUpLiElement)
        this.nav(header, uList);
        return header;
    }

    private nav = (header: HTMLHeadingElement, uList: HTMLUListElement) : void => {
        let nav = this.CreateElement("nav") as HTMLInputElement;
        nav.appendChild(uList);
        header.appendChild(nav);
    }
}