import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { Observable } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-postos',
  templateUrl: './postos.component.html',
  styleUrls: ['./postos.component.scss'],
	animations: [
		trigger('listStagger', [
			transition('* <=> *', [
				query(':enter', [
					style({ opacity: 0, transform: 'translateY(-15px)'}),
					stagger('50ms', animate('550ms ease-out', style({opacity: 1, transform: 'translateY(0px)'})))
				], {optional: true}),
				query(':leave', animate('50ms', style({opacity: 0})), {optional: true})
			])
		])
	]
})
export class PostosComponent implements OnInit {
	
	postos$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
		this.data.getPostos().subscribe(
			data => this.postos$ = data
		);
  }

}
