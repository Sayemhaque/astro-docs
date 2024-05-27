export type colorsType = {
  name: string;
  shades: { value: string; shade: number }[];
}[];

const grayColors = [
  {
    name: 'Gray',
    shades: [
      { value: '#f9fafb', shade: 50 },
      { value: '#F3F4F6', shade: 100 },
      { value: '#E5E7EB', shade: 200 },
      { value: '#D1D5DB', shade: 300 },
      { value: '#9CA3AF', shade: 400 },
      { value: '#6B7280', shade: 500 },
      { value: '#4B5563', shade: 600 },
      { value: '#374151', shade: 700 },
      { value: '#1F2937', shade: 800 },
      { value: '#111827', shade: 900 },
    ],
  },
];

const blueColors = [
  {
    name: 'Blue',
    shades: [
      { value: '#EFF6FF', shade: 50 },
      { value: '#DBEAFE', shade: 100 },
      { value: '#BFDBFE', shade: 200 },
      { value: '#93C5FD', shade: 300 },
      { value: '#60A5FA', shade: 400 },
      { value: '#3B82F6', shade: 500 },
      { value: '#2563EB', shade: 600 },
      { value: '#1D4ED8', shade: 700 },
      { value: '#1E40AF', shade: 800 },
      { value: '#1E3A8A', shade: 900 },
    ],
  },
];

const greenColors = [
  {
    name: 'Green',
    shades: [
      { value: '#F0FDFC', shade: 50 },
      { value: '#E1F9F7', shade: 100 },
      { value: '#C3F3EB', shade: 200 },
      { value: '#A0ECE5', shade: 300 },
      { value: '#7DDCD3', shade: 400 },
      { value: '#5BC9C0', shade: 500 },
      { value: '#4DB7B2', shade: 600 },
      { value: '#3DA69E', shade: 700 },
      { value: '#2D8C82', shade: 800 },
      { value: '#1E7A6E', shade: 900 },
    ],
  },
];

const redColors = [
  {
    name: 'Red',
    shades: [
      { value: '#FDF2F2', shade: 50 },
      { value: '#FDE8E8', shade: 100 },
      { value: '#FCD9D9', shade: 200 },
      { value: '#FBCBCB', shade: 300 },
      { value: '#F8B5B5', shade: 400 },
      { value: '#F49F9F', shade: 500 },
      { value: '#E57373', shade: 600 },
      { value: '#D73A3A', shade: 700 },
      { value: '#C62E2E', shade: 800 },
      { value: '#AD1C1C', shade: 900 },
    ],
  },
];

export { grayColors, blueColors, greenColors, redColors };
