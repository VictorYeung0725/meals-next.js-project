import { getMeals } from '@/lib/meals';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import Link from 'next/link';

export default async function MealsPage() {
  //already inside the server side not need fetch data from server
  const meals = await getMeals();
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your faviourite recipe and cook it yourself. It is easy and fun{' '}
        </p>
        <p className={classes.cta}>
          <Link href='/meals/share'>Share your faviour Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
