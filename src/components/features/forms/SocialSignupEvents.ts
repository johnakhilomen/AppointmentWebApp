import { UsersAgent } from "../../../api/Agents";

export const facebookSignupEvent = ()=> {
    /*UsersAgent.facebooklogin().
    then((response: any)=>
    {
        console.log(response);
        if(response)
        {
            //we get token from response.token
        }
    })
    .catch((err: any) =>
    {
        console.log(err);
    });*/
    window.location.replace("http://localhost:8000/api/auth/facebook");

};

export const googleSignupEvent = ()=> {
    UsersAgent.googlelogin().
    then((response: any)=>
    {
        console.log(response);
        if(response)
        {
            //we get token from response.token
        }
    })
    .catch((err: any) =>
    {
        console.log(err);
    });

}
