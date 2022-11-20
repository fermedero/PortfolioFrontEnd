import { Component, Input, OnInit, Renderer2, ElementRef } from '@angular/core';
import { DatosPortfolioService } from 'src/app/servicios/datos-portfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesComponent implements OnInit {
  constructor(
    private datosPortfolio: DatosPortfolioService,
    private elem: ElementRef,
    private renderer: Renderer2
  ) {}
  ngOnInit(): void {
    let listSkills = '';
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      data.habilidades.forEach(
        (element: { color: any; conocimiento: any; name: any }) => {
          let colorEstado = element.color;
          let conocimiento = element.conocimiento;
          let name = element.name;
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
            `<h3  class="progress-title">${name}</h3>
      <div class="progress ${color}">
          <div class="progress-bar" style="width:${conocimiento}%; background:${colorEstado};">
          
              <div class="progress-value">${conocimiento}%</div>
          </div>
      </div>`;
        }
      );
      let newContent = listSkills;
      const element = this.elem.nativeElement.querySelector('.skills');
      this.renderer.setProperty(element, 'innerHTML', newContent);
    });
  }
}
