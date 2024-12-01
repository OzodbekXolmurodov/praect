import React from "react";
import {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategotyQuery,
} from "../redux/api/product-api";

const About = () => {
  const { data } = useGetCategotyQuery();
  const [createCategory, { isLoading: isCreateLoading }] =
    useCreateCategoryMutation();
  const [deleteCategory, { isLoading: isDeleteLoading }] =
    useDeleteCategoryMutation();

  const product = data?.map((pro) => (
    <div
      className="max-w-sm mx-auto bg-white rounded-lg shadow-xl p-5 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
      key={pro.id}
    >
      <div className="overflow-hidden rounded-full w-32 h-32 mx-auto mb-4 border-4 border-yellow-500">
        <img
          src={pro.img}
          alt={pro.title}
          className="object-cover w-full h-full"
        />
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-2">{pro.title}</h2>

      <p className="text-lg font-bold text-yellow-600">{pro.price}$</p>

      <button
        onClick={() => handelDeleteCategory(pro.id)}
        className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
      >
        Delete
      </button>
    </div>
  ));
  const handleCreateCategory = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const newCategory = Object.fromEntries(data);
    createCategory(newCategory)
      .unwrap()
      .then((res) => {
        e.target.reset();
      });
  };
  const handelDeleteCategory = (id) => {
    deleteCategory(id);
  };

  return (
    <>
      <form
        className="flex flex-col gap-4 mb-6 mt-[50px] conteaner"
        onSubmit={handleCreateCategory}
        action=""
      >
        <input
          className="w-9/12 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          type="text"
          required
          placeholder="title"
          name="title"
        />{" "}
        <input
          className="w-9/12 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
          type="number"
          placeholder="price"
          name="price"
        />
        <input
          className="w-9/12 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          type="text"
          required
          placeholder="image"
          name="img"
        />
        <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 w-[75%]">
          Button
        </button>
      </form>

      <div className="flex flex-wrap gap-2 justify-center ">{product}</div>
    </>
  );
};

export default About;
