import axios from 'axios'



const myApi = axios.create({
    baseURL: 'http://localhost:5000',
  });



  export const fetchUsers = () => {
    return myApi.get(`/users`).then(({data}) => {  
      console.log(data)
    })
  };

  export const fetchImages = () => {
    return myApi.get(`/images`).then(({ data }) => {
      console.log(data)


      console.log("output of image fetch length")


    }).catch((err)=>{

      console.log("There has been an error", err)
    })
  };







  

  