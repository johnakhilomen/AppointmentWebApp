"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormElement = void 0;
const CustomEvent_1 = require("../../../eventHandlers/CustomEvent");
class FormElement {
    constructor(id, className, eventType, dispatcherName) {
        this.Input = (type) => {
            //let inputEvt : InputEvent = new InputEvent();    
            let newInput = this.CreateElement("input");
            newInput.id = this.id;
            newInput.className = this.className;
            newInput.type = type;
            newInput.setAttribute("required", "required");
            newInput.addEventListener(this.eventType, this.InputEvent);
            return newInput;
        };
        this.InputEvent = (e) => {
            //cast evt as HTMLInputElement
            let evt = e.target;
            // Create custom event
            let documentCustomEvent = new CustomEvent_1.DocumentCustomEvent(this.dispatcherName);
            //Trigger custom event
            document.dispatchEvent(documentCustomEvent.Create(evt.value));
        };
        this.FormEvent = (e) => {
            //cast evt as HTMLInputElement
            let evt = e.target;
            // Create custom event
            let documentCustomEvent = new CustomEvent_1.DocumentCustomEvent(this.dispatcherName);
            //Trigger custom event
            document.dispatchEvent(documentCustomEvent.Create(evt.value));
        };
        this.id = id;
        this.className = className;
        this.eventType = eventType || "";
        this.dispatcherName = dispatcherName;
    }
    Button() {
        let newInput = this.CreateElement("button");
        newInput.id = this.id;
        newInput.className = this.className;
        //newInput.addEventListener(this.eventType, this.InputEvent);
        return newInput;
    }
    CreateElement(element) {
        return document.createElement(element);
    }
    Form(buttonText, buttonClassName, elements, labels) {
        let form = this.CreateElement("form");
        form.id = this.id;
        form.className = this.className;
        elements.forEach((element, i) => {
            let label = this.CreateElement("label");
            label.textContent = labels[i];
            form.appendChild(label);
            form.appendChild(element);
        });
        let button = this.CreateElement("button");
        button.innerText = buttonText;
        button.className = buttonClassName;
        button.setAttribute("style", "padding-top: 10px;padding-bottom: 30px");
        form.appendChild(button);
        form.addEventListener(this.eventType, this.FormEvent);
        return form;
    }
}
exports.FormElement = FormElement;
