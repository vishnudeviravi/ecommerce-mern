//["samsung","apple"] ===>  brand=samsung&brand=apple
export const buildQuery = (label, data) => {
  let queryString = "";
  for (let i of data) {
    queryString += `${label}=${i}&`;
  }
  return queryString;
};
