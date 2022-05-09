export default (type: string): asyncBaseType => ({
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`,
  LOADING: `${type}_LOADING`,
});
