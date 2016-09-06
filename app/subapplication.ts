export class SubApplication{
	public routerString:string;

	constructor(public routers:string, public subscription:string, public on:boolean){
         if(routers.length>1){
         	this.routerString = this.routers[0];

         }
         for(let i = 1; i<routers.length; i++){
            this.routerString += "&"+this.routers[i];
         }
	}
}