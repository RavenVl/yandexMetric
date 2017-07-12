(function () {
    function httpGet(url) {

        return new Promise(function (resolve, reject) {

            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);

            xhr.onload = function () {
                if (this.status == 200) {
                    resolve(this.response);
                } else {
                    var error = new Error(this.statusText);
                    error.code = this.status;
                    reject(error);
                }
            };

            xhr.onerror = function () {
                reject(new Error("Network Error"));
            };

            xhr.send();
        });

    }

    function doQuery() {

        let id = document.forms[0].ids.value;
        let oath = document.forms[0].oath.value;
        let query = document.forms[0].query.value;
        query = query.split('=');
        let data = `query0=${query[0]}&query1=${query[1]}&id=${id}&oauth_token=${oath}`;
        //let url = "https://api-metrika.yandex.ru/stat/v1/data?"+data;
        let url = "main.php?" + data;
        httpGet(url)
            .then(
                response => {
                    //alert(`Fulfilled: ${response}`);
                    let textArea = document.querySelector('#rez');
                    let rez = JSON.parse(response);
                    textArea.value = rez.totals;
                    //textArea.value = response;

                },
                error => alert(`Rejected: ${error}`)
            );
    }

    document.querySelector('button').addEventListener('click', doQuery);
})();
