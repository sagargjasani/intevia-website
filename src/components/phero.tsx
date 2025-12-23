interface PageProps {
  herotitle: string;
}

const Phero = ({ herotitle }: PageProps) => {
  return (
    <div className="post-hero">
      <div className="container">
        <p>{herotitle}</p>
      </div>
    </div>
  );
};

export default Phero;
