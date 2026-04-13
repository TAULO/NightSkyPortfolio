import { useEffect, useState } from 'react';
import { print } from 'graphql';
import hardcoverQuery from '../queries/hardcover.graphql';

export const useHardcoverAPI = () => {
  const defaults = {
    wantToRead: [],
    currentlyReading: [],
    read: [],
  };
  const [hardcover, setHardcover] = useState<any>(defaults);

  useEffect(() => {
    const response = fetch('https://api.hardcover.app/v1/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_HARDCOVER_BEARER_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: print(hardcoverQuery) }),
    });

    response
      .then((data) => data.json())
      .then((data: any) => {
        const myBooks = data.data.me[0];

        const wantToRead =
          myBooks['want_to_read'].map((book: any) => {
            return {
              ...book.book,
              author: book.book.contributions[0].author.name,
              rating: book.rating,
            };
          }) ?? [];

        const currentlyReading =
          myBooks['currently_reading'].map((book: any) => {
            return {
              ...book.book,
              author: book.book.contributions[0].author.name,
              rating: book.rating,
            };
          }) ?? [];

        const read =
          myBooks['read'].map((book: any) => {
            return {
              ...book.book,
              author: book.book.contributions[0].author.name,
              rating: book.rating,
            };
          }) ?? [];

        setHardcover({
          wantToRead,
          currentlyReading,
          read,
        });
      })
      .catch((err: any) => {
        console.error('Hardcover API Error:', err);
        setHardcover(defaults);
      });
  }, []);

  return hardcover;
};
