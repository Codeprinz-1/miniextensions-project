export const extractClassData = (classData: ClassDataResponse[]) =>
  classData.reduce(
    (allClasses: ClassDataTable[], singleClasss: ClassDataResponse) =>
      allClasses.concat(singleClasss.fields),
    []
  );

export const generateClassDataList = (
  classes: ClassDataTable[],
  students: { [key: string]: string }
) =>
  classes.map((classData: { Name: string; Students: string[] }) => ({
    name: classData.Name,
    students: classData.Students.map(
      (studentId: string) => students[studentId]
    ),
  }));

export const generateStudentsFilterFormula = (
  classes: PartialBy<ClassDataTable, 'Name'>[]
) =>
  `OR(${classes
    .reduce(
      (allStudents: string[], singleClass: { Students: string[] }) =>
        allStudents.concat(singleClass.Students),
      []
    )
    .map((studentId: string) => `RECORD_ID()="${studentId}"`)
    .join(',')})`;

export const generateClassesFilterFormula = (
  student: PartialBy<StudentTable, 'id'>
) =>
  `OR(${student.fields.Classes.map(
    (classId: string) => `RECORD_ID()="${classId}"`
  ).join(',')})`;
