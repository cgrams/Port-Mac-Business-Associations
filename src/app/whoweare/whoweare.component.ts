import { Component, OnInit, HostListener  } from '@angular/core';

@Component({
  selector: 'app-whoweare',
  templateUrl: './whoweare.component.html',
  styleUrls: ['./whoweare.component.scss']
})
export class WhoweareComponent implements OnInit {

  constructor(){}
  ngOnInit(){}

	whoWeAreOpacity:any = 0;

	@HostListener('window:scroll', ['$event']) 
		    contentEvents(event) {
		    	const scrollPositionSurf = window.pageYOffset;
		    	const endOfSurfSection = 3000;
		    	if((scrollPositionSurf>2250) &&(scrollPositionSurf<endOfSurfSection)){
					this.whoWeAreOpacity = ((scrollPositionSurf-2259) * .0041);
					console.log(scrollPositionSurf);
		    	}else if (scrollPositionSurf>(endOfSurfSection + 1) ){
					this.whoWeAreOpacity = (1+( (endOfSurfSection - scrollPositionSurf)/400 ));
		    	} else if(scrollPositionSurf<2249){
		    		this.whoWeAreOpacity = 0;
		    	}
		    }


}
