import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .search-bar {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        gap: 15px;
        align-items: center;

        input {
            border: none;
            border-radius: 10px;
            padding: 10px;
            width: 50%;
            font-size: 18px;
            outline: none;

            box-shadow: 0px 0px 7px 0px #000000;
        }

        img {
            width: 50px;
            height: 50px;
            transition: 0.5s;

            &:hover {
                cursor: pointer;
                width: 40px;
                height: 40px;
            }
        }
    }
`