'use client';

//next.js will pass a props of error
function error({ error }) {
  return (
    <main className='error'>
      <h1>an error occured!</h1>
      <p>Failed to fetch meals data, please try again later</p>
    </main>
  );
}

export default error;
