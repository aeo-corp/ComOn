import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

import { Category } from '../models/category.model';
import { Folder } from '../models/folder.model';

@Component({
  selector: 'app-a-vous-de-jouer',
  templateUrl: './a-vous-de-jouer.page.html',
  styleUrls: ['./a-vous-de-jouer.page.scss'],
})
export class AVousDeJouerPage {

	categories: Array<Category>;
	folders: Array<Folder>;

	current_page: string = "À vous de jouer";
	router: string;
	screen_width: number;
	menu: boolean = false;

  constructor(	private platform: Platform) { }

	ionViewWillEnter() {
		this.screen_width = Number(localStorage.getItem('screen_width'));
		this.setScreenSize();

		this.categories = [
			{ id: 1, title: "Qui sommes nous ?", router: "qui_sommes_nous", number: 1 },
			{ id: 2, title: "Parlons peu, parlons com", router: "parlons_peu_parlons_com", number: 2 },
			{ id: 3, title: "Com' un air de news", router: "com_un_air_de_news", number: 3 },
			{ id: 4, title: "À vous de jouer", router: "a_vous_de_jouer", number: 4 },
			{ id: 5, title: "La com dans tous ses endroits", router: "la_com_dans_tous_ses_endroits", number: 5 },
			{ id: 6, title: "Un pour tous, tous pour com", router: "un_pour_tous_tous_pour_com", number: 6 },
			{ id: 7, title: "Le saviez-vous ?", router: "le_saviez_vous", number: 7 },
		];

		this.folders = [
			{ id: 1, title: "number 1" },
			{ id: 2, title: "number 2" },
			{ id: 3, title: "number 3" },
			{ id: 4, title: "number 4" },
			{ id: 5, title: "number 5" },
			{ id: 6, title: "number 6" },
			{ id: 7, title: "number 7" },
		];

		this.getRouter();
	}

	getRouter() {
		setTimeout(() => {
			this.router = decodeURI(document.URL.split('/')[document.URL.split('/').length - 1]);
			if (this.categories.find(x => x.router === this.router))
				this.current_page = this.categories.find(x => x.router === this.router).title;
		}, 300)
	}

	setScreenSize() {
		setInterval(() => {
			this.screen_width = this.platform.width();
			localStorage.setItem("screen_width", String(this.screen_width));
			this.setSideMenu();
		}, 300)
	}

	validRouter(el) {
		if (this.router === el)
			return true;
		return false;
	}

	setSideMenu() {
		let content = document.getElementById("page-content");
		if (this.screen_width >= 992) {
			content.style.marginLeft = "400px";
			content.style.width = "calc(100% - 400px)";
			content.style.position = "absolute";
			content.style.top = "0";
		} else {
			content.style.marginLeft = "0px";
			content.style.width = "100%";
			content.style.position = "";
		}
	}

	toggleMenu() {
		this.menu = !this.menu;
		let menu = document.getElementById("menu")
		let menu_icon = document.getElementById("menu-icon")
		if (this.menu) {
			menu_icon.className = "menu-icon-controller rotate-icon-close md hydrated"
			menu.style.left = "0px"
		} else {
			menu_icon.className = "menu-icon-controller rotate-icon-open md hydrated"
			menu.style.left = "-" + menu.clientWidth + "px";
		}
	}

}
