import { Component } from '@stencil/core';

@Component({
  tag: 'app-tm-collection',
  styleUrl: 'app-tm-collection.scss'
})
export class AppTmCollection {

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
	  <div class="hello">hoi hoi</div>
      </ion-content>
    ];
  }
}
