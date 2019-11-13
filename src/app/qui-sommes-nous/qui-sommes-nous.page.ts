import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

import { Category } from '../models/category.model';

@Component({
  selector: 'app-qui-sommes-nous',
  templateUrl: './qui-sommes-nous.page.html',
  styleUrls: ['./qui-sommes-nous.page.scss'],
})
export class QuiSommesNousPage {

	categories: Array<Category>;

	current_page: string = "Qui sommes nous ?";
	router: string;
	screen_width: number;
	menu: boolean = false;
	page: any = "blog";

  constructor(	private platform: Platform) {}

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
		this.getRouter();
	}

	getRouter() {
		setTimeout(() => {
			this.router = decodeURI(document.URL.split('/')[document.URL.split('/').length - 1]);
			if (this.router.split("=")[1])
				this.page = this.router.split("=")[1]
			if (this.categories.find(x => x.router === this.router.split("?")[0]))
				this.current_page = this.categories.find(x => x.router === this.router.split("?")[0]).title;
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
		if (this.router && this.router.split("?")[0] === el)
			return true;
		return false;
	}

	onPage(el) {
		if (this.page === el)
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
