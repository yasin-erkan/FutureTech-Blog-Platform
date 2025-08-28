import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { CreateBlogValues, GetAllParams } from "../types";
import blogService from "../services/blog";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useBlogs = (params?: GetAllParams) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const blogs = () =>
    useQuery({
      queryKey: ["blogs", params],
      queryFn: () => {
         return blogService.getAll(params);
      },
    });

  const ownBlogs = () =>
    useQuery({
      queryKey: ["ownBlogs", params], 
      queryFn: () => blogService.getOwn(params),
    });

  const blog = (id: string) =>
    useQuery({
      queryKey: ["blog", id],
      queryFn: () => blogService.getById(id),
      enabled: !!id,
    });

  const createBlog = useMutation({
    mutationKey: ["createBlog"],
    mutationFn: (values: CreateBlogValues) => blogService.create(values),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      navigate(`/blog/${data._id}`);
      toast.success("Blog successfully created");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const updateBlog = useMutation({
    mutationKey: ["updateBlog"],
    mutationFn: ({
      id,
      values,
    }: {
      id: string; 
      values: Partial<CreateBlogValues>;
    }) => blogService.update(id, values),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      navigate(`/blog/${data._id}`);
      toast.success("Blog successfully updated");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const deleteBlog = useMutation({
    mutationKey: ["deleteBlog"],
    mutationFn: (id: string) => blogService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ownBlogs"] });
      toast.success("Blog successfully deleted");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    blogs,
    ownBlogs,
    blog,
    createBlog,
    updateBlog,
    deleteBlog,
  };
};
