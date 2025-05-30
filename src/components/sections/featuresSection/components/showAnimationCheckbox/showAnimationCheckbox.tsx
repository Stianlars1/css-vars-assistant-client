import * as React from "react";
import { Switch } from "radix-ui";
import styles from "./showAnimationCheckbox.module.scss";

export const ShowAnimationCheckbox = ({
  onChange,
}: {
  onChange: (checked: boolean) => void;
}) => (
  <form>
    <div
      style={{ display: "flex", alignItems: "center" }}
      className={styles.wrapper}
    >
      <label className={styles.Label} htmlFor="animation">
        Hover Animation
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
