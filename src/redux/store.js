/* eslint-disable no-const-assign */
import rootReducers from './reducer';




function createStore(){
    const state = 0;
    const dispatch = function(action){
        if(action.type === 'ADDITEM'){
            state = state + action.payload;
        }
        else 
        if(action.type === 'DELITEM'){
            state = state - action.payload;
        }
    };

    const getState = function(){
        return state;
    }
    return{
        dispatch,
        getState
    };

    
}

const store = createStore(rootReducers);

export default store;

