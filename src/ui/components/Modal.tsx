import React, { PropsWithChildren, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import { breakpoints } from 'shared/dimensions'
import { styled, theme } from 'ui/styles'

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  padding: 50px 0;
  top: 0;
  left: 0;

  z-index: 9999; // todo
  overflow: auto;

  @media (max-width: ${breakpoints.desktop - 1}px) {
    padding: 64px 0;
  }

  @media (max-width: ${breakpoints.mobile - 1}px) {
    overflow-x: hidden;
    padding: 16px;
  }
`

const Content = styled.div<{ maxWidth: string }>`
  position: relative;
  max-width: ${({ maxWidth }) => maxWidth};
  background-color: white;
  border-radius: 16px;
  padding: 32px 32px 40px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: scale(0);
  transition: opacity, transform, ${theme.transition.hover}ms ease;

  &.open {
    opacity: 1;
    transform: scale(1);
  }

  @media (max-width: ${breakpoints.mobile - 1}px) {
    overflow-y: scroll;
    padding: 16px 16px 24px !important;
    opacity: 1;
  }
`

type Props = {
  isVisible: boolean
  contentMaxWidth?: string
  onOverlayClick?: () => void
}

export const Modal: React.FC<PropsWithChildren<Props>> = ({
  isVisible,
  contentMaxWidth = '90%',
  onOverlayClick,
  children
}) => {
  const portal = document.getElementById('modal')
  const root = document.getElementById('root')
  const body = document.body

  const [isOpening, setIsOpening] = useState(isVisible)

  const isOpen = React.useMemo(() => !!portal && isVisible, [portal, isVisible])

  useEffect(() => {
    setIsOpening(isVisible)
  }, [isVisible])

  useEffect(() => {
    if (isOpen) {
      root?.classList.add('blur')
      body.classList.add('overflow-hidden')
    } else {
      root?.classList.remove('blur')
      body.classList.remove('overflow-hidden')
    }
  }, [isOpen, root, body])

  if (!isOpen) {
    return null
  }

  return ReactDOM.createPortal(
    <Wrapper onClick={onOverlayClick}>
      <Content
        maxWidth={contentMaxWidth}
        className={isOpening ? 'open' : ''}
        onClick={(ev) => {
          ev.stopPropagation()
        }}
      >
        {children}
      </Content>
    </Wrapper>,
    portal!
  )
}
