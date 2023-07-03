import { useEffect, useState } from "react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { api, geocodeApi } from "./services/api"

import {
  Container
} from './styles/GlobalStyle'

import Card from "./components/Card"

import Search from './assets/search.png'

import Loading from "./components/Loading";

const App = () => {
  const [info, setInfo] = useState({})
  const [address, setAddress] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getLocation()
  }, [])

  const notify = (text) => { toast(text) }

  const getWeatherInformation = async (position) => {
    setIsLoading(true)
    await api.get('/weather',
      {
        params: {
          lat: position.latitude,
          lon: position.longitude,
          lang: 'pt_br',
          appid: process.env.REACT_APP_WEATHER_API
        }
      }).then(response => {
        let obj = {
          locationName: `${response.data.name}, ${response.data.sys.country}`,
          clima: response.data.main,
          weather: response.data.weather
        }

        setInfo(obj)
        setAddress('')
        setIsLoading(false)
      })
  }

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherInformation(position.coords)
    })
  }

  const searchByAddress = async () => {
    if (address !== '') {
      await geocodeApi.get('/search',
        {
          params: {
            text: address,
            apiKey: process.env.REACT_APP_GEO_API
          }
        }).then(response => {
          const obj = {
            latitude: response.data.features[0].properties.lat,
            longitude: response.data.features[0].properties.lon
          }

          getWeatherInformation(obj)
        }).catch(err => {
          notify('Houve um erro ao procurar por endereço')
        })
    } else { notify('Preencha o campo do endereço') }
  }

  return (
    <Container>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search By Address"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />

        <img onClick={() => searchByAddress()} src={Search} alt="search" />
      </div>

      <Card info={info} />

      <ToastContainer />
      <Loading isLoading={isLoading} />
    </Container>
  )
}

export default App