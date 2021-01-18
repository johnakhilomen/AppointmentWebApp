"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentCustomEvent = void 0;
class DocumentCustomEvent {
    constructor(evtName) {
        this.evtName = evtName;
    }
    Create(evtStr) {
        //Initialize custom event detail value with value from event target
        var customEvent = new CustomEvent(this.evtName, { detail: evtStr });
        return customEvent;
    }
}
exports.DocumentCustomEvent = DocumentCustomEvent;
