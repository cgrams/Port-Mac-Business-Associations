import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-contentmajor',
  templateUrl: './contentmajor.component.html',
  styleUrls: ['./contentmajor.component.scss']
})
export class ContentmajorComponent implements OnInit {

	constructor(){}
 	ngOnInit(){}
	surfOpacity1:any = 0;

	@HostListener('window:scroll', ['$event']) 
		    contentEvents(event) {
		    	const scrollPosition = window.pageYOffset;
		    	const endOfAboutSection = 1950;
		    	if((scrollPosition>950) &&(scrollPosition<endOfAboutSection)){
					this.surfOpacity1 = ((scrollPosition-950) * .0041);
					console.log(scrollPosition);
		    	}else if (scrollPosition>(endOfAboutSection + 1) ){
					this.surfOpacity1 = (1+( (endOfAboutSection - scrollPosition)/100 ));
		    	} else if(scrollPosition<949){
		    		this.surfOpacity1 = 0;
		    	}
		    }

}