import { useEffect, useState } from 'react';

const hardcoverQuery = `query Me {
  me {
    id
    want_to_read: user_books(where: { status_id: { _eq: 1 } }) {
      id
      book {
        id
        title
        pages
        slug
        image {
          url
        }
      }
    }
    currently_reading: user_books(where: { status_id: { _eq: 2 } }) {
      id
      book {
        id
        title
        pages
        slug
        image {
          url
        }
      }
    }
    read: user_books(where: { status_id: { _eq: 3 } }) {
      id
      book {
        id
        title
        pages
        slug
        image {
          url
        }
      }
    }
  }
}`;

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
      body: JSON.stringify({ query: hardcoverQuery }),
    });

    response
      .then((data) => data.json())
      .then((data) => {
        const myBooks = data.data.me[0];

        const wantToRead =
          myBooks.want_to_read.map((book: any) => book.book) ?? [];
        const currentlyReading =
          myBooks.currently_reading.map((book: any) => book.book) ?? [];
        const read = myBooks.read.map((book: any) => book.book) ?? [];

        setHardcover({
          wantToRead,
          currentlyReading,
          read,
        });
      })
      .catch((err: any) => {
        console.log('Hardcover API Error:', err);
        setHardcover(defaults);
      });
  }, []);

  return hardcover;
};
