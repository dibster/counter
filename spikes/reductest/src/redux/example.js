import Redux from 'Redux';

const countersTemplate =  {
    counter : [
        {
            id : 0,
            name : 'dave',
            value : 0,
            time : 1000000000,
            position : {
                lat : 1,
                lon : 1,
                context : {}
            },
            history : []
        }
    ]
}

const counter = (state, action) => {
  switch (action.type) {
    case 'ADD_COUNTER':
      return {
        id: action.id,
        name: action.text,
        value: 0,
        time : getTimeNow(),
        position : getLocationHere()
      };
    case 'INCREMENT_COUNTER':
      if (state.id !== action.id) {
        return state;
      }

      return {
          ...state,
          value : state.value + action.incrementAmount
      };
    default:
      return state;
  }
};

const counters = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COUNTER':
      return [
        ...state,
        counter(undefined, action)
      ];
    case 'INCREMENT_COUNTER':
      return state.map(t =>
        counter(t, action)
      );
    default:
      return state;
  }
};

const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const { combineReducers } = Redux;
const counterApp = combineReducers({
  todos,
  visibilityFilter
});

const { createStore } = Redux;
const store = createStore(counterApp);
