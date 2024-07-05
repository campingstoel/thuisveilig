import { StyleSheet } from "react-native";

const iconStyles = StyleSheet.create({
    activeBG: {
        backgroundColor: "red",
        width: 150,
        padding: 10,
        
    },
    inactiveBG: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 50,
    },

    activeIcon: {
        color: "white",
    },
    inactiveIcon: {
        color: "black",
    },
});

export default iconStyles;
