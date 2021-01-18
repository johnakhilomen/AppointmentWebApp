"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../../Component");
class SubHeader extends Component_1.Component {
    constructor() {
        super("SubHeader");
        this.render = () => {
            let text1 = this.CreateP("We are now offering integrations with virtual meeting tools as part of our Free plan", "", "");
            let text2 = this.CreateP("to help make remote work easier during these challenging times.", "", "");
            let sectionelement = this.CreateDivElement([text1, text2], "informationbar");
            return sectionelement;
        };
    }
}
exports.default = SubHeader;
