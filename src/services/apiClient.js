import axios from 'axios';
export const apiClient = () => {
    axios
        .get("https://api.themoviedb.org/3/trending/all/week/?api_key=3cf77d09be3435ea74b78b475ae906b5")
        .then((resp) => {
        console.log(resp);
    });
    return;
};
