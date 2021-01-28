import { ElementType } from "../../../../enums/ElementType";
import { Component } from "../../../Component";
import { CreateForm } from "../../forms/CreateForm";
import { ElementModel } from "../../forms/ElementModel";
import { FormElement } from "../../forms/FormElement";

export class SetAvailabilityPage extends Component{

    private _elementModels: ElementModel[] = [] as ElementModel[];
    render = () : HTMLFormElement => {
        this._elementModels =
            [
                {
                    id: "availableHoursStart",
                    className: "inputClass",
                    elementType: ElementType.SELECT,
                    dispatcherName: "availableHoursStartDispatcher",
                    eventType: "input",
                    label: "From"
                },
                {
                    id: "availableHoursEnd",
                    className: "inputClass",
                    elementType: ElementType.INPUT_TEXT,
                    dispatcherName: "availableHoursEndDispatcher",
                    eventType: "input",
                    label: "To"
                },
                {
                    id: "mondaysRadio",
                    className: "inputClass",
                    elementType: ElementType.INPUT_CHECKBOX,
                    dispatcherName: "mondaysRadioDispatcher",
                    eventType: "input",
                    label: "Mondays"
                },
                {
                    id: "tuesdaysRadio",
                    className: "inputClass",
                    elementType: ElementType.INPUT_CHECKBOX,
                    dispatcherName: "tuesdaysRadioDispatcher",
                    eventType: "input",
                    label: "Tuesdays"
                },
                {
                    id: "wednessdaysRadio",
                    className: "inputClass",
                    elementType: ElementType.INPUT_CHECKBOX,
                    dispatcherName: "wednessdaysRadioDispatcher",
                    eventType: "input",
                    label: "Wednessdays"
                },
                {
                    id: "thursdaysRadio",
                    className: "inputClass",
                    elementType: ElementType.INPUT_CHECKBOX,
                    dispatcherName: "thursdaysRadioDispatcher",
                    eventType: "input",
                    label: "Thursdays"
                },
                {
                    id: "fridaysRadio",
                    className: "inputClass",
                    elementType: ElementType.INPUT_CHECKBOX,
                    dispatcherName: "fridaysRadioDispatcher",
                    eventType: "input",
                    label: "Fridays"
                },
                {
                    id: "saturdaysRadio",
                    className: "inputClass",
                    elementType: ElementType.INPUT_CHECKBOX,
                    dispatcherName: "saturdaysRadioDispatcher",
                    eventType: "input",
                    label: "Saturdays"
                },
                {
                    id: "sundaysRadio",
                    className: "inputClass",
                    elementType: ElementType.INPUT_CHECKBOX,
                    dispatcherName: "sundaysRadioDispatcher",
                    eventType: "input",
                    label: "Sundays"
                }
                
            ]
        let labels = this._elementModels.map(x=>x.label);
        let form = new CreateForm("save", "signup", "Save", this._elementModels, labels, ["1", "2"]).build();
        //form.addEventListener("submit", this.submitEvent);
        return form;
    }

}