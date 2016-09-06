import {Injectable} from '@angular/core';
import {Http, Response}  from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';

import {PolicyGroup} from './policygroup';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class CollectorService{
	constructor(private http:Http){}
}