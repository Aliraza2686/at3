import React, { useEffect, useState } from 'react'
import { AddText } from '../text/AddText';
import { PencilIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from 'react-redux';
import { getAll_thunk } from '../../../../store/text';

export const BusinessText = () => {
    const dispatch = useDispatch()
    const text =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
  const [addText, setAddText] = useState(false);

  const {data} = useSelector((state) => state.getAllText)

  const handleGetText = () => {
    dispatch(getAll_thunk())
  }
  useEffect(() => {
    handleGetText()
  }, [])
  return (
    <div>
         {addText && <AddText open={addText} setOpen={setAddText} />}
      
         <div className="mt-5">
          <div className="flex justify-end items-center mb-5">
            <button
              onClick={() => setAddText(!addText)}
              type="button"
              className="block rounded-md  px-3 py-2 text-center text-sm font-semibold text-black border border-gray-900 hover:bg-gray-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
              Add Text
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div class="relative max-h-48 overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all border bg-white ">
              <span
                className="absolute bg-slate-100 rounded-xl hover:shadow-xl p-2 right-2 top-2  cursor-pointer"
                onClick={() => console.log(false)}
              >
                <PencilIcon className="w-5 h-5" />
              </span>
              <p class="p-4 text-gray-700 mt-10">{text}</p>

              <div class="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-white to-transparent"></div>
            </div>
            <div class="relative max-h-48 overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all border bg-white ">
              <span
                className="absolute bg-slate-100 rounded-xl hover:shadow-xl p-2 right-2 top-2  cursor-pointer"
                onClick={() => console.log(false)}
              >
                <PencilIcon className="w-5 h-5" />
              </span>
              <p class="p-4 text-gray-700 mt-10">{text}</p>

              <div class="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-white to-transparent"></div>
            </div>
            <div class="relative max-h-48 overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all border bg-white ">
              <span
                className="absolute bg-slate-100 rounded-xl hover:shadow-xl p-2 right-2 top-2  cursor-pointer"
                onClick={() => console.log(false)}
              >
                <PencilIcon className="w-5 h-5" />
              </span>
              <p class="p-4 text-gray-700 mt-10">{text}</p>

              <div class="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-white to-transparent"></div>
            </div>
          </div>
        </div>
    </div>
  )
}
