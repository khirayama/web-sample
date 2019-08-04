import * as React from 'react';
import ReactHelmet from 'react-helmet';
import { IntlProvider, injectIntl } from 'react-intl';

import { chooseLocale } from '../../presentations/locales';

export interface FormattedMessage {
  descriptor: string;
  values?: any;
}

export type Props = {
  locale: string;
  title: FormattedMessage;
  description: FormattedMessage;
  children: React.ReactNode;
  onUpdate: (props: Props) => void;
};

const Head = injectIntl(function(props: { title: FormattedMessage; description: FormattedMessage; intl: any }) {
  const title: string = props.intl.formatMessage({ id: props.title.descriptor }, props.title.values || {});
  const description: string = props.intl.formatMessage(
    { id: props.description.descriptor },
    props.description.values || {},
  );

  return (
    <ReactHelmet>
      <title>{title}</title>;
      <meta name="description" content={description} />
    </ReactHelmet>
  );
});

// FYI: URLに紐づいた処理はcontainer/Pageで行うが、URLに紐づいた表示（タイトルなど）はcomponents/Pageで行う
export const Page = (props: Props) => {
  React.useEffect(() => {
    props.onUpdate(props);
  });

  const locale = props.locale;
  const messages = chooseLocale(locale);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <>
        <Head title={props.title} description={props.description} />
        {props.children}
      </>
    </IntlProvider>
  );
};
