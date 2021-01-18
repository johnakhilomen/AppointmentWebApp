import { Component } from "../Component";
import { Signup } from "../features/forms/Signup";
import {HeaderComponent, SubHeaderComponent, HeaderEndsComponent} from "./App";
import footerContent from "../features/footer/FooterContent";
import Footer from "../features/footer/Footer";
export class Registration 
{
  private formHeader : HTMLHeadingElement = new Component("").CreateH("h2", "Sign up", "", "");
  constructor(divRoot: HTMLInputElement){
    this.formHeader.setAttribute("style", "text-align: center; margin-top:20px")
    //let divRoot = document.querySelector("#root") as HTMLInputElement;
    divRoot.innerHTML = "";
    divRoot.appendChild(HeaderComponent);
    divRoot.appendChild(SubHeaderComponent);
    divRoot.appendChild(this.formHeader);
    //divRoot.appendChild(HeaderEndsComponent);
    divRoot.appendChild(new Signup().render());
    divRoot.appendChild(new Footer(footerContent).render());
  }
} 

