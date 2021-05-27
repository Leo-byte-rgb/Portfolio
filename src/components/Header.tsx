import styles from './style.module.scss';

export const Header = () => {
   return (
    <nav className={styles.container}>
        <img src="icons/Logo.svg" alt="logo" />
        <button >
            <a href="mailto: leonardo.a10@aluno.ifsc.edu.br">
                Contato
            </a>
        </button>
    </nav>
   ) 
}