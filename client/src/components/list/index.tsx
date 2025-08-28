import {useBlogs} from '../../hooks/useBlogs';
import Post from './post';

const List: React.FC = () => {
  const {blogs} = useBlogs();
  const {isLoading, error, data} = blogs();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  // get unique tags
  const tags = ['All', ...new Set(data?.posts.map(blog => blog.tags).flat())];

  return (
    <>
      <div className="flex gap-2 py-5 padding-x overflow-x-auto">
        <div className="flex gap-2 mx-auto">
          {tags.map(tag => (
            <div
              key={tag}
              className={`text-center capitalize bg-dark-15 border border-dark-20 text-grey-60 px-4 py-2 rounded-md cursor-pointer hover:bg-dark-20 transition-colors ${
                tag === 'All' && 'bg-dark-20 text-white'
              }`}>
              {tag}
            </div>
          ))}
        </div>
      </div>

      <div className="min-h-[50vh] py-5 lg:py-10 xl:py-15">
        {data?.posts.map(blog => (
          <Post key={blog._id} post={blog} />
        ))}
      </div>
    </>
  );
};

export default List;
