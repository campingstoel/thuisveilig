import { Link } from 'expo-router';
import { View } from 'react-native';
import Header from '../../../../components/atoms/Header';
import headerStyles from '../../../../components/styles/headerStyles';


const Profile = () => {
    return (
        <View>
        <Header text="Thuis Veilig" style={[headerStyles.test]}  />
        
        </View>
    );
}

export default Profile;
