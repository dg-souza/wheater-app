import styled from "styled-components"

export const Content = styled.div`
    position: absolute;
    display: ${props => props.isLoading ? 'flex' : 'none' };
    background: rgba(0, 0, 0, .4);
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

    img {
        
    }
`