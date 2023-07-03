import { useEffect } from "react"

import {
    Content
} from './style'

const Card = props => {
    const {
        info
    } = props

    useEffect(() => {
        console.log(info)
    }, [])

    return (
        <Content>
            {
                info

                    ?

                    <>
                        <div className="card-header">
                            <h1>{info.locationName}</h1>
                        </div>

                        <div className="card-content">
                            <h1>{ info.clima !== undefined ?
                                `${info.clima.temp.toString().slice(0, 2)} ºC` : 
                                '--' }</h1>
                        </div>

                        <div className="card-footer">
                            <h1>{ info.weather !== undefined ?
                                `${info.weather[0].description}` : '--' }</h1>
                        </div>
                    </>

                    :

                    <></>
            }
        </Content>
    )
}

export default Card