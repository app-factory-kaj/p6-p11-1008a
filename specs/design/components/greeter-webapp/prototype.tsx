import { useState, type ReactNode } from "react";
import {
  AppShell,
  Button,
  Detail,
  Field,
  Form,
  Heading,
  Screen,
  Text,
  ValidationSummary,
  defineApp,
  useDisplayState,
} from "@wso2/prototype-kit";

const user = { name: "Jordan Lee", email: "jordan.lee@example.com" };

function Shell({ children }: { children: ReactNode }) {
  return (
    <AppShell
      id="shell"
      user={user}
      nav={[{ id: "nav.greet", label: "Greet", to: "screen.greet" }]}
      account="screen.account"
      settings="screen.settings"
      signOut="screen.signed-out"
    >
      {children}
    </AppShell>
  );
}

function Greet() {
  const state = useDisplayState();
  const [greeting, setGreeting] = useState<string | undefined>(undefined);
  const [showError, setShowError] = useState(state === "state.validation-error");

  const handleSubmit = (values: Record<string, string>) => {
    const name = (values.name ?? "").trim();
    if (!name) {
      setShowError(true);
      setGreeting(undefined);
      return;
    }
    setShowError(false);
    setGreeting(`Hello, ${name}! 👋`);
  };

  return (
    <Shell>
      <Heading id="heading.greet" text="Greet someone" />
      <Form
        id="form.greet"
        onSubmit={handleSubmit}
        actions={<Button id="btn.greet" label="Greet" emphasis="primary" submit />}
      >
        <Field
          id="field.name"
          label="Name"
          placeholder="e.g. Ada"
          error={showError ? "Enter a name to get a greeting" : undefined}
        />
      </Form>
      {showError && (
        <ValidationSummary id="validation.greet" issues={["Enter a name to get a greeting"]} />
      )}
      {greeting && <Text id="text.greeting" text={greeting} tone="primary" />}
      {!greeting && !showError && (
        <Text id="text.hint" text="Enter a name above and press Greet to see your greeting." />
      )}
    </Shell>
  );
}

function Account() {
  return (
    <Shell>
      <Heading id="heading.account" text="Account" />
      <Detail
        id="detail.account"
        fields={[
          { label: "Name", value: user.name },
          { label: "Email", value: user.email },
        ]}
      />
    </Shell>
  );
}

function Settings() {
  return (
    <Shell>
      <Heading id="heading.settings" text="Settings" />
      <Text id="text.settings" text="There is nothing to configure for this app yet." />
    </Shell>
  );
}

function SignedOut() {
  return (
    <Screen>
      <Heading id="heading.signed-out" text="You are signed out" />
      <Button id="btn.sign-in" label="Sign in" emphasis="primary" to="screen.greet" />
    </Screen>
  );
}

export default defineApp({
  screens: {
    "screen.greet": Greet,
    "screen.account": Account,
    "screen.settings": Settings,
    "screen.signed-out": SignedOut,
  },
  data: {},
});
