import "./styles/Panel.scss";
import { useEffect, type FC } from "react";
import IconCross from "../../icons/IconCross";
import type { IProps } from "./types";

const Panel: FC<IProps> = ({ children, handlePanelDismiss }) => {
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("modal");
    body.classList.add("modal");
    return () => {
      body.classList.remove("modal");
    };
  }, []);

  const dismissPanel = () => {
    handlePanelDismiss();
  };

  return (
    <div className="panel">
      <div className="cloak" onClick={dismissPanel}></div>
      <div className="panel-content card">
        <button className="close" onClick={dismissPanel}>
          <IconCross />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Panel;
