import { Component, OnInit } from '@angular/core';
import { DatosPortfolioService } from 'src/app/servicios/datos-portfolio.service';
import { faPen, faTrash , faAdd} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
miEducacion:any;
faPen = faPen;
faTrash = faTrash;
faAdd = faAdd;
element: boolean = false;

  constructor(private datosPortfolio:DatosPortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.geteducacion().subscribe(data => {
    this.miEducacion= data;
  });
  this.modo();
  }

  modo(): void {
    if (localStorage.getItem('editMode') == 'S') {
      this.element = true;
    } else {
      this.element = false;
    }
  }

}
