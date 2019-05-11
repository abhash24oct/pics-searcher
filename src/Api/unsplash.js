import Axios from 'axios';

 const unsplash = Axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization:'Client-ID a6da0c79de7b8e1c54085b538d7281bd25cea2bbfd7dfb861aefbf656f2b583d'
    }   
});

export default unsplash;



