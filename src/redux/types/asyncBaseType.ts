const asyncBaseType = (type: string): AsyncBaseType => ({
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`,
  LOADING: `${type}_LOADING`,
});

export default asyncBaseType;
