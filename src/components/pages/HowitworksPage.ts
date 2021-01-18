import { Component } from "../Component";
import {HeaderComponent, SubHeaderComponent} from "./App";
import footerContent from "../features/footer/FooterContent";
import Footer from "../features/footer/Footer";
import HeaderEnds from "../features/header/HeaderEnds";
import HowitworksPageContent from ".//HowitworkPageContent";
import HowitworkSection from "../features/howitworks/howitworkSection";

export class HowitworksPage extends Component
{
  private mainBody = () => {
    let htmlEle : HTMLElement[] = [];
    HowitworksPageContent.forEach(item => {
        htmlEle.push(new HowitworkSection(item.image, item.title, item.text).build());
        htmlEle.push(this.CreateImage("/images/down-arrow.png", "arrow"));
    })
    //remove the last arrow
    htmlEle.splice(htmlEle.length - 1, 1);

    return this.CreateDivElement(htmlEle, "howitworksMainBody");
  }
  constructor(divRoot: HTMLInputElement){
    super("HowitworksPage");
    divRoot.innerHTML = "";
    divRoot.appendChild(HeaderComponent);
    divRoot.appendChild(SubHeaderComponent);
    let HeaderEndsComponent =  new HeaderEnds(`It's simple to use Appointly`,
    ` `).render();
    HeaderEndsComponent.setAttribute("style", "background-image: url(./images/bg2.png)");
    divRoot.appendChild(HeaderEndsComponent);
    divRoot.appendChild(this.mainBody());
    divRoot.appendChild(new Footer(footerContent).render());
  }
} 

