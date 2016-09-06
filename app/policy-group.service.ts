import {Injectable }     from '@angular/core';
import {Http, Response}  from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';

import {PolicyGroup} from './policygroup';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class PolicyGroupService{
	constructor(private http:Http){}
   
    addGroup(name: string, col:string, pol:string) 
    {
    /*
    	if (!name || !col || !pol) { return; }
    	let body = JSON.stringify({ "name":name,"collector":col, "policy":pol });
    	let headers = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: headers });

	   	return this.http.post(this.groupsUrl, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
                    */
     }

    //TODO
    //modify to server url
	private groupsUrl = 'app/policy-groups.json';

	getGroups():Observable<PolicyGroup[]>{
		return this.http.get(this.groupsUrl)
						.map(this.extractData)
						.catch(this.handleError);
	}
	private extractData(res:Response){
		let body = res.json();
		return body.data||{};
	}

	private handleError(error:any){
		let errMsg = (error.message)?error.message:
     		error.status ? `${error.status} - ${error.statusText}` : 'Server error';

     	console.log(errMsg);
     	return Observable.throw(errMsg);
	}
}