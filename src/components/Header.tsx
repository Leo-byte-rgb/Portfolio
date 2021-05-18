import styles from './style.module.scss';

export const Header = () => {
   return (
    <nav className={styles.container}>
        <img src="icons/logo.svg" alt="logo" />
    </nav>
   ) 
}