import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  public foodCard: any[] = [{
    'link': '../../assets/images/card images/Applesauce.jpg',
    'title': 'Easy Instant Pot Applesauce',
    'text': 'My go-to method for homemade applesauce! Just apples, water, and cinnamon. A perfect kid recipe for an afternoon snack!',
    'goto': 'first'
  },
  {
    'link': '../../assets/images/card images/Slow-Cooker-Texas-Chili.jpg',
    'title': 'Slow Cooker Texas Style Chili',
    'text': 'This shredded beef Texas chili is rich and hearty, made with 8 simple ingredients! Just  lightest pull of a fork. YUM.',
    'goto': 'second'
  },
  {
    'link': '../../assets/images/card images/Tomato-Soup.jpg',
    'title': '5 Ingredient Tomato Soup',
    'text': 'A simple 5 ingredient tomato soup made with butter, onion, and canned San Marzano tomatoes. Based on the tomato sauce recipe. ',
    'goto': 'third'
  }]
}
