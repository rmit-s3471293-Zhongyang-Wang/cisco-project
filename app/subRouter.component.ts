import {Component,ElementRef, Renderer} from '@angular/core';

@Component({
    selector:'add-router-dialog',
    templateUrl:'./template/new-router-dialog.html',
 })
export class NewRouterComponent{
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

	  onSubmit(name:string, ip:string){
	  	if(!name || !ip){return;}

	  	this.closeDialog();
	  }
}
