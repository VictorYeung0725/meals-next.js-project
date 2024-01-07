//http://localhost:3000/meals/ ... anything dynamic here will render

import { getMeal } from '@/lib/meals';
import classes from './page.module.css';

import { notFound } from 'next/navigation';
import Image from 'next/image';

export default function MealsDetailsPage({ params }) {
  const meal = getMeal(params.mealsSlug);
  console.log(meal);

  //what if user accessing a meals that does not exist in the meals data
  //we want it to return a closet not found page using next.js default solutions
  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br />');
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto: ${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
