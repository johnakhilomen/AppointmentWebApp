import {Component} from "../../Component";
import subbHeaderContent from "./SubHeaderContent";
export default class SubHeader extends Component
{
    constructor()
    {
        super("SubHeader");
    }

    render = () : HTMLElement => {
        let text1 = this.CreateP(subbHeaderContent.p1, "", "") as HTMLHeadingElement;
        let text2 = this.CreateP(subbHeaderContent.p2, "", "") as HTMLHeadingElement;
        let sectionelement = this.CreateDivElement([text1, text2], "informationbar");
        return sectionelement;
    }
}