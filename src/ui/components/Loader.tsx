import { styled, theme } from 'ui/styles'
import { spinner } from './keyframes'

const Spinner = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: radial-gradient(farthest-side, ${theme.palette.black} 94%, #0000) top/9px 9px no-repeat,
    conic-gradient(#0000 30%, ${theme.palette.black});

  mask: radial-gradient(farthest-side, #0000 calc(100% - 9px), #000 0);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 9px), #000 0);
  animation: ${spinner} ${theme.transition.spin}ms infinite linear;
`

export const Loader: React.FC = () => {
  return <Spinner />
}
