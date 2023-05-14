import { AppProvider } from "@shopify/discount-app-components";
import "@shopify/discount-app-components/build/esm/styles.css";
import translations from '@shopify/polaris/locales/en.json';



export function DiscountProvider ({children}) {
  return (
    <AppProvider locale="en-US" ianaTimezone="America/Toronto" i18n={translations}>
      {children}
    </AppProvider>
  );
}