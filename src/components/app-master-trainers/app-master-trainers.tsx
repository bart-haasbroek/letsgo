import { Component, State } from '@stencil/core';
import * as Data from '../../assets/data.json';

@Component({
	tag: 'app-master-trainers',
	styleUrl: 'app-master-trainers.scss'
})
export class AppMasterTrainers {
	public data: any = Data;
	@State() masterTrainers: any = this.data.masterTrainers;

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

			<ion-content padding>
				{this.masterTrainers.map((trainer) =>
					<div class="hello">{trainer.name}</div>
				)}
			</ion-content>
		];
	}
}
