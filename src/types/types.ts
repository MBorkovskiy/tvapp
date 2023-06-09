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
  id?: string;
  primaryImage?: PrimaryImagePropsMovie;
  ratingsSummary?: RatingsSummaryProps;
  titleText?: TitleTextProps;
  plot?: PlotProps;
  originalTitleText?: TitleTextProps;
  releaseYear?: YearProps;
  runtime?: SecondsProps;
  genres?: GenresProps;
  releaseDate?: ReleaseDateProps;
}

interface ReleaseDateProps {
  day: number;
  month: number;
  year: number;
}

interface GenresProps {
  genres: GenreProps[];
}

interface GenreProps {
  id: string;
  text: string;
}

interface SecondsProps {
  seconds: number;
}

interface YearProps {
  year: string;
}

interface PrimaryImagePropsMovie {
  url: string;
}

interface RatingsSummaryProps {
  aggregateRating: number;
  voteCount: number;
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

// params.id

export interface ParamsIdProps {
  id: string;
}

// other

export interface OtherProps {
  reviews?: ReviewsProps[];
  trailer?: string;
}

// reviews
export interface ReviewsProps {
  author: string;
  content: string;
  provider_id: number;
  rating: number;
  updated_at: string;
}

// props
export interface Props {
  mostPop: string;
  pageNumber: number;
  start: string;
  end: string;
  sortYear: string;
  setGenre?: string;
}
