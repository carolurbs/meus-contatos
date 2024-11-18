import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../styles/colors'
export const Circle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  background-color: ${colors.green};
  color: ${colors.grey};
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  font-size: 40px;
`
