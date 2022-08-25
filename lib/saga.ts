import axios from 'axios';
import { GetStaticPathsResult, GetStaticPropsResult } from 'next';
import {
  StrapiCollectionResponse,
  StrapiImages,
  StrapiResponse
} from './types';

type ProjectSaga = {
  Title: string;
  StartDate?: string;
  Description?: string;
  ActiveDevelopment: boolean;
  Slug: string;
  GitHubUrl?: string;
  Images: StrapiImages;
  locale;
};

export const getProjectSagas = async (): Promise<
  GetStaticPathsResult['paths']
> =>
  axios
    .get<StrapiCollectionResponse<Pick<ProjectSaga, 'Slug'>>>(
      process.env.CMS_ROUTE +
        '/project-sagas?fields[0]=Slug&fields[1]=locale&populate[localizations][fields][0]=Slug&populate[localizations][fields][1]=locale',
      {
        headers: { Authorization: `Bearer ${process.env.CMS_TOKEN}` }
      }
    )
    .then(({ data }) =>
      data.data.reduce((paths, d) => {
        return [
          ...paths,
          {
            params: { slug: d.attributes.Slug },
            locale: d.attributes.locale ?? 'en'
          },
          ...d.attributes.localizations.data.map((l) => ({
            params: { slug: l.attributes.Slug },
            locale: l.attributes.locale
          }))
        ];
      }, [])
    );

export const getProjectSaga = (
  slug: string
): Promise<ProjectSaga | undefined> =>
  axios
    .get<StrapiCollectionResponse<ProjectSaga>>(
      process.env.CMS_ROUTE +
        `/project-sagas?filters[Slug][$eq]=${slug}&populate=*`,
      {
        headers: { Authorization: `Bearer ${process.env.CMS_TOKEN}` }
      }
    )
    .then(({ data }) => {
      if (data.data.length === 0) {
        return undefined;
      }
      return data.data[0].attributes;
    });
