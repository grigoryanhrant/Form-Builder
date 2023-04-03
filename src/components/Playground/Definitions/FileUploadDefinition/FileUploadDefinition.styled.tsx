import styled from 'styled-components'

export const Main = styled.div``

export const TargetBox = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dashed #aab2b7;
    border-radius: 4px;
    cursor: pointer;
`

export const TargetBoxCenter = styled.div`
    width: 100%;
    height: 100%;
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 14px;
`

export const Input = styled.input`
    display: none;
`

export const Icon = styled.div`
    svg {
        fill: #ccd6dd;
        font-size: 60px;
    }
`

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto auto;
`

export const Description = styled.span`
    font-size: 15px;
    font-weight: 700;
    color: #ccd6dd;
    text-transform: uppercase;
`

export const UploadFromInput = styled.span`
    font-size: 15px;
    font-weight: 700;
    color: #ccd6dd;
    margin-top: 20px;
`

export const Files = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 14px;
`
