// export interface ITagDomain {
//   frontend,
//   backend,

// }

export interface ITagDomain {
  key: string;
  title?: string;
  description?: string;
  color?: string;
  children?: ITagDomain[];
}

export interface Ii18nText {
  ru?: string;
  en?: string;
}

export const tagDomains: ITagDomain[] = [
  { key: "fe", children: [{ key: "framework" }, { key: "template engine" }] },
  { key: "be", children: [{ key: "framework" }, { key: "db" }] },
  { key: "inf" },
];

// BE:
// FE:
