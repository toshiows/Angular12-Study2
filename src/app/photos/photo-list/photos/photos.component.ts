import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../../photo/Photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  @Input() photos: Photo[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
