const promises = {
    init: () => {
        return new Promise((resolve) => {
            console.log('init');
            if(typeof FB !== 'undefined'){
                console.log('undefined');
                resolve();
            }else{
                window.fbAsyncInit = () => {
                    console.log('fbAsyncInit');
                    let FB;
                    FB.init({
                        appId   : 1904739873076289,
                        cookie  : true,
                        xfbml   : true,
                        version : 'v2.10'
                    });
                    resolve();
                };
                (function(d, s, id) {
                    let js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s); js.id = id;
                    js.src = "//connect.facebook.net/en_US/sdk.js";
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
            }
        });
    },
    checkLoginState: () => {
        return new Promise((resolve,reject) => {
            window.FB.getLoginStatus((response) => {
                response.status ==='connected' ? resolve(response) : reject(response);
            });
        });
    },
    login: () => {
        return new Promise((resolve,reject) => {
            window.FB.login((response) => {
                response.status === 'connected' ? resolve(response) : reject(response);
            }, { scope: 'user_friends,user_location,user_photos'});
        });
    },
    logout: () => {
        return new Promise((resolve,reject) => {
            window.FB.logout((response) => {
                response.authResponse ? resolve(response) : reject(response);
            });
        });
    },
    fetch: () => {
        return new Promise((resolve,reject) => {
            window.FB.api(
                '/me?fields=first_name,last_name,gender,birthday,picture.width(720).height(720)',
                response => response.error ? reject(response) : resolve(response)
            );
        });
    }
};
export const Facebook = {
    doLogin(){
        let promise = new Promise((resolve) => {
            this.props.loading();
            resolve();
        });
        promise
            .then(
                promises.init,
                error => { throw error; }
            )
            .then(
                promises.checkLoginState,
                error => { throw error; }
            )
            .then(
                null,
                promises.login
            )
            .then(
                promises.fetch,
                error => { throw error; }
            )
            .then(
                response => { this.props.setAccessFB(
                    response.first_name,
                    response.last_name,
                    response.birthday,
                    response.picture.data.url
                );},
                error => { throw error; }
            )
            .catch((error) => {
                console.warn(error);
            });
    },
    doLogout(){
        let promise = new Promise((resolve) => {
            this.props.loading();
            resolve()
        });
        promise
            .then(
                promises.init,
                error => { throw error; }
            )
            .then(
                promises.checkLoginState,
                error => { throw error; }
            )
            .then(
                promises.logout,
                error => { throw error; }
            )
            .then(
                () => { this.props.logOut(); },
                error => { throw error; }
            )
            .catch((error) => {
                console.warn(error);
            })
    }
};
// export const Facebook = {
//     doLogin(){
//         this.setState({
//             loading: true
//         }, () => {
//             promises.init()
//                 .then(
//                     promises.checkLoginState,
//                     error => {throw error}
//                 )
//                 .then(
//                     response => { this.setState({ status: response.status}); },
//                     promises.login
//                 )
//                 .then(
//                     promises.fetch,
//                     error => { throw error}
//                 )
//                 .then(
//                     response => { this.setState({loading: false, data:response, status: 'connected'}); },
//                     error => { throw error}
//                 )
//                 .catch((error) => {
//                     this.setState({loading: false, data: {}, status: 'unknown'});
//                     console.warn(error);
//                 });
//         });
//     },
//     doLogout(){
//         this.setState({
//             loading: true
//         }, () => {
//             promises.init()
//                 .then(
//                     promises.checkLoginState,
//                     error => {throw error}
//                 )
//                 .then(
//                     promises.logout,
//                     error => { this.setState({data: {}, status: 'unknown'}); }
//                 )
//                 .then(
//                     response => { this.setState({ loading: false, data: {}, status: 'unknown'}); },
//                     error => { throw error}
//                 )
//                 .catch(error => {
//                     this.setState({ loading: false, data: {}, status: 'unknown'});
//                     console.warn(error);
//                 });
//             });
//     },
//     checkStatus(){
//         this.setState({
//             loading: true
//         }, () => {
//             promises.init()
//                 .then(
//                     promises.checkLoginState,
//                     error => { throw error}
//                 )
//                 .then(
//                     response => {this.setState({ status: response.status }); },
//                     error => {throw error }
//                 )
//                 .then(
//                     promises.fetch,
//                     error => { throw error }
//                 )
//                 .then(
//                     response => { this.setState({ loading: false, data: response, status: 'connected'}); },
//                     error => { throw error }
//                 )
//                 .catch( (error) => {
//                     this.setState({loading: false, data: {}, status: 'unknown'});
//                     console.warn(error)
//                 });
//         });
//     }
// };