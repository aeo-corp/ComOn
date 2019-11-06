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
		this.screen_width = Number(localStorage.getItem('screen_width'));
		this.setScreenSize();
		this.setDate();
		this.categories = [
			{ id: 1, title: "Qui sommes nous ?", router: "qui_sommes_nous", number: 1 },
			{ id: 2, title: "Parlons peu, parlons com", router: "parlons_peu_parlons_com", number: 2 },
			{ id: 3, title: "Com' un air de news", router: "com_un_air_de_news", number: 3 },
			{ id: 4, title: "À vous de jouer", router: "a_vous_de_jouer", number: 4 },
			{ id: 5, title: "La com dans tous ses endroits", router: "la_com_dans_tous_ses_endroits", number: 5 },
			{ id: 6, title: "Un pour tous, tous pour com", router: "un_pour_tous_tous_pour_com", number: 6 },
			{ id: 7, title: "Le saviez-vous ?", router: "le_saviez_vous", number: 7 },
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
			localStorage.setItem("screen_width", String(this.screen_width));
			this.setSideMenu();
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

	setSideMenu() {
		let content = document.getElementById("page-content");
		if (this.screen_width >= 1000) {
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
