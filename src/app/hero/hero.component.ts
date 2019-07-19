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
	transformSwing:any = {first:"0%", second: "0%"};



	@HostListener('window:scroll', ['$event']) 
	    doSomething(event) {
	    	const scrollPosition = window.pageYOffset;
	    	this.scrollPositionNew = scrollPosition/10;
	    	this.cardColor= this.scrollPositionNew ;
	    }

}
