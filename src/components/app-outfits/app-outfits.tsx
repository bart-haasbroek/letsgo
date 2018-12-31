import { Component, State } from '@stencil/core';
import * as Data from '../../assets/data.json';


@Component({
	tag: 'app-outfits',
	styleUrl: 'app-outfits.scss'
})
export class AppOutfits {
	public data: any = Data;
	@State() outfits: any = this.data.outfits;

	render() {
		console.log(this.data);
		return [
			<ion-header>
				<ion-toolbar color="primary">
					<ion-buttons slot="start">
						<ion-back-button defaultHref="/" />
					</ion-buttons>
					<ion-title>Outfits</ion-title>
				</ion-toolbar>
			</ion-header>,

			<ion-content>
				<div class="table outfits">
					<div class="table__row table__row--head">
						<div class="table__column">
							Outfit
						</div>
						<div class="table__column">
							How to get
						</div>
					</div>
					{this.outfits.map((outfit: any) =>
					<div class="table__row">
						<div class="table__column">
							{outfit.name}
						</div>
						<div class="table__column">
							{outfit.location}
						</div>
					</div>
				)}
				</div>
			</ion-content>
		];
	}
}
