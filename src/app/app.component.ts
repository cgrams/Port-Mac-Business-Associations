import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	navBackgoundColorChange:string;
	stickyMajor:string;

	@HostListener('window:scroll', ['$event']) 
	    contentEventsM(event) {
	    	const scrollPosition = window.pageYOffset;
	    	console.log(scrollPosition+"mmmmm");
	    	
	    	if(scrollPosition>1){this.navBackgoundColorChange = "#ffffff8c";} else (this.navBackgoundColorChange = "#d2daf738")

	    	if(scrollPosition>950){this.stickyMajor = "fixed";}
	    		else if(scrollPosition<=951){
	    			this.stickyMajor = "sticky";
	    		}
	    }




}
