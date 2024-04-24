
import { Context } from "components/Provider";
import { useContext } from "react";

export function useFullScreen() {
  const context = useContext(Context);
  if (!context) {
    throw new Error('Error');
  }
  return context;
}