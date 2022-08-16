import Link from 'next/link'
import styles from './Navbar.module.css'
import Image from 'next/image'
import logoPokeball from '../../public/images/pokeball.png'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src={logoPokeball}
          width="30"
          height="30"
          alt="PokeNext"
        />
        <h1>PokeNext</h1>
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Sobre</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}