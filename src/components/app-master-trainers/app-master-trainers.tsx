import { Component, State } from '@stencil/core';
import * as Data from '../../assets/data.json';

@Component({
	tag: 'app-master-trainers',
	styleUrl: 'app-master-trainers.scss'
})
export class AppMasterTrainers {
	public data: any = Data;
	@State() masterTrainers: any = this.data.masterTrainers;


	public updateMasterTrainers(event: any, trainer: any): void {
		const isChecked: boolean = event.target.checked;
		const finishedEvents: any = {
			...this.masterTrainersProgress,
			[trainer.id]: isChecked
		};
		localStorage.setItem('masterTrainersProgress', JSON.stringify(finishedEvents));
	}

	get masterTrainersProgress(): any {
		return localStorage.getItem('masterTrainersProgress') ? JSON.parse(localStorage.getItem('masterTrainersProgress')) : {};
	}

	render() {
		return [
			<ion-header>
				<ion-toolbar color="primary">
					<ion-buttons slot="start">
						<ion-back-button defaultHref="/" />
					</ion-buttons>
					<ion-title>Master trainers</ion-title>
				</ion-toolbar>
			</ion-header>,

			<ion-content>
			<div class="table master-trainers">
				<div class="table__row table__row--head">
				<div class="table__column">
						Name
					</div>
					<div class="table__column">
						Level
					</div>
					<div class="table__column location">
						location
					</div>
					<div class="table__column">
						Done
					</div>
				</div>
				{this.masterTrainers.map((trainer) =>
					<div class="table__row">
						<div class="table__column">
							<img class="pokemon-image" src={`../../assets/sprites/${trainer.id}.png`} alt=""/>
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
								<input checked={this.masterTrainersProgress[trainer.id]} id={trainer.id} type="checkbox" onChange={(event: UIEvent) => this.updateMasterTrainers(event, trainer)}/>
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
