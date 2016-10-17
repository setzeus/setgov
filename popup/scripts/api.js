export default {
    getExt(route) {
        console.log("getExt");
        return (
            fetch(route, {
                method: 'GET',
                crossDomain: true,
                headers: {
                    Accept: 'application/json'
                }
            })
            .then(res => {
                console.log('res = ' + res);
                res.json();
            }).then(res => {
                console.log('return res = ' + res);
                return res;
            }).catch(err => {
                console.log('error = ' + err);
                console.error(err);
            })
        );
    }
};