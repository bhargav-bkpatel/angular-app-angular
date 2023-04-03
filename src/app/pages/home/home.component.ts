import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  raw9sk5: string = ' '
  raw0589: string = ' '
  rawg6wn: string = ' '
  rawi6pl: string = ' '
  rawo8ll: string = ' '
  rawih4h: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Feedbox mobile app')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Feedbox mobile app',
      },
    ])
  }
}
