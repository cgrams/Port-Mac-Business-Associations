import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

  constructor(){}
  ngOnInit(){}

	joinfOpacity1:any = 0;
	joinLaz:any ;

	@HostListener('window:scroll', ['$event']) 
		    contentEvents(event) {
		    	const scrollPosition = window.pageYOffset;
		    	const endOfJoinSection = 6000;
		    	if((scrollPosition>3550) &&(scrollPosition<endOfJoinSection)){
					this.joinfOpacity1 = ((scrollPosition-3550) * .0041);
					this.joinLaz = true;
		    	}else if (scrollPosition>(endOfJoinSection + 1) ){
					this.joinfOpacity1 = (1+( (endOfJoinSection - scrollPosition)/200 ));
		    	} else if(scrollPosition<2000){
		    		this.joinfOpacity1 = 0;
		    	}
		    }	

}