"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateForm = void 0;
const ElementType_1 = require("../../../enums/ElementType");
const FormElement_1 = require("./FormElement");
class CreateForm {
    constructor(id, className, buttonText, elements, labels) {
        /**
         * This will build a form component
         */
        this.build = () => {
            let form = new FormElement_1.FormElement(this.id, this.className, "submit", "formSubmit");
            let elementsArr = [];
            this.elements.forEach((element) => {
                let input = new FormElement_1.FormElement(element.id, element.className, element.eventType, element.dispatcherName);
                //if(element.elementType === ElementType.INPUT_TEXT) {
                /*document.addEventListener(element.dispatcherName, (e) => {
                    let y = e as CustomEvent;
                    console.log(y.detail);
                });*/
                if (element.elementType == ElementType_1.ElementType.INPUT_PASSWORD) {
                    elementsArr.push(input.Input("password"));
                }
                else if (element.elementType == ElementType_1.ElementType.INPUT_CHECKBOX) {
                    elementsArr.push(input.Input("checkbox"));
                }
                else if (element.elementType == ElementType_1.ElementType.INPUT_RADIO) {
                    elementsArr.push(input.Input("radio"));
                }
                else {
                    elementsArr.push(input.Input("input"));
                }
                //}
            });
            return form.Form(this.buttonText, "button button3", elementsArr, this.labels);
        };
        this.id = id;
        this.className = className;
        this.buttonText = buttonText;
        this.elements = elements;
        this.labels = labels;
    }
}
exports.CreateForm = CreateForm;
