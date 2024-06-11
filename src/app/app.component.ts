import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'menu';
  total = 0;
  qty = 0;
  inputsearch: string = "";

  student:Student={
    id: 1,
    name: "Ali",
    age: 43
  }

  receive(event:any){
    console.log(event);
  }

  foodmenu=[
    {id:1,name:"دجاج",price:30,description:"دجاج مشوي على الفحم",img:"/assets/images/chicken.jpg"},
    {id:2,name:"دجاج",price:30,description:"دجاج شواية ",img:"/assets/images/chicken.jpg"},
    {id:3,name:"ايدام",price:20,description:"ايدام خضار مشكل",img:"/assets/images/edam.jpg"},
    {id:4,name:"ايدام",price:20,description:"ايدام  بالدجاج على الفرن",img:"/assets/images/chi-edam.jpg"}
  ]

  sum(event: any, price: number){
    const ischecked: boolean= event.target.checked;
    if(ischecked){
      this.total= this.total + price;
      this.qty += 1;
    }
    else{
      this.total= this.total - price;
      this.qty -= 1;
    }
  }


  search(foodmenu: any[]){
    return foodmenu.filter(item=> item.name.includes(this.inputsearch))
  }

}
//d-flex align-items-center