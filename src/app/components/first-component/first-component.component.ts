import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = "Gabriel";
  age: number = 16;
  email: string = "gabriel.teste@teste.com.br"
  job: string = "Desenvolvedor Front-End"

  constructor() { }

  ngOnInit(): void {
  }

}
