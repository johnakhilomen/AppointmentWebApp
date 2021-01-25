export default 
    {
        "headerContent" : [
        {
            title: "Dashboard", 
            evt: ()=> {
                history.pushState(null, "", "");
            }
        },
        {
            title: "Account",
            evt: () => {
                //new FeaturesPage();
                history.pushState(null, "", "");
            }
        }
    ],

    };

