import React, { useContext } from 'react';
import { View } from 'react-native';
import {
    Title,
    Caption,
    Drawer,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Iconn from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './drawerContent.style';
import { AuthContext } from '../../services/firebase/authProvider';

export function DrawerContent(props) {
    const {user, login, register, logout} = useContext(AuthContext);
    return(
        <View style={{flex:1}}>
            <View style={{flex:10}}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flex:1,marginTop: 15 }}>
                            <Icon 
                                name="account-outline" 
                                size={50}
                            />
                            <View style={{flex:1, justifyContent:"flex-end"}}>
                                <Title style={styles.title}> Mohsin Rehman</Title>
                                <Caption style={styles.caption}>{user.email}</Caption>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:3}}>
                        <DrawerContentScrollView {...props}>
                        <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                    name="home-outline" 
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Home"
                                onPress={() => {props.navigation.navigate('HomeScreen')}}
                            />
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                    name="account-outline" 
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Profile"
                            />
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                    name="food" 
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Food"
                                onPress={() => {props.navigation.navigate('FoodScreen')}}
                            />
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Iconn 
                                    name="settings-sharp" 
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Settings"
                            />
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                    name="account-check-outline" 
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Support"
                            />
                        </Drawer.Section>
                        </DrawerContentScrollView>
                    </View>
                </View>
            </View>
            <View style={{flex:1}}>
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="exit-to-app" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Sign Out"
                        onPress={() => logout()}
                    />
                </Drawer.Section>
            </View>
        </View>
    );
}


