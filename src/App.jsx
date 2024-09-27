// import { useReducer } from 'react';
// import FormEx from './forms.jsx'; 
// import List from './ListPPL.jsx';
// export default function App() {
//   return (
//     <>
//     <FormEx />
//     <List/>
//     </>
//   );
// }
import { useReducer } from "react";
import FormEx from "./forms";
import List from "./ListPPL";

const initialState = { people: [] };

function reducer(state, action) {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, people: [...state.people, action.payload] };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <FormEx dispatch={dispatch} />
      <List people={state.people} />
    </div>
  );
}