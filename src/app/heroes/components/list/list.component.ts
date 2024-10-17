import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public title: string = 'lista de Heroes';

  public nameHeroes: string[] = ['Spiderman','Superman','She Hulk', 'Hulk', 'Thor'];

  public deletedHero?: string;

  removeLastHero():void {
    this.deletedHero = this.nameHeroes.pop();
  }

}
