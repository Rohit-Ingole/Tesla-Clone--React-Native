import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const StyledButton = (props) => {
  const { type, content } = props;

  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const textColor = type === "primary" ? "#FFFFFF" : "#171A20";

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6}>
      <View style={[styles.button, { backgroundColor: backgroundColor }]}>
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default StyledButton;
