# typescript_webpack_boiler_plate
Type Script Setup with WebPack for Web Dev

## Initlaize project dir with typsescript 
```
tsc --init
```

## Initlaize project dir with npm 
```
npm init
```

## Setup dev dependencies
Webpack cli would be use to build with webpack
ts-loader would be used by webpack to compile typescript to javascript
```
npm install webpack webpack-dev webpack-cli ts-loader typescript --save-dev
```

## Create a form input tag
```
let divRoot = document.querySelector("#root") as HTMLInputElement;
let iFormElement : IFormElement;
iFormElement = new FormElement("address", "inputClass", "input", "addressOnChange");
divRoot.appendChild(iFormElement.Input());
```

## Create form tag
```
let mainFormElement : IFormElement;
mainFormElement = new FormElement("newform", "newForm", "submit", "formSubmit");
let elements : any = [iFormElement.Input(), countryFormElement.Input()];
divRoot.appendChild(mainFormElement.Form(elements));
```

## Build and render form 
```
let elementModels: ElementModel[] =
            [
                {
                    id: "username",
                    className: "inputClass",
                    elementType: ElementType.INPUT,
                    dispatcherName: "usernameDispatcher",
                    eventType: "input"
                },
                {
                    id: "fullname",
                    className: "inputClass",
                    elementType: ElementType.INPUT,
                    dispatcherName: "fullnameDispatcher",
                    eventType: "input"
                }
            ]
        let form = new CreateForm("register", "registerClass", "Register", elementModels)
        component.appendChild(form.build());
```