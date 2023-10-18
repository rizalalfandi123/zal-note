import { useQuery, useQueryClient } from "@tanstack/react-query";

export interface UIState {
  isShowNavbar: boolean;
  isMiniNavbar: boolean;
  isShowDrawerNavbar: boolean;
}

const initialState: UIState = {
  isShowNavbar: true,
  isMiniNavbar: false,
  isShowDrawerNavbar: false
};

const queryKey = ["UI_STORE"];

const getInitialData: () => UIState = () => {
  return initialState;
};

export function useUI() {
  const queryClient = useQueryClient();

  const { data = initialState } = useQuery<UIState>({
    queryKey,
    enabled: false,
    initialData: getInitialData(),
  });

  const updaterData = (nextState: UIState) =>
    queryClient.setQueryData<UIState>(queryKey, (input) => {
      return { ...input, ...nextState };
    });

  return [data, updaterData] as const;
}
