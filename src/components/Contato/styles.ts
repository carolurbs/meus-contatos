import styled from 'styled-components'
import colors from '../../styles/colors'
import { Buttons } from '../../styles'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  border-radius: 16px;
`
export const Name = styled.input`
  font-size: 18px;
  font-weight: bold;
  display: block;
  width: 100%;
  border: none;
  text-align: center;
  margin-bottom: 16px;
  background-color: transparent;
`
export const Info = styled.input`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  border: none;
  text-align: center;
  background-color: transparent;
`
export const Actions = styled.div`
  margin-top: 16px;
  border-top: 1px solid rgba (0, 0, 0.1);
  padding-top: 16px;
`

export const CancelButton = styled(Buttons)`
  background-color: ${colors.red};
`
