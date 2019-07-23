import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	navBackgoundColorChange:string;
	stickyMajor:string;
	stickyMajor2:string;

	@HostListener('window:scroll', ['$event']) 
	    contentEventsM(event) {
	    	const scrollPosition = window.pageYOffset;
	    	console.log(scrollPosition);
	    	
	    	if(scrollPosition>1){this.navBackgoundColorChange = "#ffffff8c";} else (this.navBackgoundColorChange = "#d2daf738")

	    	if((scrollPosition>950) && (scrollPosition<3550)){this.stickyMajor = "fixed";}
	    		else { this.stickyMajor = "sticky"; }
	    	
	    	if((scrollPosition>2250) && (scrollPosition<4550)){this.stickyMajor2 = "fixed";}
	    		else { this.stickyMajor2 = "sticky"; }				    		
	    }




}
