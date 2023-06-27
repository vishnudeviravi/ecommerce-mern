//["samsung","apple"] ===>  brand=samsung&brand=apple
export const buildQuery = (label, data) => {
  let queryString = "";
  for (let i of data) {
    queryString += `${label}=${i}&`;
  }
  return queryString;
};


export const setToken = token =>{
if (typeof window != "undefined"){
  localStorage.setItem("token",token)
}
}

export const getToken =()=>{
  if (typeof window != "undefined"){
    return localStorage.getItem("token")
  }
}