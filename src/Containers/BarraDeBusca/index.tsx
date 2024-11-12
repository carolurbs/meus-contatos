import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import { changeKey } from '../../store/reducers/filter'

const BarraDeBusca = () => {
  const dispatch = useDispatch()
  const { key } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Header>
      <div>
        <S.Field
          type="text"
          placeholder="Buscar"
          value={key}
          onChange={(e) => dispatch(changeKey(e.target.value))}
        />
      </div>
    </S.Header>
  )
}
export default BarraDeBusca
