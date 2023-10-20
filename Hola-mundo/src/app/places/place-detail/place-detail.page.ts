import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../places.service';
import { place } from '../place.model';


@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: any;
  constructor(private activatedRoute: ActivatedRoute, private placesService: PlacesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      const recipeId = paramMap.get('placeID');
      console.log(recipeId);
      this.place=this.placesService.getPlace(recipeId);
    })
  }
}
