import { Component, OnInit } from '@angular/core';
import { throwIfEmpty } from 'rxjs';
import { DatosPortfolioService } from 'src/app/servicios/datos-portfolio.service';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  miPortfolio: any;
  faPen = faPen;
  element: boolean = false;

  constructor(private datosPortfolio: DatosPortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.getinfo().subscribe((data) => {
      //console.log(data);
      this.miPortfolio = data;
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
