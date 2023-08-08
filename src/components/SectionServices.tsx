import { useState } from "react";
import servicesData from "../services/services.json";

const SectionService = () => {
  type Item = {
    id: number;
    name: string;
    info: string;
    category: string;
    img: string;
  };

  const [servicesArray, setServicesArray] = useState<Item[]>(
    Object.values(servicesData)
  );
  const [buttonClicked, setButtonClicked] = useState<string>("Všechno");

  const handleServices = (category: string) => {
    if (category === "Všechno") {
      setServicesArray(Object.values(servicesData));
    } else {
      const filteredServices = Object.values(servicesData).filter(
        (item) => item.category === category
      );
      setServicesArray(filteredServices);
    }
    setButtonClicked(category);
  };
  return (
    <section className="services">
      <div className="services__info">
        <div className="services__info__wrapper">
          <h2>Vyberte jednu z nabízených služeb</h2>
          <p>
            Hlasu zkrátka nevratné duší indičtí půlkilometrová začali nutné už
            od středisko. Společných snažila líně budoucnost začne vloženy stal
            objevováním, umělé cílem starým dne větvičky názvy moři zabíjí.
          </p>
        </div>
        <div className="services__info__button-wrapper">
          <button
            className={`${
              buttonClicked === "Všechno"
                ? "button--clicked"
                : "button--services"
            }`}
            onClick={() => handleServices("Všechno")}
          >
            Všechno
          </button>
          <button
            className={`${
              buttonClicked === "Látkové tašky"
                ? "button--clicked"
                : "button--services"
            }`}
            onClick={() => handleServices("Látkové tašky")}
          >
            Látkové tašky
          </button>
          <button
            className={`${
              buttonClicked === "Igelitové tašky"
                ? "button--clicked"
                : "button--services"
            }`}
            onClick={() => handleServices("Igelitové tašky")}
          >
            Igelitové tašky
          </button>
          <button
            className={`${
              buttonClicked === "Papírové tašky"
                ? "button--clicked"
                : "button--services"
            }`}
            onClick={() => handleServices("Papírové tašky")}
          >
            Papírové tašky
          </button>
        </div>
      </div>
      <div className="services__items">
        {servicesArray.map((item) => {
          return (
            <div
              className="service"
              key={item.id}
              data-category={item.category}
            >
              <div className="service__info">
                <img src={require("../images/" + item.img + ".png")} alt="" />
                <h3>{item.name}</h3>
                <p>{item.info}</p>
              </div>
              <button className="button--primary">Zjistit více</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SectionService;
function setState(): [any, any] {
  throw new Error("Function not implemented.");
}
