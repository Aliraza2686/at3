import React from "react";
import { useNavigate } from "react-router-dom";

export const Jumbo = ({ text, path }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="text-2xl "> {text}</div>
      {path?.length > 0 && (
        <div>
          {path?.map((item, i) => (
            <span
              onClick={() => navigate(item?.click)}
              className={`text-xs cursor-pointer ${
                i === path?.length - 1 ? "text-gray-800" : "text-gray-400"
              }`}
            >  
              {item?.title} {i < path?.length - 1 && " >"}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
