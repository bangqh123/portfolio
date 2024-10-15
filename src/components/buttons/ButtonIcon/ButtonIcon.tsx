import "./ButtonIcon.scss";

interface ButtonProps {
    icon: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, icon}) => {
  return (
    <button className={`button-icon ${className}`}>
        {icon}
    </button>
  )
};

export default Button;
