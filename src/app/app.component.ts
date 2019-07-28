import { Component, HostListener } from '@angular/core';
import { ScrollToService } from 'ng2-scroll-to-el';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	navBackgoundColorChange:string;
	stickyMajor:string;
	stickyMajor2:string;
	stickyMajor3:string;
	stickyMajor33:string ="none";
	@HostListener('window:scroll', ['$event']) 
	    contentEventsM(event) {
	    	const scrollPosition = window.pageYOffset;
	    	console.log(scrollPosition);
	    	
	    	if(scrollPosition>1){this.navBackgoundColorChange = "#ffffff8c";} else (this.navBackgoundColorChange = "#d2daf738")

	    	if((scrollPosition>950) && (scrollPosition<2250)){this.stickyMajor = "fixed"; }
	    		else { this.stickyMajor = "sticky"; }
	    	
	    	if((scrollPosition>2250) && (scrollPosition<3450)){this.stickyMajor2 = "fixed";  }
	    		else { this.stickyMajor2 = "sticky"; }

	    	if((scrollPosition>3450) && (scrollPosition<5550)){this.stickyMajor3 = "fixed"; this.stickyMajor33 = "block";}
	    		else { this.stickyMajor3 = "sticky"; this.stickyMajor33 ="none";}					    		
	    }

	constructor(private scrollService: ScrollToService) {}
scrollToTop(element) {
        this.scrollService.scrollTo(element);
    }

}
