import { Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/app/shared/services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  noticias: any = []
  cargando: boolean = false

  constructor(private servicioDeNoticias: NoticiaService) {}

  ngOnInit(): void {
    this.cargando = true
    this.servicioDeNoticias.getNoticias().subscribe(res => {
      this.noticias = res.articles
      this.cargando = false
    })
  }

}
