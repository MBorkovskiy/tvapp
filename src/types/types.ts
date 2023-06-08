//cast
export interface CastProps {
  node: NodeNameProps;
}

interface NodeNameProps {
  name: NameProps;
}

interface NameProps {
  id: string;
  nameText: NameTextProps;
  primaryImage: PrimaryImagePropsCast;
}

interface NameTextProps {
  text: string;
}

interface PrimaryImagePropsCast {
  url: string;
}

//movie

export interface MovieProps {
  id: string;
  primaryImage: PrimaryImagePropsMovie;
  ratingsSummary: RatingsSummaryProps;
  titleText: TitleTextProps;
  plot: PlotProps;
}

interface PrimaryImagePropsMovie {
  url: string;
}

interface RatingsSummaryProps {
  aggregateRating: number;
}

interface TitleTextProps {
  text: string;
}

interface PlotProps {
  plotText: PlotTextProps;
}

interface PlotTextProps {
  plainText: string;
}

export interface ParamsIdProps {
  id: string;
}
