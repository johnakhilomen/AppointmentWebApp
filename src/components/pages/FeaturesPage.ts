import { Component } from "../Component";
import {HeaderComponent, SubHeaderComponent} from "./App";
import footerContent from "../features/footer/FooterContent";
import Footer from "../features/footer/Footer";
import HeaderEnds from "../features/header/HeaderEnds";
import featureContent from "./featurePageContent";

export class FeaturesPage extends Component
{
  private mainBody = () => {
    
    let elements : HTMLElement[] = [];
      featureContent.forEach(item => {
            elements.push(this.CreateSection(item.icon, "icon", item.title, item.text))
      })
      let mainBodyDiv = this.CreateDivElement(elements, "featuresMainBody");
      return mainBodyDiv;
  }
  constructor(divRoot: HTMLInputElement){
    super("FeaturesPage");
    //let divRoot = document.querySelector("#root") as HTMLInputElement;
    divRoot.innerHTML = "";
    divRoot.appendChild(HeaderComponent);
    divRoot.appendChild(SubHeaderComponent);
    let HeaderEndsComponent =  new HeaderEnds(`Modern scheduling features so you can work less and sell more`,
    ` `).render();
    HeaderEndsComponent.setAttribute("style", "background-image: url(./images/bg2.png)");
    divRoot.appendChild(HeaderEndsComponent);
    divRoot.appendChild(this.mainBody());
    divRoot.appendChild(new Footer(footerContent).render());
  }
} 

