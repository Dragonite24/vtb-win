import { keyframes } from 'styled-components'

export const spinner = keyframes`
    100% {
       transform: rotate(1turn);
    }
`

export const blinking = keyframes`
    50% {
        opacity: 0;
    }
    `

export const floating = keyframes`
	0% {
		transform: translate(0px, 0px);
	}
	33% {
		transform: translate(-20px, -10px);
	}
    66% {
        transform: translate(5px, 10px);
    }
	100% {
        transform: translate(0px, 0px);
	}
`
