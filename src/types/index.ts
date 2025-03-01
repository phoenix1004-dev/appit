type MENU_LINK = {
  title: string;
  link: string;
};

type ANALYZE_DATA = {
  title: string;
  desc: string;
  from: number;
  to: number;
};

type FEATURE_DATA = {
  img: any;
  icon: any;
  title: string;
  desc: string;
};

type PRICE_DATA = {
  title: string;
  sub: string;
  badge?: string;
  value: number;
  information: {
    desc: string;
    status: boolean;
  }[];
};

type PERSON_DATA = {
  avatar: any;
  name: string;
  job: string;
};

type REVIEW_DATA = {
  person: PERSON_DATA;
  comment: string;
};

type FAQ_DATA = {
  qu: string;
  an: string;
};

type COIN_DATA = {
  icon: any;
  title: string;
};

export type {
  COIN_DATA,
  MENU_LINK,
  ANALYZE_DATA,
  FEATURE_DATA,
  PRICE_DATA,
  PERSON_DATA,
  REVIEW_DATA,
  FAQ_DATA,
};
