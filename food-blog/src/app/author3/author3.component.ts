import { Component } from '@angular/core';

@Component({
  selector: 'app-author3',
  templateUrl: './author3.component.html',
  styleUrls: ['./author3.component.scss']
})
export class Author3Component {
  public authors: any[] = [
    {
      'name': 'Rahul',
      'date': '12-02-2019',
      'text': 'Im a former 4th grade teacher, now full time blogger.My husband Bjork and I live in Minnesota.Favorite things include my camera, lake days, and dark chocolate.'
    },

  ]
}
