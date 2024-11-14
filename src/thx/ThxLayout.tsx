import { Typography } from "@alfalab/core-components/typography";
import { ButtonMobile } from "@alfalab/core-components/button/mobile";
import rocket from "../assets/rocket.png";
import { thxSt } from "./style.css";
import { appSt } from "../style.css.ts";

export const ThxLayout = () => {
  const clickSuccess = () => {
    window.gtag("event", "3505_ok_click", {
      variant_name: "ghk_3505_1",
    });
  };

  return (
    <>
      <div className={thxSt.container}>
        <img
          alt="Картинка ракеты"
          src={rocket}
          width={135}
          className={thxSt.rocket}
        />
        <Typography.TitleResponsive
          font="system"
          tag="h1"
          view="large"
          defaultMargins
          weight="bold"
        >
          Спасибо, мы записали ваш ответ
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium">
          Вы поучаствовали в очень важном исследовании, которое поможет улучшить
          продукт. Вы – наш герой!
        </Typography.Text>
        <Typography.Text tag="p" view="primary-medium">
          Пока пенсию можно перевести только через СФР.
        </Typography.Text>
      </div>

      <div className={appSt.bottomBtnThx}>
        <ButtonMobile block view="primary" href="https://alfabank.ru/" onClick={clickSuccess}>
          Начать оформление через СФР
        </ButtonMobile>
      </div>
    </>
  );
};
