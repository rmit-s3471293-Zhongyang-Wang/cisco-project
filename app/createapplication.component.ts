import {Component, EventEmitter, Input, Output, ViewChild,AfterViewInit} from '@angular/core';
import {SubApplication} from './subapplication';


@Component({
	selector:'sub-app-form',
	templateUrl:'./template/create-sub-application-form-template.html'
})
export class ApplicationFormComponent implements AfterViewInit{

    subApp = new SubApplication("","",false);
	public isDisplay:boolean = false;  

	@Output() onUpdated = new EventEmitter();
	@Output() onAddRouter = new EventEmitter();

  constructor () {}

  @ViewChild('unSelected') unselectElRef:any;
  @ViewChild('selected')   selectedElRef:any;

  //TODO use .post to get routers
  unSelectedRouters:string[] = ["R1","R2","R3","R4", "R5", "R6"];
  selectedRouters:string[]  =new Array<string>() ;
  subscriptions:string[] = ["sub1","sub2","sub3"];

	toggle(){
		if(this.isDisplay == false){
			this.isDisplay = true;
		}
		else if(this.isDisplay == true){
			this.isDisplay = false;
		}else{}
	}

	addNewApplication(){
		this.onAddRouter.emit();
	}

/****new added***/ 
    onSubmit(routers: string, subscription:string, on:boolean){
		if(!routers || !subscription|| !on){return;}
	    this.subApp.routerString= routers;
        this.subApp.subscription = subscription;
        this.subApp.on = on;
	
	    //TODO connect with back-end database
	    this.toggle();
	}


   addRouter(){
       let options = this.unselectElRef.nativeElement.options;       
       for(let i=0; i < options.length; i++) {
           if(options[i].selected) {          
               var option:string = this.unSelectedRouters.splice(i,1)[0];
               this.selectedRouters.push(option);
           }
       }
  }

  resetRouter(){
       let options = this.selectedElRef.nativeElement.options;
       for(let i=0; i < options.length; i++) {
           if(options[i].selected) {
               var option:string = this.selectedRouters.splice(i,1)[0];
               this.unSelectedRouters.push(option);
           }
       }

  }

  ngAfterViewInit() {
	//TODO update collecors and policies selection
	/*
		this.getCollectors();
		this.getPolicies();
		*/
    }

}