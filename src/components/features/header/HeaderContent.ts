import { SignInPage } from "../../pages/SignInPage";
import { FeaturesPage } from "../../pages/FeaturesPage";

export default [
    {
        title: "How it works", 
        evt: ()=> {
            history.pushState(null, "", "/howitworks");
        }
    },
    {
        title: "Features",
        evt: () => {
            //new FeaturesPage();
            history.pushState(null, "", "/features");
        }
    },
    {
        title: "Terms",
        evt: ()=> {
            
        }
    },
    {
        title: "Log in",
        evt: () => {
            history.pushState(null, "", "/login");
        }
    }
];