import { useEffect, useState } from "react";
import { Image, View, Text, Pressable, StyleSheet } from "react-native";

export default function ColorSelectionScreen({ navigation, route }) {
  const [data, setData] = useState({
    color: "blue",
    image: require("../assets/images/vs_blue.png"),
    vcolor: "xanh",
  });

  function updateColor(color) {
    return () =>
      setData({
        color: color,
        image: require("../assets/images/vs_" + color + ".png"),
        vcolor:
          color === "blue"
            ? "xanh"
            : color === "red"
            ? "đỏ"
            : color === "black"
            ? "đen"
            : "bạc",
      });
  }

  useEffect(() => {
    updateColor(route.params?.color ?? "blue")();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Image style={styles.image} source={data.image} resizeMode="contain" />
        <View style={styles.detailContainer}>
          <Text style={styles.title}>
            Điện Thoại Vsmart Joy 3 Hàng chính hãng
          </Text>
          <Text>
            Màu: <Text style={{ fontWeight: "bold" }}>{data.vcolor}</Text>
          </Text>
          <Text>
            Cung cấp bởi{" "}
            <Text style={{ fontWeight: "bold" }}>Tiki Tradding</Text>
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>1.790.000 đ</Text>
        </View>
      </View>

      <View style={styles.colorContainer}>
        <Text style={{ fontSize: 18 }}>Chọn một màu bên dưới:</Text>

        <Pressable
          style={[styles.color, { backgroundColor: "#C5F1FB" }]}
          onPress={updateColor("silver")}
        />
        <Pressable
          style={[styles.color, { backgroundColor: "#F30D0D" }]}
          onPress={updateColor("red")}
        />
        <Pressable
          style={[styles.color, { backgroundColor: "#000000" }]}
          onPress={updateColor("black")}
        />
        <Pressable
          style={[styles.color, { backgroundColor: "#234896" }]}
          onPress={updateColor("blue")}
        />

        <Pressable
          onPress={() => {
            navigation.navigate("Home", { ...data });
          }}
        >
          <Text style={styles.button}>XONG</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: "5%", gap: "2.5%" },
  productContainer: { flex: 0.25, flexDirection: "row", gap: "2.5%" },
  image: { aspectRatio: 1, flexBasis: 0, flexGrow: 0.5 },
  detailContainer: {
    justifyContent: "space-between",
    flexBasis: 0,
    flexGrow: 0.8,
  },
  title: {},
  colorContainer: {
    flex: 1,
    padding: "2.5%",
    backgroundColor: "#C4C4C4",
    justifyContent: "space-between",
  },
  color: {
    padding: "5%",
    aspectRatio: 1,
    width: "25%",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "rgba(25, 82, 226, 0.58)",
    borderRadius: 10,
    padding: "2.5%",
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
