import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
		<ion-button href="/events" expand="block">Events</ion-button>
		<ion-button href="/master-trainers" expand="block">Master trainers</ion-button>
		<ion-button href="/coach-trainers" expand="block">Coach trainers</ion-button>
		<ion-button href="/tm-collection" expand="block">TM collection</ion-button>
      </ion-content>
    ];
  }
}
