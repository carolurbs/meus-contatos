import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing: border-box;
font-family: Roboto, sans-serif;
list-style: none;
}
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`
export default EstiloGlobal
