import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map-info.component.html',
  styleUrls: ['./map-info.component.css']
})

export class MapComponent {
  @Input() name!: string;
  @Input() capital!: string;
  @Input() region!: string;
  @Input() income!: string;
  @Input() longitude!: string;
  @Input() latitude!: string;
  }
  