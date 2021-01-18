"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesPage = void 0;
const Component_1 = require("../Component");
const App_1 = require("./App");
const FooterContent_1 = require("../features/footer/FooterContent");
const Footer_1 = require("../features/footer/Footer");
const HeaderEnds_1 = require("../features/header/HeaderEnds");
const featurePageContent_1 = require("./featurePageContent");
class FeaturesPage extends Component_1.Component {
    constructor() {
        super("FeaturesPage");
        this.mainBody = () => {
            let elements = [];
            featurePageContent_1.default.forEach(item => {
                elements.push(this.CreateSection(item.icon, "icon", item.title, item.text));
            });
            let mainBodyDiv = this.CreateDivElement(elements, "featuresMainBody");
            return mainBodyDiv;
        };
        let divRoot = document.querySelector("#root");
        divRoot.innerHTML = "";
        divRoot.appendChild(App_1.HeaderComponent);
        divRoot.appendChild(App_1.SubHeaderComponent);
        let HeaderEndsComponent = new HeaderEnds_1.default(`Modern scheduling features so you can work less and sell more`, ` `).render();
        HeaderEndsComponent.setAttribute("style", "background-image: url(./images/bg2.png)");
        divRoot.appendChild(HeaderEndsComponent);
        divRoot.appendChild(this.mainBody());
        divRoot.appendChild(new Footer_1.default(FooterContent_1.default).render());
    }
}
exports.FeaturesPage = FeaturesPage;
