import { Component, OnInit } from '@angular/core';
import { Line } from 'src/app/models/Line';
@Component({
  selector: 'app-blue-lines',
  templateUrl: './blue-lines.component.html',
  styleUrls: ['./blue-lines.component.scss']
})
export class BlueLinesComponent implements OnInit {

  lines:Line[] = [
    { imagem:'https://www.metro.sp.gov.br/sua-viagem/images/linhas/linha-1-azul/tucuruvi/estacao-tucuruvi.jpg', nome: 'Tucuruvi', descricao: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'},
    { imagem:'http://www.metro.sp.gov.br/sua-viagem/images/linhas/linha-1-azul/santana/estacao-santana.jpg', nome: 'Santana', descricao: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'},
    { imagem:'http://www.metro.sp.gov.br/sua-viagem/images/linhas/linha-1-azul/luz/estacao-luz.jpg', nome: 'Luz', descricao: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
