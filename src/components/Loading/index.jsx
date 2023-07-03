import LoadingGif from '../../assets/loading.gif'

import {
    Content
} from './style'

const Loading = props => {
    const {
        isLoading
    } = props

    return(
        <Content isLoading={isLoading} >
            <img src={LoadingGif} alt="loading" />
        </Content>
    )
}

export default Loading