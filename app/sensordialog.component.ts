import {Component,ElementRef, Renderer} from '@angular/core';

@Component({
    selector:'add-sensor-dialog',
    templateUrl:'./template/new-sensor-dialog-template.html',
 })
export class NewSensorDialogComponent{
	  private el: HTMLElement;

	  constructor(elementRef: ElementRef) {
	  	this.el = elementRef.nativeElement;
	  }
	  
	  showup(){
	  	this.el.style.display ="block";

	  }
	  closeDialog(){
		this.el.style.display = "none";
	  }

	  onSubmit(){
	  	this.closeDialog();
	  }
}
