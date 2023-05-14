import { BrowserRouter } from "react-router-dom";
import { NavigationMenu } from "@shopify/app-bridge-react";
import Routes from "./Routes";
import { DiscountProvider } from "./components";
import { AppProvider } from "@shopify/polaris";

import {
  AppBridgeProvider,
  QueryProvider,
  PolarisProvider,
} from "./components";

export default function App() {
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");

  return (
    <AppProvider
      i18n={{
        Polaris: {
          ResourceList: {
            sortingLabel: 'Sort by',
            defaultItemSingular: 'item',
            defaultItemPlural: 'items',
            showing: 'Showing {itemsCount} {resource}',
            Item: {
              viewItem: 'View details for {itemName}',
            },
          },
          Common: {
            checkbox: 'checkbox',
          },
        },
      }}
    >
      <PolarisProvider>
        <BrowserRouter>
          <AppBridgeProvider>
            <DiscountProvider>
              <QueryProvider>
                <NavigationMenu
                  navigationLinks={[
                    {
                      label: "Page name",
                      destination: "/pagename",
                    },
                    {
                      label: "Create Discount",
                      destination: "/create-discount",
                    },
                  ]}
                />
                <Routes pages={pages} />
              </QueryProvider>
            </DiscountProvider>
          </AppBridgeProvider>
        </BrowserRouter>
      </PolarisProvider>
    </AppProvider>
  );
}
