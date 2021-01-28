import { ElementType } from "../../../enums/ElementType";
import { FormElement } from "./FormElement";
import { IFormElement } from "./IFormElement";
import { ElementModel } from "./ElementModel";

export class CreateForm {
    private id: string;
    private className: string;
    private buttonText: string;
    private elements: ElementModel[];
    private labels: string[];
    private options: string[];

    constructor(id: string, className: string, buttonText: string, elements: ElementModel[], labels: string[],  options: string[] = []) {
        this.id = id;
        this.className = className;
        this.buttonText = buttonText;
        this.elements = elements;
        this.labels = labels;
        this.options = options;
    }

    /**
     * This will build a form component
     */
    build = (): HTMLFormElement => {
        let form: IFormElement = new FormElement(this.id, this.className, "submit", "formSubmit");
        let elementsArr: any;

        this.elements.forEach((element) => {
            let input: IFormElement = new FormElement(element.id, element.className, element.eventType, element.dispatcherName);
           //if(element.elementType === ElementType.INPUT_TEXT) {
                /*document.addEventListener(element.dispatcherName, (e) => {
                    let y = e as CustomEvent;
                    console.log(y.detail);
                });*/
                if(element.elementType == ElementType.INPUT_PASSWORD)
                {
                    elementsArr.push(input.Input("password"));
                }
                else if(element.elementType == ElementType.INPUT_CHECKBOX)
                {
                    elementsArr.push(input.Input("checkbox"));
                }
                else if(element.elementType == ElementType.INPUT_RADIO)
                {
                    elementsArr.push(input.Input("radio"));
                }
                else if(element.elementType == ElementType.SELECT)
                {
                    elementsArr.push(form.Select(this.options));
                }
                else
                {
                    elementsArr.push(input.Input("input"));
                }
                
            //}
        });
        return form.Form(this.buttonText, "button button3", elementsArr, this.labels);


    }


}