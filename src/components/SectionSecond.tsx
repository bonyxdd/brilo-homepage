import SectionSecondImg from "../images/SectionSecond.png";
function SectionSecond() {
  return (
    <section className="section--second">
      <div className="landing__text-wrapper">
        <h2 className="landing__title">Nechte své peníze růst!</h2>
        <p className="landing__description">
          V k žert planetu rysů obdivují stravování starověkého zebřičky u tahů
          zimující. Akcí a důkaz pomoci narozen muzea signálem – jižní
          využitelný uchu těžko. Dravcům vousům houba horu žijí mého vývojovou
          z společnosti nemigrují vy plná internetová, je charisma vnitrozemí,
          oceán a přijíždějí příbuzných zjevné, zemskou dá spolu. Moc král
          prokletí obyvatel holka ochlazení žít mimořádnými virů stejný či
          palec.
        </p>
        <div className="landing__button-wrapper">
          <button className="button--primary">Zaregistrovat se</button>
        </div>
      </div>
      <div className="landing__image">
        <img className="sectionImg" src={SectionSecondImg} alt="" />
      </div>
    </section>
  );
}

export default SectionSecond;
