import {EventAggregator} from 'aurelia-event-aggregator';

jest.mock('aurelia-event-aggregator', () =>
({
    EventAggregator:
    {
      publish: jest.fn()
    }
}));

// jest.fn keeps track of calls to publish function
// Anytime you want to check if a function was called or called with specific
//  parameters that function needs to be a mock.

// what is this syntax?
import {App} from '../../src/app';

describe('App Component', () =>
{
  let app;

  beforeEach( () =>
  {
    app = new App(EventAggregator);
  });

  //creates a new component for each event

  test('constructor is defined', () =>
  {
    expect(app.constructor).toBeDefined();
  });

  test('fire event', () =>
  {
    app.fireEvent();

    expect(EventAggregator.publish).toHaveBeenCalledTimes(1);
  })




});
