import { Component } from "../../Component";
import { Registration } from "../../pages/Registration";
import {homePage} from "../../config/config";
import DashboardContent from "./DashboardContent";

export class DashboardNav extends Component
{
    //private homePage : string = "http://localhost:3000/";
    constructor()
    {
        super("DashboardHeader");
    }
    /**
     * The render function would render the menu, hambugger and nav items 
     * on the <header> HTML elements  
     * 
     */
    render = () : HTMLElement =>
    {
        //Create a UL element
        let uList = this.CreateElement("ul") as HTMLUListElement;

        //Append menu items to UL as LI
        DashboardContent.headerContent.forEach((m)=> {
            //Iterate the menu items and create an li element for each menu item
            let li = this.CreateElement("li") as HTMLLIElement;
            li.className = "has-subnav";
            //Create an anchor element with the title prop
            let anchorEle = this.CreateAnchor("", "");
            let icon = this.CreateI(m.icon, "");
            let span = this.CreateElement("span") as HTMLSpanElement;
            span.textContent = m.title;
            span.className = "nav-text";
            anchorEle.appendChild(icon);
            anchorEle.appendChild(span);
            //Bind the event prop to the onclick of the anchorElement
            anchorEle.onclick = m.evt;
            //Append an anchor element to the li element
            li.appendChild(anchorEle);
            //append the li to the ul element
            uList.appendChild(li);
        });    

    let nav = this.CreateElement("nav") as HTMLElement;
    nav.className = "main-menu";
    nav.appendChild(uList);
    return nav;
    
}

}