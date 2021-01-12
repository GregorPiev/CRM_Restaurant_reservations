import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

import { MaterialService } from './../../../shared/classes/material.service';
import { Positions } from 'src/app/shared/interfaces';
import { PositionsService } from './../../../shared/services/positions.service';

@Component({
  selector: 'app-positions-form',
  templateUrl: './positions-form.component.html',
  styleUrls: ['./positions-form.component.css'],
})
export class PositionsFormComponent implements OnInit, AfterViewInit {
  @Input('categoryId') categoryId: string;
  @ViewChild('modal') modalRef: ElementRef;
  positions: Positions[];
  loading = false;

  constructor(private positionService: PositionsService) {}

  ngOnInit(): void {
    this.loading = true;
    this.positionService.fetch(this.categoryId).subscribe((positions) => {
      this.positions = positions;
      this.loading = false;
    });
  }

  ngAfterViewInit(): void {
    MaterialService.initModal(this.modalRef);
  }
}
