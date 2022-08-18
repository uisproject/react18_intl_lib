import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { IntlProvider } from "react-intl";
import English from "./languages/en-US.json";
import Indonesia from "./languages/id-ID.json";

const local = navigator.language;

let lang;
if (local === "en-US") {
  lang = Indonesia;
} else {
  lang = Indonesia;
}

// you can change the lang from the document lang tag
console.log(document.documentElement.lang);
document.documentElement.lang = "id";
console.log(document.documentElement.lang);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IntlProvider locale={local} messages={lang}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);
