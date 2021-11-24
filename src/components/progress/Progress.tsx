import "./styles.scss";
const Progress = () => {
  return (
    <>
      <div className="pie-wrapper progress-45 style-2">
        <span className="label">
          45<span className="smaller">%</span>
        </span>
        <div className="pie">
          <div className="left-side half-circle"></div>
          <div className="right-side half-circle"></div>
        </div>
        <div className="shadow"></div>
      </div>
    </>
  );
};

export default Progress;
