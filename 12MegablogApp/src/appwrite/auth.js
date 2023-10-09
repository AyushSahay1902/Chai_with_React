import conf from '../conf/conf.js'

import {Client, Account, Id} from "appwrite";

export class AuthServices {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.endpoint)
            .setProject(conf.project);
        this.account = new Account(this.client);

    }
    async createAccount({email, password, name}) {
        try{
            return await this.account.create(Id.unique(),email, password, name);
            if(userAccount) {
                //call another method to create a profile

            }else{
                return userAccount;
            }
        }catch (e){
            throw e;
        }
        
    }

    async login(email, password) {
        try{
            return await this.account.createEmailSession(email, password);
        }catch (e){
            throw e;
        }
    }

    async getCurrentuser() {
        try{
            return await this.account.get();
        }catch (e){
            throw e;
        }
        return null;
    }
    async logout() {
        try{
            return await this.account.deleteSessions('current');
        }catch (e){
            throw e;
        }
    }
}
const AuthServices = new AuthServices();
export default AuthServices;

