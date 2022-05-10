import { classDataListReducer } from '../../redux/reducers/classData';
import {
  CLEARCLASSDATALIST,
  GETCLASSDATALIST,
} from '../../redux/types/classData';

test('should add classDataList to app state', () => {
  const classDataListMock: ClassData[] = [
    { name: 'class1', students: ['student1'] },
  ];
  const actionMock: Action<ClassData[]> = {
    type: GETCLASSDATALIST.SUCCESS,
    payload: classDataListMock,
  };

  expect(classDataListReducer(undefined, actionMock)).toEqual(
    expect.objectContaining({
      status: 'SUCCESS',
      data: classDataListMock,
    })
  );
});

test('should set status to ERROR', () => {
  const errorMock: string = 'error';
  const actionMock: Action<string> = {
    type: GETCLASSDATALIST.ERROR,
    payload: errorMock,
  };

  expect(classDataListReducer(undefined, actionMock)).toEqual(
    expect.objectContaining({
      status: 'ERROR',
      error: errorMock,
    })
  );
});

test('should set status to PENDING', () => {
  const actionMock: PartialBy<Action, 'payload'> = {
    type: GETCLASSDATALIST.LOADING,
  };

  expect(classDataListReducer(undefined, actionMock)).toEqual(
    expect.objectContaining({
      status: 'PENDING',
    })
  );
});

test('should clear classDataList state', () => {
  const actionMock: PartialBy<Action, 'payload'> = {
    type: CLEARCLASSDATALIST,
  };

  expect(classDataListReducer(undefined, actionMock)).toEqual(
    expect.objectContaining({
      status: 'DEFAULT',
      data: [],
      error: '',
    })
  );
});
