import React from "react";

export default function ButtonConnect({ name, isClick }: IProps) {
  return (
    <div className="relative p-4">
      <button className="pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500">
        {name}
        {isClick}
      </button>
    </div>
  );
}

type IProps = {
  name: string;
  isClick: boolean;
};
