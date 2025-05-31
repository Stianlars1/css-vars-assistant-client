import * as React from "react";
import { Switch } from "radix-ui";
import styles from "./showAnimationCheckbox.module.scss";
import { useTouchDevice } from "@/hooks/useTouchDevice";

export const ShowAnimationCheckbox = ({
  onChange,
}: {
  onChange: (checked: boolean) => void;
}) => {
  const isTouchDevice = useTouchDevice();

  return (
    <form>
      <div
        style={{ display: "flex", alignItems: "center" }}
        className={styles.wrapper}
      >
        <label className={styles.Label} htmlFor="animation">
          {isTouchDevice ? "Tap" : "Hover"} Animation
        </label>
        <Switch.Root
          className={styles.Root}
          id="animation"
          onCheckedChange={onChange}
          defaultChecked={true}
        >
          <Switch.Thumb className={styles.Thumb} />
        </Switch.Root>
      </div>
    </form>
  );
};
