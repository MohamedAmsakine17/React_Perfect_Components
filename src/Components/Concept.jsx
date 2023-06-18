import Card from "../UI/Conceptlist";
const Concept = (props) => {
  return (
    <Card>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </Card>
  );
};
export default Concept;
