import React from "react";
import classnames from "classnames";
import { LoadingOutlined } from "@ant-design/icons";

const Icon = ({ loading, name, className, onClick, fontSize, paddingless = false, color }) => {
  if (loading) {
    return (
      <LoadingOutlined
        className={classnames(className, {
          "px-xs py-xs": !paddingless,
        })}
        style={{
          fontSize,
        }}
      />
    );
  }
  return (
    <i
      className={classnames(`icon-${name} `, color, className, {
        "cursor-pointer": onClick,
        "px-xs py-xs": !paddingless,
      })}
      onClick={onClick}
      style={{
        fontSize,
      }}
    />
  );
};

export default Icon;
