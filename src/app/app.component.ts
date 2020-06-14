import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 isAuth = false;
 appOne ="Machine à laver";
 appTwo =" Fridge";
 appThree ="Ma_yo_nn_ai_se";
  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];


  constructor(){
   setTimeout(
     () => {
       this.isAuth=true;
     },4000
   );
 }
 onAllumer() {
   console.log('On allume tout !');
 }

}
