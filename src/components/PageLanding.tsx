import Landing from "../images/Landing.png";
function PageLanding() {
  return (
    <section className="landing">
      <div className="landing__text-wrapper">
        <h1 className="landing__title">Hlavní nadpis webu</h1>
        <p className="landing__description">
          V k žert planetu rysů obdivují stravování starověkého zebřičky u tahů
          zimující. Akcí a důkaz pomoci narozen muzea signálem.
        </p>
        <div className="landing__button-wrapper">
          <button className="button--secondary">Více informací</button>
          <button className="button--primary">Poptat nabídku</button>
        </div>
      </div>
      <div className="landing__image">
        <img className="sectionImg" src={Landing} alt="" />
      </div>
    </section>
  );
}

export default PageLanding;
