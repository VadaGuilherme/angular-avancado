import { Component, OnInit } from '@angular/core';
import { Filme } from './filme';
import { ImageFormaterPipe } from './image.pipe';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  providers: [ImageFormaterPipe]
})
export class FilmesComponent implements OnInit {

  filmes: Filme[];
  mapped: Filme[];

  constructor(private imageFormat: ImageFormaterPipe) { }

  ngOnInit() {
    this.filmes = [
      {
        nome: 'Um sonho de liberdade',
        dataLancamento: new Date('12/07/1994'),
        valor: 150.00,
        imagem: 'sonhoLiberdade.jpg',
        tamanho: '513326980'
      },
      {
        nome: 'O poderoso chefão',
        dataLancamento: new Date('01/12/1972'),
        valor: 200.00,
        imagem: 'poderosoChefaoI.jpg',
        tamanho: '457123332'
      },
      {
        nome: 'Batman: O Cavaleiro das Trevas',
        dataLancamento: new Date('08/01/2008'),
        valor: 70.00,
        imagem: 'Batman2008.jpg',
        tamanho: '71997720'
      },
      {
        nome: 'o poderoso chefão 2',
        dataLancamento: new Date('01/12/1974'),
        valor: 120.00,
        imagem: 'poderosoChefaoII.jpg',
        tamanho: '12545898899'
      },
      {
        nome: 'Velozes e Furiosos',
        dataLancamento: new Date('01/12/2008'),
        valor: 40.50,
        imagem: '',
        tamanho: '1254512898899'
      }
    ];

    this.mapped = this.filmes.map(filme => {
      return {
        nome: filme.nome,
        dataLancamento: filme.dataLancamento,
        valor: filme.valor,
        tamanho: filme.tamanho,
        imagem: this.imageFormat.transform(filme.imagem, 'default', true)
      }
    });
  }
}
