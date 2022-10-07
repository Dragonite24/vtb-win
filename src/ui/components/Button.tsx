import React, { PropsWithChildren } from 'react'

export type ButtonProps = {
  className?: string
  href?: string
  type?: 'button' | 'submit'
  onClick?: (ev: React.MouseEvent) => void
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  type = 'button',
  className,
  href,
  onClick,
  children
}) => {
  if (href) {
    return (
      <a className={className} href={href} onMouseDown={(ev) => ev.preventDefault()}>
        {children}
      </a>
    )
  } else {
    return (
      <button type={type} className={className} onClick={onClick} onMouseDown={(ev) => ev.preventDefault()}>
        {children}
      </button>
    )
  }
}
