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
import { sendDataToGA } from "./utils/events.ts";
import {List} from "@alfalab/core-components/list";

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [transfer, setTransfer] = useState<string>("self");

  const submit = () => {
    setLoading(true);
    sendDataToGA({ option: "transfer" }).then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
      setLoading(false);
    });
  };

  const submitSfr = () => {
    setLoading(true);
    sendDataToGA({ option: "cfr" }).then(() => {
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
            style={{ width: "85%", borderRadius: "16px" }}
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
              width={70}
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
              width={80}
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
              width={90}
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
            size="xxs"
          >
            Переводы с карты
          </ButtonMobile>
          <ButtonMobile
            block
            onClick={() => setTransfer("sfr")}
            view={transfer !== "sfr" ? "secondary" : "primary"}
            size="xxs"
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
            <List tag="ul" marker="•">
              <List.Item>Настройте автоперевод пенсии с карты любого банка</List.Item>
              <List.Item>Деньги будут поступать на ваш счёт в Альфа-Банке по расписанию</List.Item>
              <List.Item>Это можно сделать без посещения офиса банка или СФР — бесплатно и безопасно</List.Item>
            </List>
          </>
        ) : (
          <>
            <Typography.Text tag="p" view="primary-medium" weight="bold">
              Как это работает
            </Typography.Text>
            <List tag="ul" marker="•">
              <List.Item>Заполните заявление о переводе пенсии в Альфа-Банк</List.Item>
              <List.Item>Мы отправим его в СФР через Госуслуги</List.Item>
              <List.Item>Это можно сделать без посещения офиса банка или СФР — бесплатно и безопасно</List.Item>
            </List>
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
          <ButtonMobile
            loading={loading}
            block
            view="primary"
            onClick={submitSfr}
            href="https://alfabank.ru/"
          >
            Начать оформление
          </ButtonMobile>
        )}
      </div>
    </>
  );
};
