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

 lastUpdate = new Promise((resolve, reject) => {
   const date = new Date();
   setTimeout(
     () => {
       resolve(date);
     }, 2000
   );
   });

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

  post1 = {
    title: 'Mon premier post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut odio dolor, pretium eget sapien et, commodo venenatis ipsum. Sed volutpat mauris et lectus consectetur, quis ullamcorper nulla condimentum.',
    loveIts: 0,
    created_at: new Date()
  }
  post2= {
    title: 'Mon deuxième post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut odio dolor, pretium eget sapien et, commodo venenatis ipsum. Sed volutpat mauris et lectus consectetur, quis ullamcorper nulla condimentum.',
    loveIts: 0,
    created_at: new Date()
  }
  post3= {
    title: 'Encore un post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut odio dolor, pretium eget sapien et, commodo venenatis ipsum. Sed volutpat mauris et lectus consectetur, quis ullamcorper nulla condimentum.',
    loveIts: 0,
    created_at: new Date()
  }
  listOfPost =[this.post1,this.post2,this.post3];
  constructor(){
   setTimeout(
     () => {
       this.isAuth=true;
     },4000
   );
   console.log(this.listOfPost)
 }
 onAllumer() {
   console.log('On allume tout !');
 }

}
