export default 
    {
        "headerContent" : [
        {
            title: "Dashboard", 
            icon: "fa fa-home fa-2x",
            evt: ()=> {
                history.pushState(null, "", "");
            }
        },
        {
            title: "Scheduler",
            icon: "fa fa-calendar fa-2x",
            evt: () => {
                //new FeaturesPage();
                history.pushState(null, "", "");
            }
        },
        {
            title: "Account",
            icon: "fa fa-address-card fa-2x",
            evt: () => {
                //new FeaturesPage();
                history.pushState(null, "", "");
            }
        },
        {
            title: "Events",
            icon: "fa fa-folder-open fa-2x",
            evt: () => {
                //new FeaturesPage();
                history.pushState(null, "", "");
            }
        },
        {
            title: "Log out",
            icon: "fa fa-power-off fa-2x",
            evt: () => {
                //new FeaturesPage();
                history.pushState(null, "", "");
            }
        }
    ],

    };

