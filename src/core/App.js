import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "@components/Layout";
import { ThemeProvider } from "@mui/material/styles";
import { useObserver } from "@libs/hermes-io";
import router from "@routes";
import * as CONSTANTS from "@constants";
import TranslationsContext from "@contexts/Translations";
import ActionsContext from "@contexts/Actions";
import buildTheme from "@factory/Theme";
import buildTranslations from "@factory/Translations";
import buildActions from "@factory/Actions";
import * as actions from "@actions";

const defaultThemeMode = CONSTANTS.theme.modes.light;
const translations = buildTranslations(CONSTANTS.LANGS.en);
const themeActions = buildActions(actions.theme);

function App() {
  const [theme, setTheme] = useState(buildTheme(defaultThemeMode));
  const themeListener = ({ value, from }) => {
    console.log({ value, from });
    setTheme(buildTheme(value));
  };
  useObserver({
    observer: themeActions[actions.theme.change],
    listener: themeListener,
    from: [CONSTANTS.componentsMap.ThemeSelector],
  });
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <TranslationsContext.Provider value={translations}>
          <ActionsContext.Provider value={{ theme: themeActions }}>
            <Layout>
              <RouterProvider router={router} />
            </Layout>
          </ActionsContext.Provider>
        </TranslationsContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
