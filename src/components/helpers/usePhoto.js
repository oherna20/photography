
import { ref } from 'vue'
import axios from 'axios'

export const search = ref()
export const photos = ref()


    const api_key = import.meta.env.VITE_APIKEY

    export const getPhotos = async () => {
        try {
            const response = await axios('https://api.pexels.com/v1/search', {
                headers: {
                    Authorization: api_key
                },
                params: {
                    query: search.value,
                }
            })
            photos.value = response.data.photos
        } catch (error) {
            console.log(error)
        }
        
    }

   
            // url:"https://api.pexels.com/v1/search" + search + "&per_page=5&page=1"
            