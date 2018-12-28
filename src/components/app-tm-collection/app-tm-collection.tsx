import { Component, State } from '@stencil/core';
import * as Data from '../../assets/data.json';

@Component({
	tag: 'app-tm-collection',
	styleUrl: 'app-tm-collection.scss'
})
export class AppTmCollection {
	public data: any = Data;
	@State() tms: any = this.data.TMs;

	render() {
		return [
			<ion-header>
				<ion-toolbar color="primary">
					<ion-buttons slot="start">
						<ion-back-button defaultHref="/" />
					</ion-buttons>
					<ion-title>Events</ion-title>
				</ion-toolbar>
			</ion-header>,

			<ion-content>
				<div class="table">
					<div class="table__row table__row--head">
						<div class="table__column">
							TM number
						</div>
						<div class="table__column">
							Name
						</div>
						<div class="table__column tm-location">
							Where to get
						</div>
					</div>
					{this.tms.map((tm) =>
					<div class="table__row">
						<div class="table__column">
							{tm.tm}
						</div>
						<div class="table__column">
							{tm.name}
						</div>
						<div class="table__column tm-location">
							{tm.location}
						</div>
					</div>
				)}
				</div>
			</ion-content>
		];
	}
}
