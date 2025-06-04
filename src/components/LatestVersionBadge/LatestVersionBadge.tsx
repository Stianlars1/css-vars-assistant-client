import { PluginData } from "@/types/plugin";
import { Badge } from "@/components/ui/Badge/Badge";
import styles from "./LatestVersionBadge.module.scss";

export const LatestVersionBadge = ({
  pluginData,
}: {
  pluginData: PluginData | undefined;
}) => {
  return (
    <>
      {pluginData && pluginData.latestVersion && (
        <Badge>
          Latest{" "}
          <span className={styles.badgeVersion}>
            v{pluginData.latestVersion.version}
          </span>
        </Badge>
      )}
    </>
  );
};
