import React from 'react';
import {StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RecentsScreen from './src/screens/recentsScreen';
import AllExpenseScreen from './src/screens/allExpenseScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Theme} from './constants/theme';
import IconButton from './src/components/iconButton';
import AddExpense from './src/components/ExpenseItems/addExpense';
import ExpenseContextProvider from './src/store/context/expense-context';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Theme.tabBarColor},
        headerTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarActiveBackgroundColor: Theme.tabBarColor1,
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: {fontSize: 14},
        tabBarStyle: {backgroundColor: Theme.tabBarColor},
        
        headerRight: ({onPress} : any ) => <AddExpense  />,
      }}>
      <Tab.Screen
        name="Recents"
        component={RecentsScreen}
        options={{
          // headerRight: () => <></>,
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="time-outline" color={color} size={size} />;
          },
        }}
        />
      <Tab.Screen
        name="AllExpenseScreen"
        component={AllExpenseScreen}
        options={{
          tabBarIcon: ({color, size}) => {
            return (
              <Ionicons name="calendar-outline" color={color} size={size} />
            );
          },
        }}
        />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <ExpenseContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              contentStyle: {backgroundColor: '#302825'},
              headerShown: false,
            }}>
            <Stack.Screen name="Recent" component={BottomTab} />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpenseContextProvider>
    </GestureHandlerRootView>
  );
}
 
const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: Theme.backgroundTheme,
  },
});

export default App;
