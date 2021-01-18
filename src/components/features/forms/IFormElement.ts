export interface IFormElement
{
    Input(type: string) : HTMLInputElement;
    Form(buttonText: string, buttonClassName: string, elements: HTMLInputElement[], labels: string[]): HTMLFormElement;
    Button() : HTMLInputElement;
}