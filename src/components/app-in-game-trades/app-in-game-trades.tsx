import { Component, State } from '@stencil/core';
import * as Data from '../../assets/data.json';


@Component({
	tag: 'app-in-game-trades',
	styleUrl: 'app-in-game-trades.scss'
})
export class AppInAppTrades {
	public data: any = Data;
	@State() trades: any = this.data.inAppTrades;

	render() {
		console.log(this.data);
		return [
			<ion-header>
				<ion-toolbar color="primary">
					<ion-buttons slot="start">
						<ion-back-button defaultHref="/" />
					</ion-buttons>
					<ion-title>In app trades</ion-title>
				</ion-toolbar>
			</ion-header>,

			<ion-content>
				<div class="table in-game-trades">
					<div class="table__row table__row--head">
						<div class="table__column">
							Trade
						</div>
						<div class="table__column">
							location
						</div>
					</div>
					{this.trades.map((trade: any) =>
					<div class="table__row">
						<div class="table__column">
							{trade.trade}
						</div>
						<div class="table__column">
							{trade.location}
						</div>
					</div>
				)}
				</div>
			</ion-content>
		];
	}
}
