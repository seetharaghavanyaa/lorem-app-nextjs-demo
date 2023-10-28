import type { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className = "" }) => (
  <div className={`container mx-auto sm:px-3 md:px-3 ${className}`}>
    {children}
  </div>
);

export default Container;
