import { Component } from "../../Component";
import footerContent from "../footer/FooterContent";
import { DashboardNav } from "./DashboardNav";
import { DashboardHeader } from "./DashboardHeader";
import {SetAvailabilityPage} from "./pages/SetAvailabilityPage"
export class Dashboard extends Component{

    private _divRoot: HTMLInputElement;
    constructor(divRoot: HTMLInputElement)
    {
        super("Dashboard");
        this._divRoot = divRoot;
        this._divRoot.appendChild(new DashboardHeader("").render());
        let div = this.CreateElement("div") as HTMLDivElement;
        div.className = "area";
        this._divRoot.appendChild(div);
        this._divRoot.appendChild(new DashboardNav().render());
        this._divRoot.appendChild(new SetAvailabilityPage("").render());
        
    }

}

