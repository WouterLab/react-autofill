export type ComponentDataType = {
  id: string;
  type: "inputText" | "inputEmail" | "inputPassword";
  label: string;
  required?: boolean;
  defaultValue?: string;
};
