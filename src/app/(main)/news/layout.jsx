import LeftBar from '@/components/homepage/LeftBar';

const NewsDetailsLayout = ({ children }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-12  gap-10 container mx-auto'>

      <main className='grid-cols-1 md:col-span-9'>
        {children}
      </main>
      <aside className='grid-cols-1 md:col-span-3'>
      <LeftBar  />
      </aside>
    </div>
  );
};

export default NewsDetailsLayout;