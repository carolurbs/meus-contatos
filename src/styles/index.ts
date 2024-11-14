import styled, { createGlobalStyle } from 'styled-components'
import { Buttons } from '../components/Contato/styles'
import colors from './colors'

const EstiloGlobal = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing: border-box;
font-family: Roboto, sans-serif;
list-style: none;
text-decoration:none;
}
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`
export const MainContainer = styled.main`
  margin-top: 16px;
  padding: 0 40px;
`
export const Título = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

export const Field = styled.input`
  border-radius: 8px;
  font-size: 1.5em;
  text-align: center;
  font-weight: bold;
  padding: 8px;
  color: #666666;
  border-color: #666666;
  width: 100%;
`

export const SaveButton = styled(Buttons)`
  background-color: ${colors.green};
`
export default EstiloGlobal
