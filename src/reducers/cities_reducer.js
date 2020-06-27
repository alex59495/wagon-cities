export default function(state, action) {
  if (state === undefined) {
  // Reducer initialisation
    return [];
  }
  // TODO: handle some actions
  if (action.type === 'SET_CITIES') {
    return action.payload;
  } else{
    return state;
  }

  // switch(action.type) {
  //   case 'SET_CITIES':
  //     return action.payload;
  //   default:
  //     return state;
  // }

};
