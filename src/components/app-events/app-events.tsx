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

	public inputChanged(event: any, gameEvent): void {
		const isChecked: boolean = event.target.checked;
		const finishedEvents: any = {
			...this.getEvents,
			[gameEvent.id]: isChecked
		};
		localStorage.setItem('gameEvents', JSON.stringify(finishedEvents));
	}

	get getEvents(): any {
		return localStorage.getItem('gameEvents') ? JSON.parse(localStorage.getItem('gameEvents')) : {};
	}

	render() {
		return [
			<ion-header>
				<ion-toolbar color="primary">
					<ion-buttons slot="start">
						<ion-back-button defaultHref="/" />
					</ion-buttons>
					<ion-title>Daily events</ion-title>
				</ion-toolbar>
			</ion-header>,

			<ion-content padding>
				{this.events.map((gameEvent: any) =>
				<div class="form-element form-element--checkbox">
					<input checked={this.getEvents[gameEvent.id]} id={gameEvent.id} type="checkbox" onChange={(event: UIEvent) => this.inputChanged(event, gameEvent)}/>
					<label htmlFor={gameEvent.id} class="form-element__label">
						{gameEvent.title}
						<div class="form-element-inner"></div>
					</label>
				</div>
				)}
			</ion-content>
		];
	}
}
