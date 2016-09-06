import {Routes, RouterModule } from '@angular/router';
import { PolicyComponent}  from './policy.component';
import { MainTabComponent} from './maintab.component';
import { SubscriptionComponent} from './subscription.component';
import { ApplySubscriptionComponent } from './appsub.component';


const appRoutes: Routes = [
	{
		path:'policy', 
		component: PolicyComponent
	},
	{
		path:'',
		component:MainTabComponent
	},
	{
		path:'subscription',
		component:SubscriptionComponent
	},
	{
		path:'home',
		component:MainTabComponent
	},
	{
		path:'apply-sub',
		component:ApplySubscriptionComponent
	}
];

export const appRoutingProviders:any=[];
export const routing =RouterModule.forRoot(appRoutes);