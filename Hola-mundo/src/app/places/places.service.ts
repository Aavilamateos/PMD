import { Injectable } from '@angular/core';
import { place } from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: place[] = [
    {
      id: '1',
      title: 'Torre Eiffel',
      imageURL: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/03/30/16801663970469.jpg',
      comments: ['Maravillosa torre, preciosa', 'una belleza, impresionante altura']
    },
    {
      id: '2',
      title: 'Estatua de la Libertad',
      imageURL: 'https://www.turismonuevayork.com/wp-content/uploads/2014/09/La-Estatua-de-la-Libertad-en-Nueva-York.jpg',
      comments: ['Increibles las vistas desde la bahía', 'Las vistas desde arriba son una pasada']
    },
    {
      id: '3',
      title: 'La Giralda',
      imageURL: 'https://www.barcelo.com/guia-turismo/wp-content/uploads/2019/04/la-giralda-de-sevilla.jpg',
      comments: ['El monumento mas bonito del mundo', 'Presume orgullosa de ver al Sevilla en el Sánchez Pizjuán']
    }
  ]
  constructor() { }


  getPlaces() {
    return [...this.places]
  }
  /**
   * getPlace(): Recupera el valor del array que se pulse
   * @param placeID (Identificador del objeto que se ha pulsado)
   */
  getPlace(placeID: string | null) {
    return {
      ...this.places.find(place => {
        return place.id === placeID
      })
    }
  }
  /**
   * Este metodo añade un objeto nuevo al final del array
   * @param title 
   * @param imageURL 
   */
  addPlace(title: string, imageURL: string) {
    this.places.push({
      title,
      imageURL,
      comments: [],
      id: (this.places.length + 1).toString()
    })

  }
  /**
   * deletePlace() Elimina un objeto del array de places
   * @param placeId El id del objeto a eliminar
   */
  deletePlace(placeId: string) {
    this.places = this.places.filter(place => {
      return place.id != placeId
    })
  }


}
