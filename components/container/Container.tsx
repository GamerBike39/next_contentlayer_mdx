import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("max-w-6xl mx-auto py-10 my-5 px-5", className)}>
      {children}
    </div>
  );
};

export default Container;
