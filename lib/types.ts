export type StrapiLocalizations = 'en' | 'es';
export type StrapiCollectionResponse<D> = {
  data: Array<{
    id: number;
    attributes: D & {
      locale?: StrapiLocalizations;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      localizations?: Pick<StrapiCollectionResponse<D>, 'data'>;
    };
  }>;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type StrapiResponse<D> = {
  data: {
    id: number;
    attributes: D & {
      locale?: StrapiLocalizations;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      localizations?: Pick<StrapiCollectionResponse<D>, 'data'>;
    };
  };
  meta: {};
};

export type StrapiImages = {
  data: null | any[];
};
