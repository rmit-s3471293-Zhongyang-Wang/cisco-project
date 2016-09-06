export class Subscription{
	constructor(
		public name:string,
		public destinationGroup:string,
		public sensorGroup:string,
		public interval: number
	){}
}