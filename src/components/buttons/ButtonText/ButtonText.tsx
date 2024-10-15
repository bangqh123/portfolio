import "./ButtonText.scss";

interface ButtonProps {
  title: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({title, className}) => {
  return (
    <button className={`button-text ${className}`} type="button">
        {title}
    </button>
  )
};

export default Button;

