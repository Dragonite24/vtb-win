import { FC, memo } from "react"

import styles from './styles.module.scss'

const _Login: FC = () => {
  return <div className={styles.Login}>123</div>
}

export const Login = memo(_Login);