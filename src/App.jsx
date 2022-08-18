import React from "react";
import { useIntl, FormattedMessage } from "react-intl";

const App = () => {
  const { messages } = useIntl();
  return (
    <>
      <div>{messages["app.content"]}</div>
      Another way to translate message:
      <div>
        <FormattedMessage id="app.content" defaultMessage="Learn More" />
      </div>
      <div>
        <FormattedMessage
          id="app.channel.plug"
          defaultMessage="Video brought to you by Louis"
          name={{ name: "Louis" }}
        />
      </div>
      <div>
        <FormattedMessage
          id="app.header"
          defaultMessage="Edit blabla"
          values={{
            fileName: "test",
            code: (word) => <strong>{word}</strong>,
          }}
        />
      </div>
    </>
  );
};

export default App;
