import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {

  protected large: number = 0;
  protected margin: number[] = [];

  protected dates = [
    { year: 1998, icon: 'fa-baby-carriage', information: 'Elle est née le 22 février 1998.' },
    { year: 2004, icon: 'fa-child', information: 'Elle a remporté l\'émission de téléréalité « Angelitos ».' },
    { year: 2005, icon: 'fa-dog', information: 'Elle a rejoint l\'émission pour enfants « Club 10 ».' },
    { year: 2014, icon: 'fa-gamepad', information: 'Elle a fait partie du casting de Play Zone.' },
    { year: 2020, icon: 'fa-mountain-sun', information: 'Elle a repris sa carrière musicale.' },
    { year: 2021, icon: 'fa-trophy', information: 'Elle a sorti son premier album. Elle a remporté un Latin Grammy.' },
    { year: 2022, icon: 'fa-2', information: 'Elle a sorti son deuxième album.' },
    { year: 2023, icon: 'fa-water', information: 'Elle a publié son troisième album.' },
    { year: 2024, icon: 'fa-book', information: 'Elle a publié son premier livre. Elle a été confirmée comme faisant partie d\'une série.' },
    { year: 2025, icon: 'fa-compact-disc', information: 'Elle a sorti son quatrième album studio. Elle a annoncé son premier concert au Movistar Arena de Bogota.' },
  ];

  constructor(
    private _modalService: NgbModal
  ) { }

  public ngOnInit(): void {
    const diferenciaAnnos = this.dates[this.dates.length - 1].year - this.dates[0].year;
    this.large = (diferenciaAnnos * 16) + (this.dates.length * 80);
  }

  protected getMargin(index: number): number {
    this.dates.forEach((date, i) => {
      if (i > 0) {
        this.margin.push((date.year - this.dates[i - 1].year) * 16);
      } else {
        this.margin.push(0);
      }
    });

    return this.margin[index];
  }

  protected getLineWidth(index: number): string {
    if (index === this.dates.length - 1) return '1';
    const diff = this.dates[index + 1]?.year - this.dates[index]?.year || 1;
    return diff.toString();
  }

  protected openModal(date: any): void {
    const modalRef = this._modalService.open(ModalComponent, {
      centered: true,
      backdrop: true,
      size: 'lg'
    });

    const formattedText = date.information.replace(/\. /g, '.\n');

    modalRef.componentInstance.title = date.year;
    modalRef.componentInstance.content = {
      text: formattedText,
      image: `assets/images/${date.year}.jpg`
    };
  }

}