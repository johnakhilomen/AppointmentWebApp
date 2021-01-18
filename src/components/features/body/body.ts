import {Component} from "../../Component";
import GetStarted from "../getStarted/GetStarted";
import Testimonial from "../testimonials/Testimonial";
import bodyContent from "./BodyContent";
import WhatyoullfindContent from "./WhatyoullfindContent";
import testimonials from "./TestimonialsContent";
export class Body extends Component{
    constructor()
    {
        super("Body")
    }
    render = () : HTMLElement => {
        let upperBodyDivHeading = this.CreateH("h2", "What you will find on Appointly ", "", "");
        //upperBodyDivHeading.setAttribute("style", "margin: 0px auto");
        let optionsdivelements : HTMLDivElement[] = [];
        WhatyoullfindContent.forEach(item => {
            optionsdivelements.push(this.CreateSection(item.icon, "icon", item.title, item.text, "whatyoullfinddivelement"))

        })

        let optiondivs = this.CreateDivElement(optionsdivelements, "whatyoullfinddivs");
        let whatyoullfinddiv = this.CreateDivElement([upperBodyDivHeading, optiondivs], "");
        let upperBodyDiv = this.CreateDivElement([whatyoullfinddiv], "upperBody");
        let element : HTMLElement[] = [];
        bodyContent.forEach(item => {
            element.push(this.CreateSection(item.icon, "icon", item.title, item.text))
        })
        
        let mainBodyDiv = this.CreateDivElement(element, "mainBody")

        //Testimonials body section
        const testimonialClassname = "testimonial";
        const testimonialDivClassname = "testimonialDiv";

        let quote1  = new Testimonial(testimonialClassname, testimonials[0].quote, testimonials[0].citer, testimonials[0].image).render(); 
        let quote2 = new Testimonial(testimonialClassname, testimonials[1].quote, testimonials[1].citer, testimonials[1].image).render(); 
        let quote3 = new Testimonial(testimonialClassname, testimonials[2].quote, testimonials[2].citer, testimonials[2].image).render(); 
        let quote4 = new Testimonial(testimonialClassname, testimonials[3].quote, testimonials[3].citer, testimonials[3].image).render(); 
        let testimonialsBodyDiv = this.CreateDivElement([quote1, quote2], testimonialDivClassname);

        let testimonialsBodyDiv2 = this.CreateDivElement([quote3, quote4], testimonialDivClassname);

        //Get Started section
        let getStarted = new GetStarted("Get started", "button button3", "Stop losing hot prospects to email overload and start your trial today!").render();
        let whatpeopleareSaying = this.CreateH("h2", "What people are saying", "", "");
        whatpeopleareSaying.setAttribute("style","text-align: center");
        //Populate body's main div with components
        let bodyDiv = this.CreateDivElement([mainBodyDiv, this.CreateElement("br"), this.CreateElement("hr"), upperBodyDiv, this.CreateElement("br"), this.CreateElement("hr"), whatpeopleareSaying, this.CreateElement("br"), testimonialsBodyDiv, testimonialsBodyDiv2, this.CreateElement("br"), getStarted])
        return bodyDiv;
    }

}