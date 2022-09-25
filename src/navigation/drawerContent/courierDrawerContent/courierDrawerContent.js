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
import Iconn from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './courierDrawerContent.style';
import { AuthContext } from '../../../services/firebase/authProvider';
import colors from '../../../assets/colors/colors';
  
export function CourierDrawerContent(props) {
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
                                color={colors.white}
                            />
                            <View style={{flex:1, justifyContent:"flex-end"}}>
                                <Title style={styles.title}> @Username</Title>
                                {user?.email ?<Caption style={styles.caption}>{user?.email}</Caption>:
                                <Caption style={styles.caption}>user_email@gmail.com</Caption>}
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
                                onPress={() => {props.navigation.navigate('CourierScreen')}}
                            />
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                    name="cellphone-text" 
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Track Shipments"
                                
                            />
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Iconn 
                                    name="corporate-fare" 
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Get Rates"
                                
                            />
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                    name="truck-delivery" 
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Pick Up"
                                
                            />
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                    name="file-find" 
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Find Us"
                                
                            />
                        </Drawer.Section>
                        </DrawerContentScrollView>
                    </View>
                </View>
            </View>
            <View style={{flex:1,backgroundColor:colors.primary}}>
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="exit-to-app" 
                            color={colors.white}
                            size={size}
                            />
                        )}
                        label="Sign Out"
                        labelStyle={{color:colors.white}}
                        onPress={() => logout()}
                    />
                </Drawer.Section>
            </View>
        </View>
    );
}


