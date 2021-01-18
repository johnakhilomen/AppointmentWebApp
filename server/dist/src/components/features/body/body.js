"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Body = void 0;
const Component_1 = require("../../Component");
const GetStarted_1 = require("../getStarted/GetStarted");
const Testimonial_1 = require("../testimonials/Testimonial");
const BodyContent_1 = require("./BodyContent");
class Body extends Component_1.Component {
    constructor() {
        super("Body");
        this.render = () => {
            let upperBodyDivHeading = this.CreateP("Using Appointly is simpler than you think", "", "");
            let br = this.CreateElement("br");
            let hr = this.CreateElement("hr");
            let upperBodyDiv = this.CreateDivElement([upperBodyDivHeading], "upperBody");
            /*let section1 = this.CreateSection("fas fa-seedling", "icon",
            "Close more sales",
            `When prospects can book you at the peak of their interest,
            you'll see up to a 300% increase in conversion rates and closed sales.`
            );
            let section2 = this.CreateSection("far fa-user", "icon",
            "Shorten Your Sales Cycle",
            `Up to 80% time saved from eliminating back-and-forth,
            manual reminders & appointment administration tasks means you'll close sales faster.`
            )
            let section3 = this.CreateSection("far fa-grin-hearts", "icon",
            "Gain Loyal Customers",
            `Your customers & prospects will love the convenience sand simplicity of online booking.
            Boost their confidence in you and stand out from the crowd.`
            )*/
            let element = [];
            BodyContent_1.default.forEach(item => {
                element.push(this.CreateSection(item.icon, "icon", item.title, item.text));
            });
            let mainBodyDiv = this.CreateDivElement(element, "mainBody");
            //Testimonials body section
            const testimonialClassname = "testimonial";
            const testimonialDivClassname = "testimonialDiv";
            const quoteText = `
        Before using Appointlet, our email marketing representatives manually scheduled 1-2 meetings per day. 
        Now, thanks to Appointlet, they are scheduling at least 3-4 meetings per day as they can solely focusing 
        on selling!`;
            let quote1 = new Testimonial_1.default(testimonialClassname, quoteText, "citer1").render();
            let quote2 = new Testimonial_1.default(testimonialClassname, quoteText, "citer2").render();
            let quote3 = new Testimonial_1.default(testimonialClassname, quoteText, "citer3").render();
            let quote4 = new Testimonial_1.default(testimonialClassname, quoteText, "citer4").render();
            let testimonialsBodyDiv = this.CreateDivElement([quote1, quote2], testimonialDivClassname);
            let testimonialsBodyDiv2 = this.CreateDivElement([quote3, quote4], testimonialDivClassname);
            //Get Started section
            let getStarted = new GetStarted_1.default("Get started", "button button3", "Stop losing hot prospects to email overload and start your trial today!").render();
            //Populate body's main div with componentss
            let bodyDiv = this.CreateDivElement([upperBodyDiv, br, hr, mainBodyDiv, br, testimonialsBodyDiv, testimonialsBodyDiv2, br, getStarted]);
            return bodyDiv;
        };
    }
}
exports.Body = Body;
