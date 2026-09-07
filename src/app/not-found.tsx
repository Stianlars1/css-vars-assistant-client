import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import styles from "@/components/site/ContentPage.module.scss";
export default function NotFound() {
  return (
    <div className={`site-container ${styles.page}`}>
      <div className={styles.pageHeading}>
        <span className="eyebrow">404 - Page not found</span>
        <h1>
          This one
          <br />
          <span>didn’t resolve.</span>
        </h1>
        <p>The page may have moved, or the address may be incorrect.</p>
        <Link href="/" className="text-link">
          <ArrowLeft size={15} />
          Back to CSS Variables Assistant
        </Link>
      </div>
    </div>
  );
}
