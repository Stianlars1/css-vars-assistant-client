import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import styles from "@/components/site/ContentPage.module.scss";
export default function NotFound() {
  return (
    <div className={`site-container ${styles.page}`}>
      <div className={styles.pageHeading}>
        <h1 className="spectrum-text">This one didn’t resolve</h1>
        <p>404. The page may have moved, or the address may be incorrect.</p>
        <Link href="/" className="text-link">
          <ArrowLeft size={15} />
          Back to CSS Variables Assistant
        </Link>
      </div>
    </div>
  );
}
