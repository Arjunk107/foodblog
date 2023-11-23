import { Component } from '@angular/core';

@Component({
  selector: 'app-author1',
  templateUrl: './author1.component.html',
  styleUrls: ['./author1.component.scss']
})
export class Author1Component {
  public authors: any[] = [
    {
      'id': 1,
      'name': 'Lindsey',
      'date': '12-02-2009',
      'text': 'Im a former 4th grade teacher, now full time blogger.My husband Bjork and I live in Minnesota.Favorite things include my camera, lake days, and dark chocolate.'
    },

  ]
}
