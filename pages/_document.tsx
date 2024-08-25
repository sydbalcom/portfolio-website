import { Html, Head, Main, NextScript } from 'next/document'
import type { DocumentHeadTagsProps } from '@mui/material-nextjs/v13-pagesRouter';
import {
  DocumentHeadTags,
  documentGetInitialProps,
} from '@mui/material-nextjs/v13-pagesRouter';

export default function Document(props: DocumentHeadTagsProps) {
  return (
    <Html lang="en">
      <Head>
        <DocumentHeadTags {...props} />
      </Head>
      <body className="bg-[#F9F9F9] max-w-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

Document.getInitialProps = async (ctx) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
