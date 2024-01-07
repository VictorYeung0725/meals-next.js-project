import Link from 'next/link';
import Image from 'next/image';
import classes from '@/components/main-header.module.css';

import LogoImg from '@/assets/logo.png';
import MainHeaderBackground from './main-header-background';

import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href='/'>
          <Image src={LogoImg} alt='A plate with food on it' priority />
          NextLevel food
        </Link>

        <NavLink />
      </header>
    </>
  );
}
