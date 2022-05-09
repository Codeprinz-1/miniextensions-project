import { CLEARCLASSDATALIST, GETCLASSDATALIST } from '../types/classData';

export const classDataListReducer = (
  state: ClassDataListState = {
    data: [],
    status: 'DEFAULT',
    error: '',
  },
  action: Action<ClassData[] | string>
): ClassDataListState => {
  switch (action.type) {
    case GETCLASSDATALIST.LOADING:
      return {
        ...state,
        status: 'PENDING',
        error: '',
      };
    case GETCLASSDATALIST.SUCCESS:
      return {
        ...state,
        status: 'SUCCESS',
        data: action.payload as ClassData[],
      };
    case GETCLASSDATALIST.ERROR:
      return {
        ...state,
        status: 'ERROR',
        error: action.payload as string,
      };
    case CLEARCLASSDATALIST:
      return {
        ...state,
        status: 'DEFAULT',
        error: '',
        data: [],
      };
    default:
      return state;
  }
};
