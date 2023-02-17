import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      const addFav=[...state.allCharacters,action.payload];
      return {
        ...state,
        myFavorites: [...addFav],
        allCharacters: [...addFav]
      };
    case REMOVE_FAV:
      const deleteFav=state.allCharacters.filter(
        (fav) => fav.id !== action.payload
      );

      return {
        ...state,
        myFavorites:[...deleteFav],
        allCharacters: [...deleteFav]
      };
    case FILTER:
      return{
        ...state,
        myFavorites:state.allCharacters.filter(e=>e.gender===action.payload)
      }
      // const copyCharacters = [...state.allCharacters];
      // const filteredGender = copyCharacters.filter(
      //   (character) => character.gender === action.payload
      // );
      // return {
      //   ...state,
      //   myFavorites: filteredGender,
      // };
    case ORDER:
        let orderFav;
        if(action.payload==='Ascendente'){
            orderFav=state.myFavorites.sort((a,b)=>a.id>b.id?1:-1);
        }else{
          orderFav=state.myFavorites.sort((a,b)=>a.id<b.id?-1:1);
        }
      return{
       ...state,
        myFavorites:[...orderFav ]
       }
       case 'RESET':
        return{

        }

      // const copyCharacters = [...state.allCharacters];
      // const orderCharacters = copyCharacters.sort((a, b) =>{
      //   if(a.id>b.id){ 
      //       if(payload==='Ascendente') return 1
      //       else return -1
            
      //   };
      //   if(a.id<b.id){ 
      //       if(payload==='Descendente') return -1
      //       else return 1
      //       }
      //   else {return 0}     
      //   });
        
      // return {
      //   ...state,
      //   myFavorites:orderCharacters
      // };

    default:
      return state;
  }
};

export default rootReducer;
