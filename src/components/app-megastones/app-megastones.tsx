import { Component, State } from '@stencil/core';
import * as Data from '../../assets/data.json';


@Component({
	tag: 'app-megastones',
	styleUrl: 'app-megastones.scss'
})
export class AppMegastones {
	public data: any = Data;
	@State() megastones: any = this.data.megastones;

	render() {
		console.log(this.data);
		return [
			<ion-header>
				<ion-toolbar color="primary">
					<ion-buttons slot="start">
						<ion-back-button defaultHref="/" />
					</ion-buttons>
					<ion-title>Megastones</ion-title>
				</ion-toolbar>
			</ion-header>,

			<ion-content>
				<div class="table megastones">
					<div class="table__row table__row--head">
						<div class="table__column">
							Stone
						</div>
						<div class="table__column">
							location
						</div>
					</div>
					{this.megastones.map((megastone: any) =>
					<div class="table__row">
						<div class="table__column">
							{megastone.name}
						</div>
						<div class="table__column">
							{megastone.location}
						</div>
					</div>
				)}
				</div>
			</ion-content>
		];
	}
}
