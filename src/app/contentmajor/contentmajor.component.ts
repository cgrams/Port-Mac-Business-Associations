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

		    	if(scrollPosition>950){
					this.surfOpacity1 = ((scrollPosition-950) * .0041);
		    	} else if(scrollPosition<949){
		    		this.surfOpacity1 = 0;
		    	}
		    }

}