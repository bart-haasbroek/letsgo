import { Component } from '@stencil/core';

@Component({
	tag: 'app-coach-trainers',
	styleUrl: 'app-coach-trainers.scss'
})
export class AppCoachTrainers {

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
			</ion-content>
		];
	}
}
