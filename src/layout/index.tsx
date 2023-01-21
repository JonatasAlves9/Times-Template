import React, {useEffect} from 'react';
import PropTypes from "prop-types";
// import {withRouter} from "react-router-dom";


//import components
import Header from './Header';
import Sidebar from './Sidebar';
import {Outlet} from "react-router-dom";
// import Footer from './Footer';

//import actions
// import {
//     changeLayout,
//     changeSidebarTheme,
//     changeLayoutMode,
//     changeLayoutWidth,
//     changeLayoutPosition,
//     changeTopbarTheme,
//     changeLeftsidebarSizeType,
//     changeLeftsidebarViewType
// } from "../../store/actions";

//redux
// import {useSelector, useDispatch} from "react-redux";


const Layout = (props: any) => {

    // const dispatch = useDispatch();
    // const {
    //     layoutType,
    //     leftSidebarType,
    //     layoutModeType,
    //     layoutWidthType,
    //     layoutPositionType,
    //     topbarThemeType,
    //     leftsidbarSizeType,
    //     leftSidebarViewType
    // } = useSelector(state => ({
    //     layoutType: state.Layout.layoutType,
    //     leftSidebarType: state.Layout.leftSidebarType,
    //     layoutModeType: state.Layout.layoutModeType,
    //     layoutWidthType: state.Layout.layoutWidthType,
    //     layoutPositionType: state.Layout.layoutPositionType,
    //     topbarThemeType: state.Layout.topbarThemeType,
    //     leftsidbarSizeType: state.Layout.leftsidbarSizeType,
    //     leftSidebarViewType: state.Layout.leftSidebarViewType,
    // }));

    /*
    layout settings
    */
    // useEffect(() => {
    //     if (
    //         layoutType ||
    //         leftSidebarType ||
    //         layoutModeType ||
    //         layoutWidthType ||
    //         layoutPositionType ||
    //         topbarThemeType ||
    //         leftsidbarSizeType ||
    //         leftSidebarViewType) {
    //         dispatch(changeLeftsidebarViewType(leftSidebarViewType));
    //         dispatch(changeLeftsidebarSizeType(leftsidbarSizeType));
    //         dispatch(changeSidebarTheme(leftSidebarType));
    //         dispatch(changeLayoutMode(layoutModeType));
    //         dispatch(changeLayoutWidth(layoutWidthType));
    //         dispatch(changeLayoutPosition(layoutPositionType));
    //         dispatch(changeTopbarTheme(topbarThemeType));
    //         dispatch(changeLayout(layoutType));
    //     }
    // }, [layoutType,
    //     leftSidebarType,
    //     layoutModeType,
    //     layoutWidthType,
    //     layoutPositionType,
    //     topbarThemeType,
    //     leftsidbarSizeType,
    //     leftSidebarViewType,
    //     dispatch]);
    /*
    call dark/light mode
    */
    // const onChangeLayoutMode = (value) => {
    //     if (changeLayoutMode) {
    //         dispatch(changeLayoutMode(value));
    //     }
    // };

    return (
        <React.Fragment>
            <div id="layout-wrapper">
                <Header
                    layoutModeType={null}
                    onChangeLayoutMode={null}/>
                <Sidebar layoutType={"vertical"}/>
                <div className="main-content">
                    <Outlet/>
                    {/*<Footer/>*/}
                </div>
            </div>
        </React.Fragment>

    );
};

Layout.propTypes = {
    children: PropTypes.object,
};

export default Layout;
