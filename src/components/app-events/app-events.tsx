import { Component, State } from '@stencil/core';
import { apiService } from '../../global/providers/api-service';



@Component({
	tag: 'app-events',
	styleUrl: 'app-events.scss'
})
export class AppEvents {
	@State() name: any;

	async componentDidLoad() {
		const data: any = await apiService.getCalendarData();
		console.log('data', data);
		this.name = data.name;
	}

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
				<ion-list>
					<ion-item>
						<div slot="start">
							<input type="checkbox"/>
						</div>
						<ion-label>
							<h2>{this.name}</h2>
							<h3>I'm a big deal</h3>
						</ion-label>
					</ion-item>
				</ion-list>
			</ion-content>
		];
	}
}
