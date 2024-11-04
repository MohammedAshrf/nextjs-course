import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.css";
// import { auth } from "@/lib/auth";

// const session = await auth();
// console.log(session);

export default async function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
}
