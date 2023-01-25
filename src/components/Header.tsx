import styles from './Header.module.css'

import igniteLogo from '../image/Ignite-logo.svg';

export function Header(){
    return(
        <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite"/>
        </header>
    );
}