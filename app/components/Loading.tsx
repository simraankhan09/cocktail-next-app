import React from "react";

const Loading = (props: { text?: string }) => {
  const { text = "Loading..." } = props;
  return (
    <div className="flex items-center justify-center">
      <svg
        className="mr-3 size-5 animate-spin bg-primary"
        viewBox="0 0 24 24"
      ></svg>
      {text}
    </div>
  );
};

export default Loading;
