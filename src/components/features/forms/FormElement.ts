import { DocumentCustomEvent } from "../../../eventHandlers/CustomEvent";
import { IDocumentElement } from "./IDocumentElement";
import { IFormElement } from "./IFormElement";
import { ICustomEvent } from "./ICustomEvent";

export class FormElement implements IDocumentElement, IFormElement, ICustomEvent
{
    private id: string;
    private className: string;
    private eventType: string;
    private dispatcherName : string;
    constructor(id: string, className: string, eventType: string, dispatcherName: string)
    {
        this.id = id;
        this.className = className;
        this.eventType = eventType || "";
        this.dispatcherName = dispatcherName;
    }
    Select(options: string[]): HTMLSelectElement {
        let s = this.CreateElement("select") as HTMLSelectElement;
        for(let i = 0; i < options.length; i++)
        {
            let option = this.CreateElement("option") as HTMLOptionElement;
            option.textContent = options[i];
            s.appendChild(option);
        }
       
      return s;
    }

    Button(): HTMLInputElement {
        let newInput = this.CreateElement("button") as HTMLInputElement;
        newInput.id = this.id;
        newInput.className = this.className;
        //newInput.addEventListener(this.eventType, this.InputEvent);
        return newInput;
    }
     
    CreateElement(element: string) : any {
        return document.createElement(element);
    }
    
    Form(buttonText: string, buttonClassName: string, elements: HTMLElement[], labels: string[]): HTMLFormElement {
        let form = this.CreateElement("form") as HTMLFormElement;
        form.id = this.id;
        form.className = this.className;
        elements.forEach((element, i)=>{
            let label : HTMLLabelElement = this.CreateElement("label");
            label.textContent = labels[i];
            form.appendChild(label);
            form.appendChild(element);
        });
        let button = this.CreateElement("button") as HTMLInputElement
        button.innerText = buttonText;
        button.className = buttonClassName;
        button.setAttribute("style", "padding-top: 10px;padding-bottom: 30px")
        form.appendChild(button);
        form.addEventListener(this.eventType, this.FormEvent);
        return form;
    }

    Input = (type: string): HTMLInputElement => {
        //let inputEvt : InputEvent = new InputEvent();    
        let newInput = this.CreateElement("input") as HTMLInputElement;
        newInput.id = this.id;
        newInput.className = this.className;
        newInput.type = type;
        newInput.setAttribute("required", "required");
        newInput.addEventListener(this.eventType, this.InputEvent);
        return newInput;
    }

    InputEvent = (e: Event) : void => {
        //cast evt as HTMLInputElement
        let evt = e.target as HTMLInputElement;
        // Create custom event
        let documentCustomEvent: DocumentCustomEvent = new DocumentCustomEvent(this.dispatcherName);
        //Trigger custom event
        document.dispatchEvent(documentCustomEvent.Create(evt.value));
    }
    
    FormEvent = (e: Event) : void => {
        //cast evt as HTMLInputElement
        let evt = e.target as HTMLInputElement;
        // Create custom event
        let documentCustomEvent: DocumentCustomEvent = new DocumentCustomEvent(this.dispatcherName);
        //Trigger custom event
        document.dispatchEvent(documentCustomEvent.Create(evt.value));
    }
}