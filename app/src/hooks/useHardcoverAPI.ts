import { useEffect, useState } from 'react';

const hardcoverQuery = `query Me {
  me {
    id
    user_books(where: { status_id: { _eq: 2 } }) {
      id
      user_book_reads {
        progress_pages
      }
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
  const [hardcover, setHardcover] = useState<any>([]);

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
        setHardcover(data.data.me[0].user_books.map((book: any) => book.book));
      })
      .catch((err: any) => {
        console.log('Hardcover API Error:', err);
        setHardcover([]);
      });
  }, [hardcoverQuery]);

  return hardcover;
};
