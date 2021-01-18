import { Component } from "../../Component";
import { ElementType } from "../../../enums/ElementType";
import { ElementModel } from "./ElementModel";
import { CreateForm } from "./CreateForm";
import { FormData } from "./FormData";

interface Model 
{
    username?: string
}
export class Signup
{
    public _state : Model = {} as Model;
    private _elementModels: ElementModel[] = [] as ElementModel[];
    private usernameEventBinding = (e: any) => {
        let y = e as CustomEvent;
        console.log(y.detail);
        this._state!.username = y.detail;
    }

    /**
     * 
     * @param e Event for Form's OnSubmitEventHandler
     * Any logic to post form data to some API should go here
     */
    private submitEvent = (e: Event)=> {
        e.preventDefault();
        //console.log(email.value);
        //console.log(password.value);
    
        //const addressValue = document.querySelector("#address") as HTMLInputElement;
        //console.log("Address value is" +addressValue.value);

        let signupFormById = document.querySelector("#signup") as HTMLFormElement;
        let data = FormData(signupFormById);
        console.log(data)
    
    }

    render = () : HTMLFormElement => {
        this._elementModels =
            [
                {
                    id: "fullname",
                    className: "inputClass",
                    elementType: ElementType.INPUT_TEXT,
                    dispatcherName: "fullnameDispatcher",
                    eventType: "input",
                    label: "Fullname"
                },
                {
                    id: "username",
                    className: "inputClass",
                    elementType: ElementType.INPUT_TEXT,
                    dispatcherName: "usernameDispatcher",
                    eventType: "input",
                    label: "Username"
                  
                },
                {
                    id: "password",
                    className: "inputClass",
                    elementType: ElementType.INPUT_PASSWORD,
                    dispatcherName: "passwordDispatcher",
                    eventType: "input",
                    label: "Password"
                }
            ]
        let labels = this._elementModels.map(x=>x.label);
        let form = new CreateForm("signup", "signup", "Sign up", this._elementModels, labels).build();
        form.addEventListener("submit", this.submitEvent);
        document.addEventListener(this._elementModels[0].dispatcherName, this.usernameEventBinding);
        return form;
    }
}