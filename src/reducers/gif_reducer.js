import ActionTypes from '../constants/action_types';

export function gifReducer(state = {}, action) {
  switch(action.type) {
    default: {
      return {
        ...state,
        gifs: [
          {
            id: 1,
            url: 'http://fakeimg.pl/300/'
          },
          {
            id: 2,
            url: 'http://fakeimg.pl/300/'
          },
          {
            id: 3,
            url: 'http://fakeimg.pl/300/'
          }
        ]
      };
    }
  }
}