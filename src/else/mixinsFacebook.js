const promises = {
    init: () => {
        return new Promise((resolve) => {
            if(typeof FB !== 'undefined'){
                resolve();
            }else{
                window.fbAsyncInit = () => {
                    console.log('fbAsyncInit');
                    window.FB.init({
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
                '/me?fields=first_name,last_name,gender,birthday,picture.width(200).height(200),cover',
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
                response => {
                    console.log(response);
                    this.props.setAccessFB(
                    response.first_name,
                    response.last_name,
                    response.birthday,
                    response.picture.data.url,
                    response.cover.source
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
                (response) => this.props.logOut(),
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