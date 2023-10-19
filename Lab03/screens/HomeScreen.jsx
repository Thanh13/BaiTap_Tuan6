import { Image, View, Text, Pressable, StyleSheet } from "react-native";
import Rater from "../components/Rater";
import { useState } from "react";

export default function HomeScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={route.params?.image ?? require("../assets/images/vs_blue.png")}
        resizeMode="contain"
      />
      <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>

      <Rater />
      <View style={{ flexDirection: "row", gap: "5%" }}>
        <Text style={styles.discountedPrice}>1.790.000 đ</Text>
        <Text style={styles.originalPrice}>1.790.000 đ</Text>
      </View>

      <View style={{ flexDirection: "row", gap: "5%" }}>
        <Text style={{ color: "red", fontSize: 12, fontWeight: "bold" }}>
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
        <Image
          style={{ width: "5%", aspectRatio: 1 }}
          resizeMode="contain"
          source={require("../assets/question_outlined.png")}
        />
      </View>

      <Pressable
        style={{
          flexDirection: "row",
          borderWidth: 1,
          padding: "2.5%",
          borderRadius: "20px",
        }}
        onPress={() => {
          navigation.navigate("ColorSelection", { ...route.params });
        }}
      >
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            right: "-10%",
          }}
        >
          4 MÀU-CHỌN MÀU
        </Text>
        <Image
          style={{ flex: 0.25 }}
          resizeMode="contain"
          source={require("../assets/arrow.png")}
        />
      </Pressable>

      <Pressable>
        <Text style={styles.button}>CHỌN MUA</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
    justifyContent: "space-between",
  },
  image: { aspectRatio: 1 },
  discountedPrice: {
    fontSize: 18,
    fontWeight: "bold",
  },
  originalPrice: {
    fontSize: 15,
    fontWeight: "bold",
    textDecorationLine: "line-through",
    alignSelf: "center",
    color: "rgba(0, 0, 0, 0.58)",
  },
  button: {
    backgroundColor: "red",
    padding: "2.5%",
    borderRadius: 5,
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
