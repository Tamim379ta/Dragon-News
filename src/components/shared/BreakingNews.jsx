import React from 'react';
import Marquee from 'react-fast-marquee';

const breakingNews = [
  {
    id: 1,
    news: "Local startup launches an AI-powered study assistant for students."
  },
  {
    id: 2,
    news: "Major update released for a popular web framework, improving performance and security."
  },
  {
    id: 3,
    news: "Scientists discover a new method to store renewable energy more efficiently."
  },
  {
    id: 4,
    news: "Global tech conference announces innovations in virtual reality and AI."
  }
];


const BreakingNews = () => {
  return (
    <div className='container flex  gap-2 bg-base-300 p-3 mx-auto'>

      <div className='btn btn-secondary'>Latest</div>

      <Marquee>
        <div className='flex gap-10'>
          {
            breakingNews.map(n => <p key={n.id}>{n.news}</p>)
          }
        </div>
      </Marquee>

    </div>
  );
};

export default BreakingNews;