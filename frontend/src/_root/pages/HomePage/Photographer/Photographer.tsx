// @ts-nocheck

import CustomButton from "../../../../common/CustomButton/CustomButton";
import styles from "./Photographer.module.css";

const Photographer = ({ src, buttonChildren, name, location, className }) => {
  return (
    <div
      className={`${styles.imageContainer} ${className} h-full`}
      style={{
        backgroundImage: `url('${src}`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute top-0 flex  flex-col justify-between p-4 text-white h-full w-full rounded-xl"
        style={{
          background: "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0))",
        }}
      >
        <div>
          <CustomButton className={styles.photographerButton}>
            {buttonChildren}
          </CustomButton>
        </div>
        <div className="ml-2">
          <div className={styles.photographerName}>{name}</div>
          <div className={styles.photographerLocation}>{location}</div>
        </div>
      </div>
    </div>
  );
};

export default Photographer;
