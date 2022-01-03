
import React from 'react';
import { MainContainer, DrawerContainerLeft, DrawerContainer, TopDrawerContainer, MidDrawerContainer, BottomDrawerContainer, } from './style';
import { useNavBar } from '../../contexts/navbar';



const Drawer = () => {
    const navbar = useNavBar();
    return (
        <MainContainer view={navbar.drawerView}>
            <DrawerContainerLeft onClick={() => {
                navbar.updateDrawerView();
            }} />
            <DrawerContainer onClick={() => {
                console.log("inhere")
            }} >
                <TopDrawerContainer>

                </TopDrawerContainer>
                <MidDrawerContainer />
                <BottomDrawerContainer />
            </DrawerContainer>
        </MainContainer>
    );
}

export default Drawer;
