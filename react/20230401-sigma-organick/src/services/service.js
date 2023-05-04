import axios from "axios";

// Basic function for getting data from backend
export const fetchData = async (url) => {
  try {
    return await axios.get(url);
  } catch (err) {
    console.error( err );
  }
}

// Basic function for getting data from backend
export const postData = async (url, data) => {
  try {
    return await axios.post(url, data);
  } catch (err) {
    console.error( err );
  }
}

// Function of getting list of products (with basic function)
export const fetchProducts = async () => {
  const data = await fetchData("http://localhost:8000/getAllProducts");
  console.log( data )
  return data.data;
}

export const postOrder = async (data) => {
  // const {response} = await postData("http://localhost:8000/addOrder", data);
  // console.log( response );
  axios.post('http://localhost:8000/addOrder', data)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
