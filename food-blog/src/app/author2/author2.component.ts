import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-author2',
  templateUrl: './author2.component.html',
  styleUrls: ['./author2.component.scss']
})
export class Author2Component {
  public authors: any[] = [
    {
      'id': 1,
      'name': 'James',
      'date': '18-04-2012',
      'text': 'Im a former 4th grade teacher, now full time blogger.My husband Bjork and I live in Minnesota.Favorite things include my camera, lake days, and dark chocolate.'
    },

  ]

}
