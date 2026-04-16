import api from "./api";

class AuthService {
    // inscription
    async register(data){
        const res = await api.post("/user", data);
        return res.data;
    }

    //connexion a
    async  login ( login,mdp){
        //serveur node
        const res = await api.post("/user/login", { login,mdp });

        //on stocke le token
        localStorage.setItem("token", res.data.token);

        //on stocke l'utilisateur connecté
        localStorage.setItem("user", JSON.stringify(res.data.user));

        return res .data;
    }

   
 logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
 }

 getToken(){
    return localStorage.getItem("token");
 }

 getUser(){
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
 }

 isConnected(){
    return !! this.getToken();
 }
}   
export default  new AuthService();