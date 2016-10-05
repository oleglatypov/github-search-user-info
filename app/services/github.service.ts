import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username: any;
    private client_id: any = 'd5164a53b459bc80abc1';
    private client_secret: any = '7b2077b2fe3a3a6fbddadf342fbc0336cba8a1bf';

    constructor(private _http: Http){
        console.log('Github service ready...');
        this.username = 'oleglatypov'
    }

    getUser(){
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
        .map(res => res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
        .map(res => res.json());
    }

    updateUser(username: string){
        this.username = username;
    }

}


