import { Component, OnInit } from '@angular/core';
import { PlacesService } from './places.service';
import {place} from './place.model';


@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  titulo: string = "LUGARES DEL MUNDO"
  places: place[]=[];
  constructor(private placeService: PlacesService) { }

  ngOnInit() {
    this.places=this.placeService.getPlaces();
  }

}
