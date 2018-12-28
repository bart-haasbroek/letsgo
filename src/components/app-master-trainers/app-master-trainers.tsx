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

			<ion-content>
			<div class="table">
				<div class="table__row table__row--head">
				<div class="table__column">
						Name
					</div>
					<div class="table__column">
						Level
					</div>
					<div class="table__column location">
						Location
					</div>
					<div class="table__column done">
						Done
					</div>
				</div>
				{this.masterTrainers.map((trainer) =>
					<div class="table__row">
						<div class="table__column">
							{trainer.name}
						</div>
						<div class="table__column">
							{trainer.level}
						</div>
						<div class="table__column location">
							{trainer.location}
						</div>
						<div class="table__column done">
							<div class="form-element form-element--checkbox trainer-done">
								<input id={trainer.id} type="checkbox"/>
								<label htmlFor={trainer.id} class="form-element__label">
									<div class="form-element-inner"></div>
								</label>
							</div>
						</div>
					</div>
				)}
			</div>
			</ion-content>
		];
	}
}
