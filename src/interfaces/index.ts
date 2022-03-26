export interface Note {
  id: number;
  title: string;
  description: string;
  favorite: boolean;
  selected: boolean;
}

export interface State {
  notes: Note[];
}

export interface Theme {
  barStyle: string;

  light: string;
  regular: string;
  medium: string;
  semiBold: string;
  bold: string;

  primaryBackgroundColor: string;
  secondaryBackgroundColor: string;
  terciaryBackgroundColor: string;

  primaryTextColor: string;
  secondaryTextColor: string;
  terciaryTextColor: string;

  primaryButtonColor: string;
  secondaryButtonColor: string;
  terciaryButtonColor: string;
  quaternaryButtonColor: string;
}

export interface Navigation {
  navigation: {
    navigate: (route: string) => void;
  };
  route: {
    params: {
      note?: Note;
      idNote?: number;
    };
  };
}

export type NavigationProps = {
  navigate: (route: string, params?: {}) => void;
};
