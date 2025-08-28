import {useBlogs} from '../../hooks/useBlogs';
import List from '../../components/list';

const Blogs = () => {
  const {data, isLoading} = useBlogs();

  return (
    <div className="padding-x py-10">
      <h1 className="text-2xl lg:text-3xl xl:text-4xl mb-8">All Blog Posts</h1>
      <List data={data} isLoading={isLoading} />
    </div>
  );
};

export default Blogs;
