
export class DocumentCustomEvent 
{
    private evtName : string;
    constructor(evtName: string)
    {
        this.evtName = evtName;
    }
    Create(evtStr: string): CustomEvent 
    {
        //Initialize custom event detail value with value from event target
        var customEvent =  new CustomEvent(this.evtName, { detail : evtStr});
        return customEvent;
    }
}