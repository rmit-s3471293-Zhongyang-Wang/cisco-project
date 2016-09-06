import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Subscription} from './subscription';

@Component({
	selector:'sub-form',
	templateUrl:'./template/create-sub-form.html'
})
export class SubscriptionFormComponent{

	subscription = new Subscription("","","",0);

	//TODO initialize groups and sensors by back-end or services
	public desGroups:string[] = ["group1","group2","group3", "group4"];
	public senGroups :string[] = ["sensor1","sensor2","sensor3","sensor4"];

	public isDisplay:boolean = false;


    @ViewChild('newSubDest')   destSelectElRef:any;
    @ViewChild('newSubSensor')   senSelectElRef:any;

	@Output() onUpdated = new EventEmitter();
	@Output() onAddSensor = new EventEmitter();

	toggle(){
		if(this.isDisplay == false){
			this.isDisplay = true;
		}
		else if(this.isDisplay == true){
			this.isDisplay = false;
		}else{}
	}

	showup(){
		this.isDisplay = true;
	}

	addNewSensor(){
	    this.onAddSensor.emit();
	}

	/***New added***/ 
	onSubmit(name:string ,destGroup:string, sensorGroup:string, interval:number){
		if(!name || !destGroup|| !sensorGroup|| !interval){return;}
	   this.subscription.name = name;
	   this.subscription.destinationGroup = destGroup;
   	   this.subscription.sensorGroup = sensorGroup;
	   this.subscription.interval = interval;

	    //TODO connect with back-end database
	   this.toggle();
	}	


	setDefaultValue(name:string ,destGroup:string, sensorGroup:string, interval:number){
	   /* set model */
	   this.subscription.name = name;
	   this.subscription.destinationGroup = destGroup;
   	   this.subscription.sensorGroup = sensorGroup;
	   this.subscription.interval = interval;

	   /* set selection */
	   let options = this.destSelectElRef.nativeElement.options;       
       for(let i=0; i < options.length; i++) {
           if(options[i].value == destGroup) {          
               options[i].selected = true;
           }
       }


       options = this.senSelectElRef.nativeElement.options;       
       for(let i=0; i < options.length; i++) {
           if(options[i].value == sensorGroup) {          
               options[i].selected = true;
           }
       }


	}

	}