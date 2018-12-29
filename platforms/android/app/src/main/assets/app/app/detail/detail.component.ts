import { Component, OnInit } from '@angular/core';
import { PageRoute } from 'nativescript-angular/router';
import { switchMap } from 'rxjs/operators';
import { ApiService } from '../services/api';
import { Page } from 'tns-core-modules/ui/page/page';


@Component({
	moduleId: module.id,
	selector: 'detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.css'],
	providers: [ApiService]
})

export class DetailComponent implements OnInit {
	npm: number;
	mahasiswa: any;

	constructor(
		private pageRoute: PageRoute,
		private api: ApiService,
		private page: Page
	) {
		this.page.actionBarHidden = true;

		this.pageRoute.activatedRoute.pipe(
			switchMap(activatedRoute => activatedRoute.params)
		).forEach((params) => {
			this.npm = +params['npm'];
		});
	}

	loadMahasiswa() {
		this.api.getMahasiswa('/' + this.npm).subscribe(result => {
			this.mahasiswa = result.data;
		});
	}

	ngOnInit() {
		this.loadMahasiswa();
	}
}