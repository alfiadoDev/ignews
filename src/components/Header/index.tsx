import Link from 'next/link';
import { useRouter } from 'next/router';
import { ActiveLink } from '../ActiveLink';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="Logo" />
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            Home
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            Posts
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}