import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Superman';
  public edad: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.edad }`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeEdad(): void {
    this.edad = 20;
  }

  resetForm() {
    this.name = 'Superman';
    this.edad = 45;
    document.querySelector('h1')!.innerHTML = '<h1> Desde Angular: '+ this.name + ' </h1>';
  }
}
