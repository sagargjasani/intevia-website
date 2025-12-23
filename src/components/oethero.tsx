interface PageProps {
  herotitle: string;
}

const OetHero = ({ herotitle }: PageProps) => {
  return (
    <div className="oet-hero">
      <div className="container">
        <p>{herotitle}</p>
      </div>
    </div>
  );
};

export default OetHero;
