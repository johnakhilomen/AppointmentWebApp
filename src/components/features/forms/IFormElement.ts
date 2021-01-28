export interface IFormElement
{
    Input(type: string) : HTMLInputElement;
    Select(options: string[]) : HTMLSelectElement;
    Form(buttonText: string, buttonClassName: string, elements: HTMLInputElement[], labels: string[]): HTMLFormElement;
    Button() : HTMLInputElement;
}