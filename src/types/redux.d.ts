interface AsyncBaseType {
  SUCCESS: string;
  ERROR: string;
  LOADING: string;
}

interface ReduxState {
  classDataList: ClassDataListState;
  username: string;
}

interface ClassDataListState {
  status: 'PENDING' | 'SUCCESS' | 'ERROR' | 'DEFAULT';
  data: ClassData[];
  error: string;
}

interface Action<T> {
  type: string;
  payload: T;
}
