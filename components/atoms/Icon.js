import { View } from 'react-native';
import Header from './Header';
import Ionicons from '@expo/vector-icons/Ionicons';
import iconStyles from '../styles'
import index from '../styles';
const Icon = (props) => {
    return (
        <View style={[props.active ? iconStyles.activeBG : iconStyles.inactiveBG, index.spaceBetween, index.row, index.alignCenter]}>
            {props.textFirst ? 
            <Header text={props.text} style={[props.active ? iconStyles.activeText : iconStyles.inactiveText]}/> : null}
        <Ionicons name={props.name} size={props.size} color={
            props.active ? 'white' : iconStyles.inactiveText
        } />
        {props.iconFirst ? <Header text={props.text} style={[props.active ? index.activeText : index.inactiveText]}/> : null}
        </View>
    );
}

export default Icon;