import axios, {AxiosResponse} from "axios";

axios.defaults.baseURL = "http://localhost:8000/api";

const responsebody: any = (response: AxiosResponse) => response.data;

const request: any = {
    get: (url: string) => axios.get(url).then(responsebody),
    post: (url: string, body: {}) => axios.post(url, body).then(responsebody),
    put: (url: string, body: {}) => axios.put(url, body).then(responsebody),
    del: (url: string, body:{}) => axios.delete(url).then(responsebody)
};

export const UsersAgent : any = {
    list: () : Promise<any> => request.get("/"),
    details: (id: string) => request.get(`/${id}`),
    signup: (body: any) => request.post("/users/signup", body),
    login: (body: any) => request.post("/users/login", body),
    facebooklogin: () => request.get("/auth/facebook"),
    googlelogin: () => request.get("/auth/google"),
}