import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)

export class App
{
  constructor(eventAggregator)
  {
    this.heading = 'Testing Aurelia with Jest';
    //will be binded to html and fireEvent
    //demonstrates how to use mocks
    this.ea = eventAggregator;
  }

  fireEvent()
  {
    this.ea.publish('event-fired');
  }
}
