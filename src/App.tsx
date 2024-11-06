import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";

import benefit1 from "./assets/benefit1.png";
import benefit2 from "./assets/benefit2.png";
import benefit3 from "./assets/benefit3.png";
import benefit4 from "./assets/benefit4.png";
import pention from "./assets/pention.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [transfer, setTransfer] = useState<string>("self");

  const submit = () => {
    setLoading(true);
    Promise.resolve().then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
      setLoading(false);
    });
  };

  const submitSfr = () => {
    setLoading(true);
    Promise.resolve().then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setLoading(false);
    });
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <Gap size={24} />
          <Typography.TitleResponsive
            font="system"
            tag="h1"
            view="medium"
            weight="semibold"
          >
            Переведите пенсию на счёт в Альфа-Банк
          </Typography.TitleResponsive>
          <Gap size={12} />
          <Typography.Text tag="p" view="primary-medium" color="secondary">
            Выберите способ — идти никуда не придётся
          </Typography.Text>
          <img
            src={pention}
            alt="Карта для ребенка"
            style={{ width: "100%" }}
          />
        </div>

        <Gap size={32} />

        <Typography.TitleResponsive
          font="system"
          tag="h3"
          view="small"
          weight="semibold"
          className={appSt.productsTitle}
        >
          Привилегии
        </Typography.TitleResponsive>

        <div className={appSt.benefits}>
          <div className={appSt.benefit}>
            <img
              src={benefit1}
              alt=""
              width={80}
              height={70}
              style={{ objectFit: "cover" }}
            />
            <Typography.Text tag="p" view="primary-small" weight="bold">
              5% кэшбэка в аптеках каждый месяц
            </Typography.Text>
          </div>
          <div className={appSt.benefit}>
            <img
              src={benefit2}
              alt=""
              width={100}
              height={70}
              style={{ objectFit: "cover" }}
            />
            <Typography.Text tag="p" view="primary-small" weight="bold">
              Бесплатное снятие наличных
            </Typography.Text>
          </div>
          <div className={appSt.benefit}>
            <img
              src={benefit3}
              alt=""
              width={90}
              height={70}
              style={{ objectFit: "cover" }}
            />
            <Typography.Text tag="p" view="primary-small" weight="bold">
              Вклад до 21,5% годовых
            </Typography.Text>
          </div>
          <div className={appSt.benefit}>
            <img
              src={benefit4}
              alt=""
              width={100}
              height={70}
              style={{ objectFit: "cover" }}
            />
            <Typography.Text
              tag="p"
              view="primary-small"
              weight="bold"
              style={{ marginBottom: 0 }}
            >
              Бесплатные пуши и смс
            </Typography.Text>
          </div>
        </div>

        <Gap size={32} />

        <Typography.TitleResponsive
          font="system"
          tag="h3"
          view="small"
          weight="semibold"
        >
          Выберите способ
        </Typography.TitleResponsive>

        <Gap size={12} />

        <div style={{ display: "flex", gap: "1rem" }}>
          <ButtonMobile
            block
            view={transfer !== "self" ? "secondary" : "primary"}
            onClick={() => setTransfer("self")}
            size="xs"
          >
            Переводы себе
          </ButtonMobile>
          <ButtonMobile
            block
            onClick={() => setTransfer("sfr")}
            view={transfer !== "sfr" ? "secondary" : "primary"}
            size="xs"
          >
            Через СФР
          </ButtonMobile>
        </div>

        <Gap size={32} />

        {transfer === "self" ? (
          <>
            <Typography.Text tag="p" view="primary-medium" weight="bold">
              Как это работает
            </Typography.Text>
            <Typography.Text tag="p" view="primary-small">
              Настройте автоперевод один раз — деньги будут приходить из другого
              банка на ваш счёт по расписанию.
            </Typography.Text>
            <Typography.Text tag="p" view="primary-small">
              Бесплатно и безопасно.
            </Typography.Text>
          </>
        ) : (
          <>
            <Typography.Text tag="p" view="primary-medium" weight="bold">
              Как это работает
            </Typography.Text>
            <Typography.Text tag="p" view="primary-small">
              Заполните заявление о переводе пенсии в Альфа-Банк, мы отправим
              его в СФР через Госуслуги.
            </Typography.Text>
            <Typography.Text tag="p" view="primary-small">
              Без походов в банк или СФР. Бесплатно и безопасно.
            </Typography.Text>
          </>
        )}
      </div>

      <Gap size={96} />

      <div className={appSt.bottomBtnThx}>
        {transfer === "self" ? (
          <ButtonMobile loading={loading} block view="primary" onClick={submit}>
            Начать оформление
          </ButtonMobile>
        ) : (
          <ButtonMobile loading={loading} block view="primary" onClick={submitSfr} href="">
            Начать оформление
          </ButtonMobile>
        )}
      </div>
    </>
  );
};
