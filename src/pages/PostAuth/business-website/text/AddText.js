import React from 'react'
import Slider from '../../../../components/templates/atoms/slider/Slider'
import { useForm } from "react-hook-form";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { useDispatch } from 'react-redux';
import { createText_thunk } from '../../../../store/text';
import { toastHandler } from '../../../../base/toastManager/toasthandler';

export const AddText = ({open, setOpen}) => {
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log("Form Data:", data);

        dispatch(createText_thunk(data)).then((response) => {
            if(response.payload) {
                setOpen(false)
            }
        })
        // toastHandler("Form submitted successfully!", "error");
      };


  return (
    <Slider title={"Add Text"} open={open} setOpen={setOpen}>
     
     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title Field */}
        <div className="relative">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <div className="relative mt-1">
            <input
              type="text"
              id="title"
              placeholder="Enter title"
              {...register("title", {
                required: "Title is required",
                maxLength: { value: 50, message: "Max 50 characters allowed" },
              })}
              className={`block w-full rounded-md border px-4 py-2 ${
                errors.title ? "border-red-500" : "border-gray-300"
              } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.title && (
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-red-500">
                <ExclamationCircleIcon className="h-5 w-5" />
              </span>
            )}
          </div>
          {errors.title && (
            <p className="mt-2 text-sm text-red-600">{errors.title.message}</p>
          )}
        </div>

        {/* Text Field */}
        <div className="relative">
          <label htmlFor="text" className="block text-sm font-medium text-gray-700">
            Text
          </label>
          <textarea
            id="text"
            rows="4"
            placeholder="Write something..."
            {...register("text", {
              required: "Text is required",
              minLength: { value: 20, message: "Minimum 20 characters" },
            })}
            className={`block w-full rounded-md border px-4 py-2 ${
              errors.text ? "border-red-500" : "border-gray-300"
            } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          ></textarea>
          {errors.text && (
            <p className="mt-2 text-sm text-red-600">{errors.text.message}</p>
          )}
        </div>

        {/* Category Field */}
        <div className="relative">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            {...register("category", { required: "Please select a category" })}
            className={`block w-full rounded-md border px-4 py-2 ${
              errors.category ? "border-red-500" : "border-gray-300"
            } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          >
            <option value="">-- Select --</option>
            <option value="jumbo_title">Jumbo title</option>
            <option value="jumbo_desc">Jumbo Desc</option>
            <option value="about_title">About Title</option>
          </select>
          {errors.category && (
            <p className="mt-2 text-sm text-red-600">{errors.category.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="relative">
          <button
            type="submit"
            className="w-full mt-24 inline-flex justify-center items-center px-4 py-2 border border-gray-900 rounded-md shadow-sm text-sm font-medium text-black hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </Slider>
  )
}
