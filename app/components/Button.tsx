"use client";

import React from "react";

/**
 * @description Common customizable button component
 */
const Button = (
  props: React.ButtonHTMLAttributes<any> & {
    children?: React.ReactNode;
    icon?: React.ReactNode;
  }
) => {
  return (
    <button {...props} className={`btn-primary ${props.className ?? ""}`}>
      <div className="flex items-center justify-center">
        {props.icon ? props.icon : null}
        {props.children ?? null}
      </div>
    </button>
  );
};

export default Button;
