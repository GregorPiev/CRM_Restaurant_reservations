import { Component, Input, OnInit } from '@angular/core';

import { Positions } from 'src/app/shared/interfaces';
import { PositionsService } from './../../../shared/services/positions.service';

@Component({
  selector: 'app-positions-form',
  templateUrl: './positions-form.component.html',
  styleUrls: ['./positions-form.component.css'],
})
export class PositionsFormComponent implements OnInit {
  @Input('categoryId') categoryId: string;

  positions: Positions[];

  constructor(private positionService: PositionsService) {}

  ngOnInit(): void {
    this.positionService.fetch(this.categoryId).subscribe((positions) => {
      this.positions = positions;
    });
  }
}
