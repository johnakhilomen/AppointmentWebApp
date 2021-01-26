import { Component } from "../../Component";
import { Registration } from "../../pages/Registration";
import {homePage} from "../../config/config";

export class DashboardHeader extends Component
{
    
    render = () : HTMLElement =>
    {
        let header = this.CreateElement("header") as HTMLInputElement;
        header.appendChild(this.CreateAnchor(homePage, "Appointly", "logo"));
        header.setAttribute("style", "padding-left: 5%; width: 90%");
        
        //Create a UL element
        let uList = this.CreateElement("ui") as HTMLUListElement;
        
        //Create button element as single LI
        let signupButton = this.CreateAnchor("", "Log out", "");
        signupButton.onclick = () => {
            history.pushState(null, "", "/logout");
        }
        //Create an LI Element for signup button
        let signUpLiElement = this.CreateElement("li") as HTMLLIElement;
        //append button to LI Element
        signUpLiElement.appendChild(signupButton);
      
        let usernamelI = this.CreateElement("li") as HTMLLIElement;
        usernamelI.appendChild(this.CreateAnchor("","Welcome Username", ""));

        uList.appendChild(usernamelI);
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