import styles from "./NotFoundPage.module.css";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.text}>Page not found!</h2>
        <div>
          Go{" "}
          <span onClick={() => navigate(-1)} className={styles.backButton}>
            back
          </span>
        </div>
      </div>
    </div>
  );
}

export { NotFoundPage };
