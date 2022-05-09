interface ClassData {
  name: string;
  students: string[];
}

interface ClassDataTable {
  Name: string;
  Students: string[];
}

interface StudentTable {
  id: string;
  fields: {
    Name: string;
    Classes: string[];
  };
}

interface ClassDataResponse {
  fields: ClassDataTable;
}
