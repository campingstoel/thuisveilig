import { Text } from "react-native";
import headerStyles from "../styles/headerStyles";


const Header = (props) => {
    return (
        <Text style={[headerStyles.header, props.styles]}>{props.text}</Text>
    );
}

export default Header;
