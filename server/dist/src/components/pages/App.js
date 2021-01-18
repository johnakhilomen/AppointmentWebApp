"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = exports.HeaderEndsComponent = exports.SubHeaderComponent = exports.HeaderComponent = void 0;
const Component_1 = require("../Component");
const Header_1 = require("../features/header/Header");
const SubHeader_1 = require("../features/header/SubHeader");
const HeaderEnds_1 = require("../features/header/HeaderEnds");
const body_1 = require("../features/body/body");
const Footer_1 = require("../features/footer/Footer");
const FooterContent_1 = require("../features/footer/FooterContent");
const HeaderContent_1 = require("../features/header/HeaderContent");
exports.HeaderComponent = new Header_1.Header(HeaderContent_1.default).render();
exports.SubHeaderComponent = new SubHeader_1.default().render();
exports.HeaderEndsComponent = new HeaderEnds_1.default(`Schedule your next meeting without the email ping pong`, `Appointlet helps you streamline your appointment scheduling so you can accomplish more`).render();
class App extends Component_1.Component {
    constructor() {
        super("App");
        this.render = (component) => {
            component.appendChild(exports.HeaderComponent);
            component.appendChild(exports.SubHeaderComponent);
            component.appendChild(exports.HeaderEndsComponent);
            component.appendChild(new body_1.Body().render());
            component.appendChild(new Footer_1.default(this._footerContent).render());
        };
        this._footerContent = FooterContent_1.default;
    }
}
exports.App = App;
