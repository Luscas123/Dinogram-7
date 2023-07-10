import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Stack from "./stackNavigator";
import Profile from "../screens/Profile";
import LogOut from "../screens/Logout";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Tela Inicial" component={Stack} />
            <Drawer.Screen name="Perfil" component={Profile} />
            <Drawer.Screen name="Sair" component={LogOut} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;