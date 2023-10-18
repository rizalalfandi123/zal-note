import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";

export interface UIState {
  isShowNavbar: boolean;
  isMiniNavbar: boolean;
  isShowDrawerNavbar: boolean;
  isDarkMode: boolean;
}

const initialState: UIState = {
  isShowNavbar: true,
  isMiniNavbar: false,
  isShowDrawerNavbar: false,
  isDarkMode: true,
};

const queryKey = ["UI_STORE"];

const persistenceKey = "zal-note-theme";

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

  const updaterData = (nextState: UIState) => {
    queryClient.setQueryData<UIState>(queryKey, (input) => {
      return { ...input, ...nextState };
    });

    localStorage.setItem(persistenceKey, JSON.stringify(nextState));
  };

  React.useEffect(() => {
    if (data.isDarkMode) {
      document.documentElement.setAttribute("data-screen-mode", "dark");
    } else {
      document.documentElement.setAttribute("data-screen-mode", "light");
    }
  }, [data.isDarkMode]);

  React.useEffect(() => {
    const storedData = localStorage.getItem(persistenceKey);

    if (storedData && JSON.parse(storedData) !== data) {
      updaterData(JSON.parse(storedData) as UIState);
    }

    if (!storedData) {
      localStorage.setItem(persistenceKey, JSON.stringify(data));
    }
  }, []);

  return [data, updaterData] as const;
}
