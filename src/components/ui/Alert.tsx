import { ReactNode } from "react";
import "./index.scss";
// import { typesAlert } from "../../types/Type";
interface IProps {
  // (typesAlert) from alert file
  type: string;
  title: string;
  paragraph?: string;
  icon: ReactNode;
  iconClose: ReactNode;
  children: ReactNode;
}
const Alert = ({ type, title, icon, iconClose, children }: IProps) => {
  return (
    <div className="container">
      <div className={type}>
        <div className="alert-title">
          <div className="title">
            {icon}
            <h2>{title}</h2>
          </div>
          {iconClose}
        </div>
        <div className="paragraph">{children}</div>
      </div>
    </div>
  );
};

export default Alert;
