import Axios from 'axios';

 const unsplash = Axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization:'Client-ID xxxxxxxxxxxxxxxxxxxxxxxxxx'
    }   
});

export default unsplash;



