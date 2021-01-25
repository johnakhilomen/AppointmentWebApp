import { Component } from "../../Component";
import { ElementType } from "../../../enums/ElementType";
import { ElementModel } from "./ElementModel";
import { CreateForm } from "./CreateForm";
import { FormData } from "./FormData";
import { UsersAgent } from "../../../api/Agents";
import {facebookSignupEvent, googleSignupEvent} from "./SocialSignupEvents";

export class SocialButtons extends Component
{
    render = () : HTMLDivElement => {
        
        let fbbutton = this.CreateElement("button") as HTMLInputElement;
        fbbutton.innerText = "Facebook";
        fbbutton.className = "button button3";
        fbbutton.setAttribute("style", "padding-top: 10px;padding-bottom: 30px");
        fbbutton.addEventListener("click", facebookSignupEvent);
        
        let googlebutton = this.CreateElement("button") as HTMLInputElement;
        googlebutton.innerText = "Google";
        googlebutton.className = "button button3";
        googlebutton.setAttribute("style", "padding-top: 10px;padding-bottom: 30px");
        googlebutton.addEventListener("click", googleSignupEvent);
        let divRoot = this.CreateDivElement([fbbutton, googlebutton], "signup");
        return divRoot;
    }
}