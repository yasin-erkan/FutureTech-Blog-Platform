import {Form, Formik} from 'formik';
import {useParams} from 'react-router-dom';
import Input from '../../components/input';
import ReactSelect from 'react-select/creatable';
import {useEffect, useState} from 'react';
import type {CreateBlogValues} from '../../types';
import {useBlogs} from '../../hooks/useBlogs';
import {blogSchema} from '../../utils/schema';

const BlogForm = () => {
  // id al
  const {id} = useParams();

  // edit mode control
  const isEditMode = !!id;

  // blog hooks
  const {createBlog, updateBlog, blog} = useBlogs();

  // get the data of the blog to be edited
  const {isLoading, data} = blog(id as string);

  // tags to state
  const [tags, setTags] = useState<string[]>(data?.tags || []);

  // tags to state
  useEffect(() => {
    if (data?.tags) {
      setTags(data.tags);
    }
  }, [data]);

  // form submitting
  const handleSubmit = (values: any) => {
    const data: CreateBlogValues = {...values, tags};

    if (isEditMode) {
      updateBlog.mutate({id: id as string, values: data});
    } else {
      createBlog.mutate(data);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto padding-x py-10">
      <h1 className="text-3xl font-bold text-zinc-400 mb-8">
        {isEditMode ? 'Blog Edit' : 'Create Blog'}
      </h1>

      <Formik
        initialValues={{
          title: data?.title || '',
          content: data?.content || '',
        }}
        validationSchema={blogSchema}
        onSubmit={handleSubmit}
        enableReinitialize>
        {({isSubmitting}) => (
          <Form className="flex flex-col gap-10">
            <Input label="Title" name="title" type="text" />

            <Input label="Content" name="content" type="textarea" />

            <div className="flex flex-col gap-2">
              <label
                className="block text-sm/6 font-medium text-white"
                htmlFor="tags">
                Tags
              </label>

              <ReactSelect
                isMulti
                onChange={event => setTags(event.map(tag => tag.value))}
                value={tags.map(tag => ({label: tag, value: tag}))}
              />
            </div>

            <div className="flex justify-end mt-10">
              <button
                disabled={isSubmitting}
                type="submit"
                className="bg-yellow-55 text-black px-4 py-2 rounded-md hover:bg-yellow-60 transition cursor-pointer">
                {isEditMode ? 'Edit' : 'Create'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BlogForm;
