export type QuestionType = {
  id: string;
  question: string;
  date: string;
  answer?: string;
};

export type RequireOnly<T, P extends keyof T> = Pick<T, P> & Partial<Omit<T, P>>;

export type QuestionStateType = {
  entities: QuestionType[];
};
