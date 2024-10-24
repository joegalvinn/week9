import { SignIn } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";

export default function SignInPage() {
  return (
    <>
      <h1>my sign in page</h1>
      <SignIn
        appearance={{
          baseTheme: dark,
        }}
      />
    </>
  );
}
