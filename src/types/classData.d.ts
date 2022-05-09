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
  };
}

interface ClassDataResponse {
  fields: ClassDataTable;
}
