import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from 'screens/profile';
import SettingScreen from 'screens/setting';
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <>
        <Tab.Navigator>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}  />
            <Tab.Screen name="Settings" component={SettingScreen} options={{headerShown:false}} />
        </Tab.Navigator>
    </>
  );
}
export default Tabs