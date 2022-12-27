import { Component, OnInit } from '@angular/core';
import { DatosPortfolioService } from 'src/app/servicios/datos-portfolio.service';
import { faPen, faTrash, faAdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
myProject:any;
faPen = faPen;
faTrash = faTrash;
faAdd = faAdd;
element: boolean = false;
  constructor(private datosPortfolio:DatosPortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.getproyectos().subscribe(data => {
      this.myProject= data;
      this.modo();
    });
  }
  modo(): void {
    if (localStorage.getItem('editMode') == 'S') {
      this.element = true;
    } else {
      this.element = false;
    }
  }
}
