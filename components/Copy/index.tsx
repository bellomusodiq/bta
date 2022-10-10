import React from "react";
import { TouchableOpacity } from "react-native";
import * as Clipboard from "expo-clipboard";
import Toast from "react-native-toast-message";

const Copy: React.FC<{
  children: JSX.Element;
  text: string;
}> = ({ children, text, ...props }) => {
  const copyToClipBoard = async () => {
    await Clipboard.setStringAsync(text);

    Toast.show({
      type: "success",
      text1: "Coppied to clipboard",
    });
  };
  return (
    <TouchableOpacity {...props} onPress={copyToClipBoard}>
      {children}
    </TouchableOpacity>
  );
};

export default Copy;
