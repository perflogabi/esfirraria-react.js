import styles from './Cardapio.module.scss';
import {ReactComponent as Logo} from "";

export default function Cardapio() {
  return (
    <main>
      <nav className={styles.menu}>
        <img src="assets/logo.svg" alt="logo da esfirrou" />
      </nav>
    </main>
  )
}