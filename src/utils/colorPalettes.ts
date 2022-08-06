export interface colorpalettesType {
  id: number;
  namePalette: string;
  colors: string[];
}

const defaultPalette: string[] = [
  "#5CD859",
  "#24A6D9",
  "#595BD9",
  "#8022D9",
  "#D159D8",
  "#D85963",
  "#D88559",
];

const happyHue: string[] = [
  "#004643",
  "#f9bc60",
  "#001e1d",
  "#e16162",
  "#8c7851",
  "#001858",
  "#7f5af0",
];

const halloween: string[] = [
  "#31263e",
  "#44355b",
  "#221e22",
  "#eca72c",
  "#ee5622",
  "#941b0c",
  "#621708",
];

const christmas: string[] = [
  "#ef233c",
  "#73ba9b",
  "#003e1f",
  "#fe6776",
  "#e09200",
  "#300fc2",
  "#d90429",
];

const water: string[] = [
  "#03045e",
  "#023e8a",
  "#0077b6",
  "#05668d",
  "#028090",
  "#00a896",
  "#02c39a",
];

const rainbow: string[] = [
  "#ffadad",
  "#ffd6a5",
  "#fdffb6",
  "#caffbf",
  "#9bf6ff",
  "#a0c4ff",
  "#bdb2ff",
];
const vintage: string[] = [
  "#cb997e",
  "#ddbea9",
  "#ffe8d6",
  "#b7b7a4",
  "#a5a58d",
  "#6b705c",
  "#9a998c",
];

const grayscale: string[] = [
  "#dee2e6",
  "#ced4da",
  "#adb5bd",
  "#6c757d",
  "#495057",
  "#343a40",
  "#212529",
];

export const dataPalettes: colorpalettesType[] = [
  { id: 1, namePalette: "Default Palette", colors: defaultPalette },
  { id: 2, namePalette: "Happy Hue", colors: happyHue },
  { id: 3, namePalette: "Halloween", colors: halloween },
  { id: 4, namePalette: "Christmas", colors: christmas },
  { id: 5, namePalette: "Water", colors: water },
  { id: 6, namePalette: "Rainbow", colors: rainbow },
  { id: 7, namePalette: "Vintage", colors: vintage },
  { id: 8, namePalette: "Grayscale", colors: grayscale },
];
