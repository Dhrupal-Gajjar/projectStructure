import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from 'screens/profile';
import SettingScreen from 'screens/setting';
const Drawer = createDrawerNavigator();

function Drawers() {
  return (
    <>
        <Drawer.Navigator>
            <Drawer.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}  />
            <Drawer.Screen name="Settings" component={SettingScreen} options={{headerShown:false}} />
        </Drawer.Navigator>
    </>
  );
}
export default Drawers