import Head from 'next/head';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { getProjectSaga, getProjectSagas } from '../../lib/saga';
import styles from '../styles/Saga.module.css';
import { useRouter } from 'next/router';

const Saga = ({ sagaData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{`Michael Stolte: ${'hello'}`}</title>
        <meta name='description' content="Michael Stolte's porfolio website." />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {router.isFallback ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>Index</h1>
          <p>{sagaData?.Description ?? 'undefined'}</p>
        </div>
      )}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getProjectSagas();
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const sagaData = await getProjectSaga(
    Array.isArray(params.slug) ? params.slug[0] : params.slug
  );
  if (sagaData === undefined)
    return {
      notFound: true
    };
  return {
    props: {
      sagaData
    }
  };
};

export default Saga;
