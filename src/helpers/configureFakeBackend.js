export function configureFakeBackend() {
    let users = [
        { id: 1, username: 'test1', password: 'test1', firstName: 'Test', lastName: 'User', age: 25, imageURL: 'https://randomuser.me/api/portraits/women/57.jpg', comment: 'Hi test User 1!' },
        { id: 2, username: 'test2', password: 'test2', firstName: 'Test2', lastName: 'User2', age: 35, imageURL: 'https://randomuser.me/api/portraits/women/60.jpg', comment: 'Hi test User 2!' },
        { id: 3, username: 'test3', password: 'test3', firstName: 'Test3', lastName: 'User3', age: 28, imageURL: 'https://randomuser.me/api/portraits/men/57.jpg', comment: 'Hi test User 3!' },
        { id: 4, username: 'test4', password: 'test4', firstName: 'Test4', lastName: 'User4', age: 12, imageURL: 'https://randomuser.me/api/portraits/men/68.jpg', comment: 'Hi test User 4!' },
        { id: 5, username: 'test5', password: 'test5', firstName: 'Test5', lastName: 'User5', age: 31, imageURL: 'https://randomuser.me/api/portraits/men/17.jpg', comment: 'Hi test User 5!' },
        { id: 6, username: 'test6', password: 'test6', firstName: 'Test6', lastName: 'User6', age: 81, imageURL: 'https://randomuser.me/api/portraits/men/32.jpg', comment: 'Hi test User 6!' },
        { id: 7, username: 'test7', password: 'test7', firstName: 'Test7', lastName: 'User7', age: 45, imageURL: 'https://randomuser.me/api/portraits/men/70.jpg', comment: 'Hi test User 7!' },
        { id: 8, username: 'test8', password: 'test8', firstName: 'Test8', lastName: 'User8', age: 15, imageURL: 'https://randomuser.me/api/portraits/women/21.jpg', comment: 'Hi test User 8!' }
    ];
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {

                // authenticate
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    // get parameters from post request
                    let params = JSON.parse(opts.body);

                    // find if any user matches login credentials
                    let filteredUsers = users.filter(user => {
                        return user.username === params.username && user.password === params.password;
                    });

                    if (filteredUsers.length) {
                        // if login details are valid return user details and fake jwt token
                        let user = filteredUsers[0];
                        let responseJson = {
                            id: user.id,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            imageURL: user.imageURL,
                            token: 'fake-jwt-token'
                        };
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        // else return error
                        reject('Username or password is incorrect');
                    }

                    return;
                }

                // get users
                if (url.endsWith('/users') && opts.method === 'GET') {
                    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(users))});
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                if (url.endsWith('/user') && opts.method === 'POST') {
                    // get parameters from post request
                    let params = JSON.parse(opts.body);

                    // find if any user matches login credentials
                    let filteredUsers = users.filter(user => {
                        return user.id === params.userId;
                    });

                    if (filteredUsers.length) {
                        // if login details are valid return user details and fake jwt token
                        let user = filteredUsers[0];
                        let responseJson = {
                            id: user.id,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            imageURL: user.imageURL,
                            age: user.age,
                            comment: user.comment
                        };
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        // else return error
                        reject('Selected user is not exist');
                    }
                    return;
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}