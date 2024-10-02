export interface SearchProps {
  searchToggle: boolean;
  setSearchToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface sharedProps {
  value: string | null;
  onChange: (value: string) => void;
  handleToggler: () => void;
  searchToggle: boolean;
}