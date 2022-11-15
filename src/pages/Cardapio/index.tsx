import styles from './Cardapio.module.scss';
import {ReactComponent as Logo} from "assets/cardapio/logo.svg";

export default function Cardapio() {
  return (
    <main>
      <nav className={styles.menu}>
        <img src={Logo} alt="logo da esfirrou" />
      </nav>
    </main>
  )
}