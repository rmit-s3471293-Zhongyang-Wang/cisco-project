import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ 
	selector: 'select.form-control' 
})export class SelectDirective {

    private selectPicker: HTMLElement;
    constructor(el: ElementRef) {
    	this.selectPicker = el.nativeElement;
    }
    
    @HostListener('mouseenter') onMouseEnter() {
    }
 }