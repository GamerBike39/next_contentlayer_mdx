import { FC } from "react";

interface PrezCardProps {
  children: React.ReactNode;
}

const PrezCard: FC<PrezCardProps> = ({ children }) => {
  return <div className="mini-card-grid">{children}</div>;
};

export default PrezCard;
