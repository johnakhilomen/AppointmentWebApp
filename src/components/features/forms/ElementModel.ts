import { ElementType } from "../../../enums/ElementType";

export interface ElementModel 
{
    id: string;
    className: string;
    elementType: ElementType;
    eventType: string;
    dispatcherName: string;
    label: string;
}