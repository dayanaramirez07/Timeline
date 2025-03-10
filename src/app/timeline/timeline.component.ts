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
    { year: 1998, icon: 'fa-baby-carriage' },
    { year: 2004, icon: 'fa-child' },
    { year: 2005, icon: 'fa-dog' },
    { year: 2012, icon: 'fa-masks-theater' },
    { year: 2020, icon: 'fa-mountain-sun' },
    { year: 2021, icon: 'fa-trophy' },
    { year: 2022, icon: 'fa-2' },
    { year: 2023, icon: 'fa-water' },
    { year: 2024, icon: 'fa-book' },
    { year: 2025, icon: 'fa-compact-disc' }
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

    modalRef.componentInstance.title = date.year;
    modalRef.componentInstance.content = {
      text: `Información sobre el año ${date.year}`,
      image: `assets/images/${date.year}.jpg`
    };
  }

}