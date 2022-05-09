export const extractClassData = (classData: ClassDataResponse[]) =>
  classData.reduce(
    (allClasses: ClassDataTable[], singleClasss: ClassDataResponse) =>
      allClasses.concat(singleClasss.fields),
    []
  );

export const createClassDataList = (
  classes: ClassDataTable[],
  students: { [key: string]: string }
) =>
  classes.map((classData: { Name: string; Students: string[] }) => ({
    name: classData.Name,
    students: classData.Students.map(
      (studentId: string) => students[studentId]
    ),
  }));
