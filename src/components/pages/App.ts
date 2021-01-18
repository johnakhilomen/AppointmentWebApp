import { Component } from "../Component";
import { Header } from "../features/header/Header";
import SubHeader from "../features/header/SubHeader";
import HeaderEnds from "../features/header/HeaderEnds";
import { Body } from "../features/body/body";
import Footer, { IFooter } from "../features/footer/Footer";
import footerContent from "../features/footer/FooterContent";
import { Signup } from "../features/forms/Signup";
import { SignInPage } from "./SignInPage";
import headerContent from "../features/header/HeaderContent";
import appContent from "./AppContent";

export const HeaderComponent = new Header(headerContent).render();
export const SubHeaderComponent = new SubHeader().render();
export const HeaderEndsComponent = new HeaderEnds(appContent.headerEnds, appContent.subText).render();
export class App extends Component{

    private _footerContent : IFooter[];
    constructor()
    {
        super("App");
        this._footerContent = footerContent;
    }

    render = (component: HTMLInputElement): void => {
        component.appendChild(HeaderComponent);
        component.appendChild(SubHeaderComponent);
        component.appendChild(HeaderEndsComponent);
        component.appendChild(new Body().render());
        component.appendChild(new Footer(this._footerContent).render());

    }

}