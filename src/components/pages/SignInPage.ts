import { Component } from "../Component";
import { Signup } from "../features/forms/Signup";
import {HeaderComponent, SubHeaderComponent, HeaderEndsComponent} from "./App";
import footerContent from "../features/footer/FooterContent";
import Footer from "../features/footer/Footer";
import { Login } from "../features/forms/Login";
import { SocialButtons } from "../features/forms/SocialButtons";

export class SignInPage 
{
  private formHeader : HTMLHeadingElement = new Component("").CreateH("h2", "Sign in", "", "");
  constructor(divRoot: HTMLInputElement){
    this.formHeader.setAttribute("style", "text-align: center; margin-top:20px")
    //let divRoot = document.querySelector("#root") as HTMLInputElement;
    divRoot.innerHTML = "";
    divRoot.appendChild(HeaderComponent);
    divRoot.appendChild(SubHeaderComponent);
    divRoot.appendChild(this.formHeader);
    divRoot.appendChild(new Login().render());
    divRoot.appendChild(new SocialButtons("").render());
    divRoot.appendChild(new Footer(footerContent).render());
  }
} 

