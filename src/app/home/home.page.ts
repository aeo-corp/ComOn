import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Category } from '../models/category.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	categories: Array<Category>;
	router: string;
	screen_width: number;
	menu: boolean = false;

  constructor(	private platform: Platform) {}

	ionViewWillEnter() {
		this.categories = [
			{ id: 1, title: "Le BTS Com, c'est quoi  ?", router: "présentation", number: 1 },
			{ id: 2, title: "Culture générale", router: "culture_générale", number: 2 },
			{ id: 4, title: "Règles de français", router: "français", number: 3 },
			{ id: 3, title: "Interviews", router: "interviews", number: 4 },
			{ id: 5, title: "Médias", router: "médias", number: 5 },
		];
		this.categories.sort(function(a, b) {
			return a.number - b.number;
		})
		this.router = decodeURI(document.URL.split('/')[document.URL.split('/').length - 1]);
		this.setScreenSize();
	}

	setScreenSize() {
		setInterval(() => {
			this.screen_width = this.platform.width();
		}, 300)
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
