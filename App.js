import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {
    return (
        <View style={{ flex: 1, backgroundColor: "#EAEAE8" }}>
            <SafeAreaView>
                <View style={{ paddingHorizontal: 20 }}>
                    <View style={{ justifyContent: "space-between", paddingTop: 25 }}>


                        <View style={{ justifyContent: "space-between", flexDirection: "row", }}>
                            <View>
                                <Text style={{ fontSize: 25 }}>Welcome back</Text>
                                <Text style={{ fontSize: 25, color: "black", fontWeight: "bold" }}>Simicsák János{"\n"}</Text>
                            </View>
                            <View style={{ width: 48, height: 48, backgroundColor: "#F68827", borderRadius: 12, }}></View>
                        </View>


                        
                        <View style={{ width: 340, height: 210, backgroundColor: "#1AA0B9", borderRadius: 12, alignSelf: "center", justifyContent: "center" }}>
                            <Text style={{ alignSelf: "center" }}>Img here</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}
