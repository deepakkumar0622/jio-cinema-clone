import styles from "./channel.module.css";
import channel1 from "../../assets/channel1.jpg";
import channel2 from "../../assets/channel2.png";
import channel3 from "../../assets/channel3.jpg";
import channel4 from "../../assets/channel4.jpg";
import channel5 from "../../assets/channel5.jpg";
import channel6 from "../../assets/channel6.jpg";
import channel7 from "../../assets/channel7.jpg";

export const Channel = () => {
  const channels = [
    channel1,
    channel2,
    channel3,
    channel4,
    channel5,
    channel6,
    channel7,
  ];
  return (
    <div className={styles.channels}>
      {channels.map((v, i) => {
        return <img className={styles.channel} key={i} src={v} alt="" />;
      })}
    </div>
  );
};
