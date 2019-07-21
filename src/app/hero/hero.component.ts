import { Component, OnInit, HostListener } from '@angular/core';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor(){}

  ngOnInit(){}
	
	cardColor:any = 1;
	scrollPositionNew:any;
	scrollPositionNew2:any;	
	transformSwing:any = {first:"10%", second: "30%"};
	color:any = "1px 8px 6px #a5a5a5";


	@HostListener('window:scroll', ['$event']) 
	    heroEvents(event) {
	    	const scrollPosition = window.pageYOffset;
	    	this.scrollPositionNew = scrollPosition/5;
	    	this.scrollPositionNew2 = (scrollPosition/10)+3;	    	
	    	this.cardColor= this.scrollPositionNew ;
	    	this.color = this.scrollPositionNew + "px " + " " + this.scrollPositionNew2 + "px" + " 4px" + " #a5a5a5";
	    }

}
