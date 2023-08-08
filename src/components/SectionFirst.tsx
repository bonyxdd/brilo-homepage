import SectionFirstImg from "../images/SectionFirst.png";
function SectionFirst() {
  return (
    <section className="section--first">
      <div className="landing__image">
        <img className="sectionImg" src={SectionFirstImg} alt="" />
      </div>
      <div
        className="landing__text-wrapper"
        style={{ padding: "0px 0px 0px 70px" }}
      >
        <h2 className="landing__title">Nechte své peníze růst!</h2>
        <p className="landing__description">
          V k žert planetu rysů obdivují stravování starověkého zebřičky u tahů
          zimující. Akcí a důkaz pomoci narozen muzea signálem – jižní
          využitelný uchu těžko. Dravcům vousům houba horu žijí mého vývojovou
          z společnosti nemigrují vy plná internetová, je charisma vnitrozemí,
          oceán a přijíždějí příbuzných zjevné, zemskou dá spolu. Moc král
          prokletí obyvatel holka ochlazení žít mimořádnými virů stejný či
          palec.<br></br>
          <br></br>• Musel za až angličtinu látky nohy deprimovaná polokouli
          i roku map.<br></br>• Těžko popsal, ještě zúročovat však, by čase
          musel mi nuly, ta naší.<br></br>• Musel za až angličtinu látky nohy
          deprimovaná polokouli i roku map.<br></br>• Těžko popsal, ještě
          zúročovat však, by čase musel mi nuly, ta naší.
        </p>
        <div className="landing__button-wrapper">
          <button className="button--primary">Zjistit více</button>
        </div>
      </div>
    </section>
  );
}

export default SectionFirst;
