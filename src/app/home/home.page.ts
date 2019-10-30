import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Platform } from '@ionic/angular';

import { Category } from '../models/category.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
	providers: [DatePipe]
})
export class HomePage {

	categories: Array<Category>;
	current_page: string = "Accueil";
	router: string;
	screen_width: number;
	menu: boolean = false;
	img_src: string;

  constructor(	private platform: Platform,
								private datePipe: DatePipe) {}

	ionViewWillEnter() {
		this.setScreenSize();
		this.setDate();
		this.categories = [
			{ id: 1, title: "Le BTS Com, c'est quoi  ?", router: "presentation", number: 1 },
			{ id: 2, title: "Culture générale", router: "culture_generale", number: 2 },
			{ id: 4, title: "Règles de français", router: "francais", number: 3 },
			{ id: 3, title: "Interviews", router: "interviews", number: 4 },
			{ id: 5, title: "Médias", router: "medias", number: 5 },
		];
		this.categories.sort(function(a, b) {
			return a.number - b.number;
		})
		this.router = decodeURI(document.URL.split('/')[document.URL.split('/').length - 1]);
		if (this.categories.find(x => x.router === this.router))
			this.current_page = this.categories.find(x => x.router === this.router).title;
	}

	setScreenSize() {
		setInterval(() => {
			this.screen_width = this.platform.width();
		}, 300)
	}

	setDate() {
		let date = this.datePipe.transform(new Date(), 'MM-dd')
		if (date >= "09-22" && date <= "12-21") { //between 22 Sept. include and 21 Dec. include.
			this.img_src = "autumn";
		} else if (date >= "12-22" || date <= "03-19") { //between 22 Dec. include and 19 March include
			if (date >= "12-24" && date <= "12-26") { //between 24 Dec. include and 26 Dec. include
				this.img_src = "winter2";
			} else {
				this.img_src = "winter";
			}
		} else if (date >= "03-20" && date <= "06-19") { //between 20 March include and 19 june include.
			this.img_src = "spring"
		} else if (date >= "06-20" && date <= "09-21") { //between 20 June include and 20 Sept. include
			this.img_src = "summer"
		}
	}

	validRouter(el) {
		if (this.router === el)
			return true;
		return false;
	}

	toggleMenu() {
		let menu = document.getElementById("menu")
		this.menu = !this.menu;
		if (this.menu) {
			menu.style.left = "-" + menu.clientWidth + "px";
		} else {
			menu.style.left = "0px"
		}
	}

}
