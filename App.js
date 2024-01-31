import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView>
                <View style={{ paddingHorizontal: 20 }}>
                    <View style={{ justifyContent: "space-between", paddingTop: 25 }}>
                        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                            <View>
                                <Text style={{ fontSize: 14 }}>Welcome back,</Text>
                                <Text style={{ fontSize: 25, color: "black", fontWeight: "bold" }}>Samantha William{"\n"}</Text>
                            </View>
                            <View style={{ width: 48, height: 48, backgroundColor: "#F68827", borderRadius: 12 }}></View>
                        </View>

                        <View style={{ gap: 10 }}>
                            <View style={{ width: "100%", height: 210, backgroundColor: "#1AA0B9", borderRadius: 12, alignSelf: "center", justifyContent: "center" }}>
                                <Text style={{ alignSelf: "center" }}>Img here</Text>
                            </View>
                            <View style={{ justifyContent: "center", flexDirection: "row", gap: 2 }}>
                                <View style={{ backgroundColor: "#F68827", width: 9, height: 9, alignSelf: "center", borderRadius: 5 }}></View>
                                <View style={{ backgroundColor: "#F68827", width: 9, height: 9, alignSelf: "center", borderRadius: 5 }}></View>
                                <View style={{ backgroundColor: "#F68827", width: 9, height: 9, alignSelf: "center", borderRadius: 5 }}></View>
                                <View style={{ backgroundColor: "#F68827", width: 9, height: 9, alignSelf: "center", borderRadius: 5 }}></View>
                                <View style={{ backgroundColor: "#F68827", width: 9, height: 9, alignSelf: "center", borderRadius: 5 }}></View>
                            </View>
                            <View style={{ width: "100%", height: 86, flexDirection: "row", justifyContent: "space-between" }}>
                                <View>
                                    <View style={{ backgroundColor: "#EAEAE8", width: 60, height: 60, borderRadius: 20 }}></View>
                                    <View>
                                        <Text>Products</Text>
                                    </View>
                                </View>
                                <View>
                                    <View style={{ backgroundColor: "#EAEAE8", width: 60, height: 60, borderRadius: 20 }}></View>
                                    <Text>Products</Text>
                                </View>
                                <View>
                                    <View style={{ backgroundColor: "#EAEAE8", width: 60, height: 60, borderRadius: 20 }}></View>
                                    <Text>Products</Text>
                                </View>
                                <View>
                                    <View style={{ backgroundColor: "#EAEAE8", width: 60, height: 60, borderRadius: 20 }}></View>
                                    <Text>Products</Text>
                                </View>
                            </View>
                            <View style={{ width: "100%", height: 86, flexDirection: "row", justifyContent: "space-between" }}>
                                <View>
                                    <View style={{ backgroundColor: "#EAEAE8", width: 60, height: 60, borderRadius: 20 }}></View>
                                    <Text>Products</Text>
                                </View>
                                <View>
                                    <View style={{ backgroundColor: "#EAEAE8", width: 60, height: 60, borderRadius: 20 }}></View>
                                    <Text>Products</Text>
                                </View>
                                <View>
                                    <View style={{ backgroundColor: "#EAEAE8", width: 60, height: 60, borderRadius: 20 }}></View>
                                    <Text>Products</Text>
                                </View>
                                <View>
                                    <View style={{ backgroundColor: "#EAEAE8", width: 60, height: 60, borderRadius: 20 }}></View>
                                    <Text>Products</Text>
                                </View>
                            </View>
                            <View>
                                <View style={{ backgroundColor: "white", width: "100%", height: 24 }}>
                                    <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Best Seller</Text>
                                        <Text style={{ fontSize: 16, color: "#F68827" }}>See All</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ backgroundColor: "white", width: "100%", height: 166, flexDirection: "row", justifyContent: "space-between" }}>
                                <View>
                                    <View style={{ backgroundColor: "#1AA0B9", width: 108, height: 108, borderRadius: 8 }}></View>
                                    <View style={{ marginLeft: 15, marginRight: 15 }}>
                                        <Text>Bed</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", marginRight: 15, marginLeft: 15 }}>
                                        <MaterialIcons name="star-rate" size={9} color="gold" />
                                        <MaterialIcons name="star-rate" size={9} color="gold" />
                                        <MaterialIcons name="star-rate" size={9} color="gold" />
                                        <MaterialIcons name="star-rate" size={9} color="gold" />
                                        <MaterialIcons name="star-rate" size={9} color="gold" />
                                        <Text style={{ fontSize: 10, fontWeight: "bold" }}>5.0</Text>
                                    </View>
                                </View>
                                <View>
                                    <View style={{ backgroundColor: "#1AA0B9", width: 108, height: 108, borderRadius: 8 }}></View>
                                    <View style={{ marginLeft: 15, marginRight: 15 }}>
                                        <Text>Table</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", marginRight: 15, marginLeft: 15 }}>
                                        <MaterialIcons name="star-rate" size={9} color="gold" />
                                        <MaterialIcons name="star-rate" size={9} color="gold" />
                                        <MaterialIcons name="star-rate" size={9} color="gold" />
                                        <MaterialIcons name="star-rate" size={9} color="gold" />
                                        <MaterialIcons name="star-rate" size={9} color="gold" />
                                        <Text style={{ fontSize: 10, fontWeight: "bold" }}>5.0</Text>
                                    </View>
                                </View>
                                <View>
                                    <View style={{ backgroundColor: "#1AA0B9", width: 108, height: 108, borderRadius: 8 }}></View>
                                    <View style={{ marginLeft: 15, marginRight: 15 }}>
                                        <Text>Chair</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", marginRight: 15, marginLeft: 15 }}>
                                        <MaterialIcons name="star-rate" size={9} color="gold" />
                                        <MaterialIcons name="star-rate" size={9} color="gold" />
                                        <MaterialIcons name="star-rate" size={9} color="gold" />
                                        <MaterialIcons name="star-rate" size={9} color="gold" />
                                        <MaterialIcons name="star-rate" size={9} color="gold" />
                                        <Text style={{ fontSize: 10, fontWeight: "bold" }}>5.0</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}
