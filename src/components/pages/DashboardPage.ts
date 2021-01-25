import { Component } from "../Component";
import { DashboardHeader } from "../features/header/DashboardHeader";
import SubHeader from "../features/header/SubHeader";
import HeaderEnds from "../features/header/HeaderEnds";
import Footer, { IFooter } from "../features/footer/Footer";
import footerContent from "../features/footer/FooterContent";
import content from "../pages/DashboardContent";
import appContent from "./AppContent";

export const HeaderComponent = new DashboardHeader(content.headerContent).render();
export const SubHeaderComponent = new SubHeader().render();
export const HeaderEndsComponent = new HeaderEnds(appContent.headerEnds, appContent.subText).render();

export class Dashboard extends Component{

    private _footerContent : IFooter[];
    private _divRoot: HTMLInputElement;
    constructor(divRoot: HTMLInputElement)
    {
        super("Dashboard");
        this._footerContent = footerContent;
        this._divRoot = divRoot;

        this._divRoot.appendChild(HeaderComponent);
        this._divRoot.appendChild(this.CreateH("Dashboard", "", "", ""));
        this._divRoot.appendChild(new Footer(this._footerContent).render());
    }

}

