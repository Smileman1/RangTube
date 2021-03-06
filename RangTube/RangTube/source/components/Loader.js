import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

/** 로딩화면 */
export default class Loader extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator color="#FFFFFF" size="small" />
            </View>
        )
    }
}

/** 스타일 */
const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0,0,0,0.6)",
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 99,
        justifyContent: "center"
    }
});