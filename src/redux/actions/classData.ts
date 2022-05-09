import axios from 'axios';
import { Dispatch } from 'redux';
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
          throw { message: 'No student by that name, try another.' };
        }

        return axios.get(
          `/Classes?filterByFormula=OR(${res.data.records[0].fields.Classes.map(
            (classId: string) => `RECORD_ID()="${classId}"`
          ).join(',')})`
        );
      })
      .then(res => {
        classes = res.data.records.reduce(
          (
            allClasses: ClassDataTable[],
            singleClasss: { fields: ClassDataTable }
          ) => allClasses.concat(singleClasss.fields),
          []
        );

        return axios.get(
          `/Students?filterByFormula=OR(${classes
            .reduce(
              (allStudents: string[], singleClass: { Students: string[] }) =>
                allStudents.concat(singleClass.Students),
              []
            )
            .map((studentId: string) => `RECORD_ID()="${studentId}"`)
            .join(',')})&fields%5B%5D=Name`
        );
      })
      .then(res => {
        const students = res.data.records;

        students.forEach((student: StudentTable) => {
          studentsReferenc[student.id] = student.fields.Name;
        });

        const classDataList = classes.map(
          (classData: { Name: string; Students: string[] }) => ({
            name: classData.Name,
            students: classData.Students.map(
              (studentId: string) => studentsReferenc[studentId]
            ),
          })
        );

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
