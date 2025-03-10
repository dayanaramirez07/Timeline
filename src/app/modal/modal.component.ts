import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  imports: [
    CommonModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @Input() public title: string = '';
  @Input() public content: { text: string; image: string } = { text: '', image: '' };

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  public closeModal(): void {
    this.activeModal.dismiss();
  }

}