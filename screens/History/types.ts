export interface HistorySelectorProps {
  data: string[];
  onChange: (index: number) => void;
  title: string;
  index: number | null;
}
