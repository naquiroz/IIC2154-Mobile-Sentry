// This is the first file that ReactNative will run when it starts up.
import App from "./app/app.tsx"
import { registerRootComponent } from "expo"
import * as Sentry from 'sentry-expo';
import env from "./app/config/env";
Sentry.init({
  dsn: env.SENTRY_DSN,
  enableInExpoDevelopment: true,
  debug: true, // Sentry will try to print out useful debugging information if something goes wrong with sending an event. Set this to `false` in production.
});


registerRootComponent(App)
export default App
