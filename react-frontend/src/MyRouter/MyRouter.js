import React, { useState, useEffect, useRef, useCallback } from "react";
import classNames from "classnames";
import { Route, useLocation, useHistory, Switch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import AppTopbar from "../AppTopbar";
import { AppFooter } from "../AppFooter";
import { AppMenu } from "../AppMenu";
import { AppConfigStatic } from "../AppConfigStatic";

import Dashboard from "../components/Dashboard/Dashboard";

import PrimeReact from "primereact/api";

import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "prismjs/themes/prism-coy.css";
import "../assets/demo/flags/flags.css";
import "../assets/demo/Demos.scss";
import "../assets/layout/layout.scss";
import "../App.scss";
import "../customStyles.css";

import LoginPage from "../components/LoginPage/LoginPage";
import AdminPage from "../components/Admin/AdminPage";
import SignUpPage from "../components/LoginPage/SignUpPage";
import NoMatch from "./NoMatch";
import MainLayout from "../components/Layouts/MainLayout";
import Account from "../components/Account/Account";
import ToastWrapper from "./wrappers/ToastWrapper";
import StartupWrapper from "./wrappers/StartupWrapper";
import LoadingWrapper from "./wrappers/LoadingWrapper";
import UsersPage from "../components/UsersPage/UsersPage";
import ProductsPage from "../components/ProductsPage/ProductsPage";
import PaymentsPage from "../components/PaymentsPage/PaymentsPage";
import DeliveryPage from "../components/DeliveryPage/DeliveryPage";
import ShoppingorderPage from "../components/ShoppingorderPage/ShoppingorderPage";
import AboutUs from "../components/AboutPage/About";
import ContactUs from "../components/ContactPage/Contact";
// ~cb-add-import~

const MyRouter = () => {
    const [layoutMode, setLayoutMode] = useState("static");
    const [layoutColorMode, setLayoutColorMode] = useState("light");
    const [inputStyle, setInputStyle] = useState("outlined");
    const [ripple, setRipple] = useState(true);
    const [staticMenuInactive, setStaticMenuInactive] = useState(false);
    const [overlayMenuActive, setOverlayMenuActive] = useState(false);
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const [mobileTopbarMenuActive, setMobileTopbarMenuActive] = useState(false);
    const copyTooltipRef = useRef();
    const location = useLocation();
    const history = useHistory();

    PrimeReact.ripple = true;

    let menuClick = false;
    let mobileTopbarMenuClick = false;

    useEffect(() => {
        if (mobileMenuActive) {
            addClass(document.body, "body-overflow-hidden");
        } else {
            removeClass(document.body, "body-overflow-hidden");
        }
    }, [mobileMenuActive]);

    useEffect(() => {
        copyTooltipRef && copyTooltipRef.current && copyTooltipRef.current.updateTargetEvents();
    }, [location]);

    const onInputStyleChange = (inputStyle) => {
        setInputStyle(inputStyle);
    };

    const onRipple = (e) => {
        PrimeReact.ripple = e.value;
        setRipple(e.value);
    };

    const onLayoutModeChange = (mode) => {
        setLayoutMode(mode);
    };

    const onColorModeChange = (mode) => {
        setLayoutColorMode(mode);
    };

    const onWrapperClick = (event) => {
        if (!menuClick) {
            setOverlayMenuActive(false);
            setMobileMenuActive(false);
        }

        if (!mobileTopbarMenuClick) {
            setMobileTopbarMenuActive(false);
        }

        mobileTopbarMenuClick = false;
        menuClick = false;
    };

    const onToggleMenuClick = (event) => {
        menuClick = true;

        if (isDesktop()) {
            if (layoutMode === "overlay") {
                if (mobileMenuActive === true) {
                    setOverlayMenuActive(true);
                }

                setOverlayMenuActive((prevState) => !prevState);
                setMobileMenuActive(false);
            } else if (layoutMode === "static") {
                setStaticMenuInactive((prevState) => !prevState);
            }
        } else {
            setMobileMenuActive((prevState) => !prevState);
        }

        event.preventDefault();
    };

    const onMobileTopbarMenuClick = (event) => {
        mobileTopbarMenuClick = true;

        setMobileTopbarMenuActive((prevState) => !prevState);
        event.preventDefault();
    };

    const onMobileSubTopbarMenuClick = (event) => {
        mobileTopbarMenuClick = true;

        event.preventDefault();
    };

    const isDesktop = () => {
        return window.innerWidth >= 992;
    };

    const addClass = (element, className) => {
        if (element.classList) element.classList.add(className);
        else element.className += " " + className;
    };

    const removeClass = (element, className) => {
        if (element.classList) element.classList.remove(className);
        else element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };

    const wrapperClass = classNames("layout-wrapper", {
        "layout-overlay": layoutMode === "overlay",
        "layout-static": layoutMode === "static",
        "layout-static-sidebar-inactive": staticMenuInactive && layoutMode === "static",
        "layout-overlay-sidebar-active": overlayMenuActive && layoutMode === "overlay",
        "layout-mobile-sidebar-active": mobileMenuActive,
        "p-input-filled": inputStyle === "filled",
        "p-ripple-disabled": ripple === false,
        "layout-theme-light": layoutColorMode === "light",
    });

    return (
        // <div>
        <div className={wrapperClass} onClick={onWrapperClick}>
            {location.pathname === "/login" ? null : (
                <AppTopbar
                    onToggleMenuClick={onToggleMenuClick}
                    layoutColorMode={layoutColorMode}
                    mobileTopbarMenuActive={mobileTopbarMenuActive}
                    onMobileTopbarMenuClick={onMobileTopbarMenuClick}
                    onMobileSubTopbarMenuClick={onMobileSubTopbarMenuClick}
                    onAccount={() => history.push("/account")}
                    onSettings={() => history.push("/settings")}
                    onCart={() => history.push("/shoppingorder")}
                />
            )}

            {/* <div className="layout-sidebar" onClick={onSidebarClick}>
                <AppMenu model={menu} onMenuItemClick={onMenuItemClick} layoutColorMode={layoutColorMode} />
            </div> */}
            <MainLayout>
                <Switch>
                    <Route path="/" exact render={() => <Dashboard colorMode={layoutColorMode} location={location} />} />
                    <Route path="/dashboard" exact render={() => <Dashboard colorMode={layoutColorMode} location={location} />} />
                    <Route path="/admin" component={AdminPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/signup" exact component={SignUpPage} />
                    <Route path="/account" component={Account} />
                    <Route path="/users" component={UsersPage} />
                    <Route path="/products" component={ProductsPage} />
                    <Route path="/payments" component={PaymentsPage} />
                    <Route path="/delivery" component={DeliveryPage} />
                    <Route path="/shoppingorder" component={ShoppingorderPage} />
                    <Route path="/about" component={AboutUs} />
                    <Route path="/contact" component={ContactUs} />
                    {/* ~cb-add-route~ */}

                    <Route path="*" component={NoMatch} />
                </Switch>
                <AppFooter layoutColorMode={layoutColorMode} />
            </MainLayout>
            <LoadingWrapper />
            <ToastWrapper />
            <StartupWrapper />
            <AppConfigStatic rippleEffect={ripple} inputStyle={inputStyle} layoutMode={layoutMode} layoutColorMode={layoutColorMode} onColorModeChange={onColorModeChange} />
            <CSSTransition classNames="layout-mask" timeout={{ enter: 200, exit: 200 }} in={mobileMenuActive} unmountOnExit>
                <div className="layout-mask p-component-overlay"></div>
            </CSSTransition>
        </div>
    );
};

export default MyRouter;
