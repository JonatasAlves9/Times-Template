import React, {useEffect} from "react";
import {Navigate, Route} from "react-router-dom";


const AuthProtected = (props: any) => {
    // const dispatch = useDispatch();
    // const { userProfile, loading, token } = useProfile();
    // useEffect(() => {
    //     if (userProfile && !loading && token) {
    //         setAuthorization(token);
    //     } else if (!userProfile && loading && !token) {
    //         dispatch(logoutUser());
    //     }
    // }, [token, userProfile, loading, dispatch]);
    //
    // /*
    //   redirect is un-auth access protected routes via url
    //   */
    //
    const user = false
    if (user) {
        return (
            <Navigate to={{pathname: "/login"}}/>
        );
    }

    return <>{props.children}</>;
};


export {AuthProtected};
