const Card = (props) => {
  const className = props.className;
  return <li className={"concept " + className}>{props.children}</li>;
};

export default Card;
