import React, {CSSProperties, EventHandler, FC, MouseEvent, PropsWithChildren} from "react";
import cs from "classnames";
import { prefixCls } from "../common/variables";

interface ButtonProps {
	className?: string
	style?: CSSProperties
	size?: 'default'  | 'large' | 'small' 
	type?: 'default'  |  'success' | 'warning' | 'error' | 'text'
	loading?: boolean
	disabled?: boolean
	fill?: boolean
	onClick?: EventHandler<MouseEvent<HTMLButtonElement>>
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  className,
  style,
  children,
  size = "default",
  type = "default",
  loading = false,
  disabled = false,
  fill = false,
  onClick
}) => {
  return (
    <button
      className={cs(
        `${prefixCls}-btn`,
        `${prefixCls}-btn__type--${type}`,
        `${prefixCls}-btn__size--${size}`,
        className,
        {
          [`${prefixCls}-btn__status--loading`]: loading,
          [`${prefixCls}-btn__status--disabled`]: disabled,
          [`${prefixCls}-btn__status--fill`]: fill
        }
      )}
      style={style}
      onClick={e => {
        !loading &&
          !disabled &&
          onClick &&
          typeof onClick === "function" &&
          onClick(e);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
