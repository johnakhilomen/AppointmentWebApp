import Section from "./features/section/Section";

/**
 * This class has separate functions for creating or generating HTML elements
 */
export class Component 
{
    constructor(name: string)
    {
        console.log(name + " is loaded!");
    }

    CreateElement(element: string) : any {
        return document.createElement(element);
    }
    /**
     * This function creates an H1 element
     * @param text 
     * @param className 
     * @param id 
     */
    CreateH(headtype: string, text: string, className: string, id: string) : HTMLHeadingElement {
        let h1 = this.CreateElement(headtype) as HTMLHeadingElement;
        h1.innerText = text;
        h1.className = className;
        h1.id = id;
        return h1;
    }
   
    /**
     * This function creates an Anchor element
     * @param href 
     * @param text 
     * @param className 
     */
    CreateAnchor (href: string, text: string, className : string = "" ) : HTMLAnchorElement
    {
        let a = this.CreateElement("a") as HTMLAnchorElement;
        a.innerText = text;
        a.href = href;
        a.className = className;
        return a;
    }
    /**
     * This function creates a Button element
     * @param text 
     * @param className 
     */
    CreateButton (text: string = "", className : string = ""): HTMLButtonElement
    {
        let button = this.CreateElement("button") as HTMLButtonElement;
        button.innerText = text;
        button.className = className;
        return button;
    }
   /**
    * This function creates a DIV element
    * @param elements 
    * @param className 
    */
    CreateDivElement (elements: HTMLElement[], className : string = "") : HTMLDivElement
    {
        //Create a div element
        let div = document.createElement("div");
        div.className = className;
        if(!elements)
        {
            console.log("elements array is null or not defined");
        }
        elements.forEach((element)=>{
            div.appendChild(element);
        })
        return div;
    }

    CreateP(text: string, className: string, id: string) : HTMLParagraphElement {
        let p = this.CreateElement("p") as HTMLParagraphElement;
        p.innerText = text;
        p.className = className;
        p.id = id;
        return p;
    }

    /**
     * This Creates a section element using the Section class
     * @param searchIcon 
     * @param className 
     * @param sectionHeading 
     * @param sectionText 
     */
    CreateSection(searchIcon: string, className: string, sectionHeading: string, sectionText: string, divClassname: string = "") : HTMLDivElement{
        let obj = {iconName: searchIcon, iconClassName: className}
        let section = new Section(obj, sectionHeading, sectionText, divClassname).build();
        return section;
    }

    CreateI(name: string, className: string) : HTMLElement
    {
        let i = this.CreateElement("i") as HTMLElement;
        i.className = name + " " + className;
        return i;
    }

    CreateQuote(image: string,text: string, className: string, citerString : string) : HTMLQuoteElement
    {
        let circleImage = this.CreateImage(image, "circular_image");
        let citer : HTMLElement = this.CreateElement("cite");
        citer.textContent = citerString;
        let p : HTMLElement = this.CreateP(text, "", "");
        let blockQuote = this.CreateElement("blockquote") as HTMLQuoteElement;
        blockQuote.className = className;
        let blockDiv = this.CreateDivElement([p, citer], "")
        //blockQuote.appendChild(p);
        //blockQuote.appendChild(citer)
        blockQuote.appendChild(circleImage); 
        blockQuote.appendChild(blockDiv); 
        return blockQuote;
    }

    CreateImage(name: string, className: string) : HTMLImageElement
    {
        let img : HTMLImageElement = this.CreateElement("img");
        img.src = name;
        img.className = className;
        return img;
        
    }
}