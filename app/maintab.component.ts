import {Component} from '@angular/core';

@Component({
    selector:'main-tab',
    templateUrl :'./template/main-tab-template.html'
})
export class MainTabComponent{

    showPolicy: boolean = true;
    showSubcription: boolean = false;
    drivenLabel: String;
  
    ChangeDriven() {
        this.showPolicy = !this.showPolicy;
        this.showSubcription = !this.showSubcription;

        if (this.showPolicy == true) {
            this.drivenLabel = "System is now Policy Driven"
        } else {
           this.drivenLabel = "System is now Model Driven" 
        }
    }
    
}

