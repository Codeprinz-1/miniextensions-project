import {
  generateClassDataList,
  generateClassesFilterFormula,
  generateStudentsFilterFormula,
} from '../../utils';

test('generates a filter formula for a Class query with ids', () => {
  const idMock: string = 'recordId1';
  const studentMock: PartialBy<StudentTable, 'id'> = {
    fields: { Classes: [idMock], Name: 'student1' },
  };
  const expectedResult: string = `OR(RECORD_ID()="${idMock}")`;

  expect(generateClassesFilterFormula(studentMock)).toBe(expectedResult);
});

test('generates a filter formula for a Student query with ids', () => {
  const idMock: string = 'recordId1';
  const classesMock: PartialBy<ClassDataTable, 'Name'>[] = [
    { Students: [idMock] },
  ];
  const expectedResult: string = `OR(RECORD_ID()="${idMock}")`;

  expect(generateStudentsFilterFormula(classesMock)).toBe(expectedResult);
});

test('generates a list of ClassData objects', () => {
  const idMock: string = 'recordId1';
  const classesMock: ClassDataTable[] = [
    { Name: 'class1', Students: [idMock] },
  ];
  const studentsMock: { [key: string]: string } = { [idMock]: 'student1' };

  const expectedResult: ClassData[] = [
    { name: 'class1', students: ['student1'] },
  ];

  expect(generateClassDataList(classesMock, studentsMock)).toEqual(
    expectedResult
  );
});
