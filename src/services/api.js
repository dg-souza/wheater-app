import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5'
})

export const geocodeApi = axios.create({
    baseURL: 'https://api.geoapify.com/v1/geocode'
})