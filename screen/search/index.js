// file tìm kiếm sản phẩm
import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from "react-native";
import DrinkItemHorizontal from "../../components/DrinkItemHorizontal";
import MainInput from "../../components/MainInput";
import samsungData from "../../data/samsung.json";
import iphoneData from "../../data/iphone.json";
import xiaomiData from "../../data/xiaomi.json";
import oppoData from "../../data/oppo.json";
export default function SearchScreen({ navigation }) {
  const [textSearch, settextSearch] = useState("");
  const categories = [
    "Samsung",
    "Iphone",
    "Oppo",
    "Xiaomi",
    
  ];
  const renderResult = () => {
    const data = samsungData.filter((value) =>
      value.name.toLocaleLowerCase().includes(textSearch.toLocaleLowerCase())
    );
    const data1 = iphoneData.filter((value) =>
    value.name.toLocaleLowerCase().includes(textSearch.toLocaleLowerCase())
  );
  const data2 = xiaomiData.filter((value) =>
  value.name.toLocaleLowerCase().includes(textSearch.toLocaleLowerCase())
);
const data3 = oppoData.filter((value) =>
value.name.toLocaleLowerCase().includes(textSearch.toLocaleLowerCase())
);
    const renderItem = ({ item, index }) => (
      <DrinkItemHorizontal item={item} navigation={navigation} />
    );
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text style={{ fontSize: 12, fontWeight: "bold", marginBottom: 10 }}>
          KẾT QUẢ
        </Text>
        <FlatList
          data={data2}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
         <FlatList
          data={data1}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
         <FlatList
          data={data}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
         <FlatList
          data={data3}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
      </View>
    );
  };
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        paddingTop: StatusBar.currentHeight + 20,
        paddingHorizontal: 12,
      }}
    >
      <MainInput
        value={textSearch}
        onChangeText={settextSearch}
        placeholder={"Nhập sản phẩm tìm kiếm..."}
        title={"TÌM KIẾM SẢN PHẨM"}
        style={{}}
      />
      {textSearch.trim().length > 0 ? (
        renderResult()
      ) : (
        <>
          <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 10 }}>
            HOT SREACH
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {categories.map((value, item) => (
              <TouchableOpacity
                onPress={() => {
                  settextSearch(value);
                }}
                style={{
                  backgroundColor: "#f4f4f4",
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                  marginRight: 12,
                  marginBottom: 12,
                  borderRadius: 100,
                }}
                key={item}
              >
                <Text>{value}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}
    </View>
  );
}
