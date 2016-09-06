import {Injectable }     from '@angular/core';
import {Http, Response}  from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {SubApplication} from './subapplication';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class SubscriptionService{
	constructor(private http:Http){}

	addGroup(routers: string[], subscription:string, on:boolean) {

	}

 //add url of json file
	private groupsUrl = '';

	getGroups():Observable<SubApplication[]>{
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