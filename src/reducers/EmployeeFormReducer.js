import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';


const INITIAL_STATE = {
  name:'',
  phone:'',
  shift:''
};

export default (state=INITIAL_STATE, action) =>{
  // console.log(action);

  switch (action.type) {

    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]:action.payload.value }
    case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;

    case EMPLOYEE_CREATE:
    // once we create an employee reset the fields.
      return INITIAL_STATE;
// clear the fields afte we delete them

    default:
      return state;

  }
};
