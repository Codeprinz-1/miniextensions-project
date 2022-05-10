import axios from 'axios';

import { Dispatch } from 'redux';

import {
  extractClassData,
  generateClassDataList,
  generateClassesFilterFormula,
  generateStudentsFilterFormula,
} from '../../utils';

import { CLEARCLASSDATALIST, GETCLASSDATALIST } from '../types/classData';

export const getClassDataList =
  (username: string) =>
  (dispatch: Dispatch<PartialBy<Action<ClassData[] | string>, 'payload'>>) => {
    dispatch({ type: GETCLASSDATALIST.LOADING });

    let classes: ClassDataTable[] = [];
    const studentsReferenc: { [key: string]: string } = {};

    axios.defaults.baseURL = 'https://api.airtable.com/v0/app8ZbcPx7dkpOnP0';
    axios.defaults.headers.common.Authorization = `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`;
    axios
      .get(`/Students?filterByFormula={Name}="${username}"`)
      .then(res => {
        if (res.data.records.length === 0) {
          throw new Error('No student by that name, try another.');
        }

        return axios.get(
          `/Classes?filterByFormula=${generateClassesFilterFormula(
            res.data.records[0]
          )}`
        );
      })
      .then(res => {
        classes = extractClassData(res.data.records);

        return axios.get(
          `/Students?filterByFormula=${generateStudentsFilterFormula(
            classes
          )}&fields%5B%5D=Name`
        );
      })
      .then(res => {
        const students = res.data.records;

        students.forEach((student: StudentTable) => {
          studentsReferenc[student.id] = student.fields.Name!;
        });

        const classDataList = generateClassDataList(classes, studentsReferenc);

        dispatch({ type: GETCLASSDATALIST.SUCCESS, payload: classDataList });
      })
      .catch(err => {
        dispatch({ type: GETCLASSDATALIST.ERROR, payload: err.message });
      });
  };

export const clearClassDataList = (): PartialBy<
  Action<ClassData[] | string>,
  'payload'
> => ({
  type: CLEARCLASSDATALIST,
});
