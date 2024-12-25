import axios from 'axios';


const API_KEY = 'AIzaSyA9Vd4Xkvr0vHgG8lVXrV1IZ_vGGdKz2zs';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';
export const fetchVideos = async (query) => {
try {
const response = await axios.get(`${BASE_URL}/search`, {
params: {
part: 'snippet',
q: query,
key: API_KEY,
type: 'video',
maxResults: 20,
},
});
return response.data.items;
} catch (error) {
console.error('Erreur lors de la récupération des vidéos:', error);
return [];
}
};
