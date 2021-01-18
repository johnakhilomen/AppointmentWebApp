"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormData = void 0;
const FormData = (form) => {
    const inputs = form.querySelectorAll('input');
    let values = {};
    inputs.forEach(input => {
        values[input.id] = input.value;
    });
    return values;
};
exports.FormData = FormData;
