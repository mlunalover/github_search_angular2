import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id = '2fc9d542bbf2247f2a13';
  private client_secret = '8ce949537d0e792022e37e311dca2d989f3cd544';

  constructor(private _http:Http) {
    console.log('github service ready...');
    this.username = '';
    // this.username = 'mlunalover';
  }

  getUser() {
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
        .map(res => res.json())
  }

  getRepos() {
    return this._http.get('http://api.github.com/users/' + this.username + '/repos' + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
        .map(res => res.json())
  }

  updateUser(username:string) {
    this.username = username;
  }

}
