import "./heros.scss";
interface PageProps {
  heroTitle: string;
}
const Chero = ({ heroTitle }: PageProps) => {
  return (
    <div className="au-hero">
      <div className="container">
        <p>{heroTitle}</p>
      </div>
    </div>
  );
};

export default Chero;
