import { Component, Input, OnInit, Renderer2, ElementRef } from '@angular/core';
import { DatosPortfolioService } from 'src/app/servicios/datos-portfolio.service';
import { faPen, faTrash, faAdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesComponent implements OnInit {
  misHabilidades:any;
  faPen = faPen;
  faTrash = faTrash;
  faAdd = faAdd;
  element: boolean = false;
  constructor(
    private datosPortfolio: DatosPortfolioService,
    private elem: ElementRef,
    private renderer: Renderer2
  ) {}
  ngOnInit(): void {
    let listSkills = '';
    this.datosPortfolio.gethabilidades().subscribe((data) => {
      this.misHabilidades = data;
      this.modo();
      /*
      data.abilities.forEach(
        (element: { color: any; skill: any; name: any ; id: Int16Array}) => {
          let colorEstado = element.color;
          let conocimiento = element.skill;
          let name = element.name;
          let id = element.id;
          let color = 'purple';
          if (
            colorEstado == 'orange' ||
            colorEstado == 'blue' ||
            colorEstado == 'green' ||
            colorEstado == 'purple'
          ) {
            color = colorEstado;
          }

          listSkills =
            listSkills +
            `<h3  class="progress-title">${name}
          </h3>
      <div class="progress ${color}">
      <div class="progress-bar" style="width:${conocimiento}%; background:${colorEstado};">
              <div class="progress-value">${conocimiento}%</div>
          </div>
      </div>`;
        }
      );
      let newContent = listSkills;
      const element = this.elem.nativeElement.querySelector('.skills');
      this.renderer.setProperty(element, 'innerHTML', newContent);*/
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
