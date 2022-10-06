import { FC, memo } from "react";

import styles from './styles.module.scss';

const _Home: FC = () => {
  return <div className={styles.Home}>123</div>
}

export const Home = memo(_Home);