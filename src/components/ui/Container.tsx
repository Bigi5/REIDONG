import React from "react";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`max-w-7xl mx-auto px-4 md:px-8 lg:px-16 ${className}`}>{children}</div>;
}

export default Container;
