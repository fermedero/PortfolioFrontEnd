import { Component, OnInit } from '@angular/core';
import { DatosPortfolioService } from 'src/app/servicios/datos-portfolio.service';  
import { faPen, faTrash , faAdd} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
miExperiencia:any;
faPen = faPen;
faTrash = faTrash;
faAdd = faAdd;
element: boolean = false;
  constructor(private datosPortfolio:DatosPortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.getexperiencia().subscribe(data => {
     // console.log(data.experience);
      this.miExperiencia=data;
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
