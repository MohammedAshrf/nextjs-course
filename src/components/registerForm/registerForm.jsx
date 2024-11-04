"use client";

import { register } from "@/lib/action";
import styles from "./registerForm.module.css";
// import { useFormState } from "react-dom";
import { useActionState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  // const [state, formAction] = useFormState(register, undefined);
  const [state, formAction] = useActionState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input
        type="password"
        placeholder="password again"
        name="passwordRepeat"
      />
      <button>Register</button>
      {state?.error}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;

// "use client";

// import { register } from "@/lib/action";
// import styles from "./registerForm.module.css";
// import { useFormState } from "react-dom";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// const RegisterForm = () => {
//   //   const [state, formAction] = useFormState(register, undefined);

//   //   const router = useRouter();

//   //   useEffect(() => {
//   //     state?.success && router.push("/login");
//   //   }, [state?.success, router]);

//   //   const handleSubmit = async (e) => {
//   //     e.preventDefault();
//   //     const formData = new FormData(e.target); // Collect form data
//   //     console.log(formData);

//   //     const response = await register(null, formData); // Call register with formData
//   //     // Handle response if needed, e.g., display errors
//   //     return response;
//   //   };

//   return (
//     <form className={styles.form} action={register}>
//       {/* <input type="text" placeholder="name" name="name" /> */}
//       <input type="text" placeholder="username" name="username" />
//       <input type="email" placeholder="email" name="email" />
//       <input type="password" placeholder="password" name="password" />
//       <input
//         type="password"
//         placeholder="password again"
//         name="passwordRepeat"
//       />
//       <button type="submit">Register</button>
//       {/* {state?.error}
//       <Link href="/login">
//         Have an account? <b>Login</b>
//       </Link> */}
//     </form>
//   );
// };

// export default RegisterForm;
