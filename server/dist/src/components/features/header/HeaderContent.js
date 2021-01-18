"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SignInPage_1 = require("../../pages/SignInPage");
const FeaturesPage_1 = require("../../pages/FeaturesPage");
exports.default = [
    {
        title: "How it works",
        evt: () => {
        }
    },
    {
        title: "Features",
        evt: () => {
            new FeaturesPage_1.FeaturesPage();
        }
    },
    {
        title: "Terms",
        evt: () => {
        }
    },
    {
        title: "Log in",
        evt: () => {
            new SignInPage_1.SignInPage();
        }
    }
];
