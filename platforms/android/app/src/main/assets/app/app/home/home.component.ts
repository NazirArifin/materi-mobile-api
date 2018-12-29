import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api';
import { Page, EventData } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
	moduleId: module.id,
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers: [ApiService]
})

export class HomeComponent implements OnInit {

	constructor(
		private api: ApiService,
		private page: Page,
		private router: RouterExtensions
	) {
		this.page.actionBarHidden = true;
	}

	mahasiswaList: any[] = [];
	selectedItems: string;
	
	loadMahasiswa() {
		this.api.getMahasiswa('?limit=10&filter[nim]=201552').subscribe(result => {
			this.mahasiswaList = result.data;
		});
	}

	onTap(args: EventData) {
		const npm = this.mahasiswaList[parseInt(args.object.get('id'), 10)].id;
		this.router.navigate(['/detail', npm], {
			transition: {
				name: "flip", duration: 500, curve: 'linear'
			}
		})
	}

	ngOnInit() {
		this.loadMahasiswa();
	}
}