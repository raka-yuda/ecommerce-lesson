import { Button } from "react-bootstrap";

type Props = {
  className: string;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  title: string;
};

const MainButton = ({ className, onClick, title }: Props) => {
  return (
    <Button className={className} onClick={onClick}>
      {title}
    </Button>
  );
};

export default MainButton;
