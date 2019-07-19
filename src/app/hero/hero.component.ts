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
	transformSwing:any = {first:"30%", second: "20%"};
	@HostListener('window:scroll', ['$event']) 
	    doSomething(event) {
	    	const scrollPosition = window.pageYOffset;
	    	this.scrollPositionNew = scrollPosition/100;
	    	if(scrollPosition>100){ this.cardColor= this.scrollPositionNew ;console.log("cooldddd"); this.transformSwing.first = scrollPosition/3+"%";}
	    }

}
