import { App } from "./components/pages/App";
import {Dashboard} from "./components/features/dashboard/DashboardPage";
import { FeaturesPage } from "./components/pages/FeaturesPage";
import { HowitworksPage } from "./components/pages/HowitworksPage";
import { Registration } from "./components/pages/Registration";
import { SignInPage } from "./components/pages/SignInPage";

let init = (): void => {
  
  let currentURL : string = window.location.href;
  let routerArray = currentURL.split("/");
  let currentRoute = routerArray[routerArray.length - 1];

  let divRoot = document.querySelector("#root") as HTMLInputElement;
  
  if(currentRoute.includes("features"))
  {
    new FeaturesPage(divRoot);
  }
  else if(currentRoute.includes("signup"))
  {
     new Registration(divRoot);
    //new SignInPage(divRoot);
  }
  else if(currentRoute.includes("login"))
  {
    new SignInPage(divRoot);
  }
  else if(currentRoute.includes("howitworks"))
  {
    new HowitworksPage(divRoot);
  }
  else if (currentRoute.includes("home"))
  {
    new App().render(divRoot);
  }
  else if (currentRoute.includes("dashboard")) 
  {
    new Dashboard(divRoot);
  }
  else  
  {
    //Will render 404 page here later
    new App().render(divRoot);
  }
}

init();

