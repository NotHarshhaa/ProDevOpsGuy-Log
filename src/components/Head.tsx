import { FC } from 'react';
import Head from 'next/head';

const CustomHead: FC = () => (
  <Head>
    {/* Google Tag Manager Script */}
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-BV359S4RC4"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-BV359S4RC4');
        `,
      }}
    />
  </Head>
);

export default CustomHead;
