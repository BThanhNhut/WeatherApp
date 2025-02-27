export type ActionType<PayloadType, ResultType, T = Partial<any>> = {
  [key: string]: any;
} & {
  data: PayloadType;
  onSuccess?: (data: ResultType) => void;
  showLoading?: boolean;
} & T;
