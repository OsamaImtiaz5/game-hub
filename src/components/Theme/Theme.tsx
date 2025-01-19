import { ColorModeProvider } from "@/components/ui/color-mode";
import { Theme } from "@chakra-ui/react";
import { ReactNode } from "react";

// Typing 'children' with ReactNode, which is a type for any renderable React content
interface ForcedColorModeProps {
  children: ReactNode;
}

export const ForcedColorMode = ({ children }: ForcedColorModeProps) => {
  return (
    <ColorModeProvider forcedTheme="dark">
      <Theme appearance="dark">{children}</Theme>
    </ColorModeProvider>
  );
};
