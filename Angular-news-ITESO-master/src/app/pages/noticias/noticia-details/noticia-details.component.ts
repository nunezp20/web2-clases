import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-noticia-details',
  templateUrl: './noticia-details.component.html',
  styleUrls: ['./noticia-details.component.scss']
})
export class NoticiaDetailsComponent implements OnInit, OnChanges {

  @Input('item') noticia: any = {};
  onClear: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Llegaron cambios: ', changes)
  }

  clearNoticia(){
    this.noticia = {};
    this.onClear.emit();
  }

}
