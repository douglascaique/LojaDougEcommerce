// themes.ts

export interface Theme {
  primary: string;
  secondary: string;
  textColor: string;
}

export const lightTheme: Theme = {
  primary: 'orange-300',
  secondary: 'rose-50',
  textColor: 'slate-500',
};

export const darkTheme: Theme = {
  primary: 'blue-600',
  secondary: 'gray-800',
  textColor: 'white',
};
