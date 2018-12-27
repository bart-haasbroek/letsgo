import { Component, State } from '@stencil/core';
///import { apiService } from '../../global/providers/api-service';
import * as Data from '../../assets/data.json';



@Component({
	tag: 'app-events',
	styleUrl: 'app-events.scss'
})
export class AppEvents {
	public data: any = Data;
	public name = this.data.name;
	@State() events: any = this.data.events;


	render() {
		console.log(this.events);
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
					{this.events.map((event) =>
					<ion-item>
						<div slot="start">
							<input type="checkbox"/>
						</div>
						<ion-label>
							{event}
						</ion-label>
					</ion-item>
					)}
				</ion-list>
			</ion-content>
		];
	}
}
