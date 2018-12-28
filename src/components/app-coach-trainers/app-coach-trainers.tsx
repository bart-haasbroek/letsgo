import { Component, State } from '@stencil/core';
import * as Data from '../../assets/data.json';

@Component({
	tag: 'app-coach-trainers',
	styleUrl: 'app-coach-trainers.scss'
})
export class AppCoachTrainers {
	public data: any = Data;
	@State() coachTrainers: any = this.data.coachTrainers;

	render() {
		return [
			<ion-header>
				<ion-toolbar color="primary">
					<ion-buttons slot="start">
						<ion-back-button defaultHref="/" />
					</ion-buttons>
					<ion-title>Coach Trainers</ion-title>
				</ion-toolbar>
			</ion-header>,

			<ion-content>
				<div class="table coach-trainers">
					<div class="table__row table__row--head">
					<div class="table__column">
							Name
						</div>
						<div class="table__column">
							Loaction
						</div>
						<div class="table__column location">
							Reward
						</div>
					</div>
					{this.coachTrainers.map((trainer) =>
						<div class="table__row">
							<div class="table__column">
								{trainer.name}
							</div>
							<div class="table__column">
								{trainer.location}
							</div>
							<div class="table__column location">
								{trainer.reward}
							</div>
						</div>
					)}
				</div>
			</ion-content>
		];
	}
}
