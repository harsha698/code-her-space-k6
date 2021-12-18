import http from "k6/http";
import {check, fail} from "k6";

export default function postCall() {
    const url = 'https://reqres.in/api/users';
    const reqBody = JSON.stringify({
        "name": "morpheus",
        "job": "leader"
    })
    const params = {
        headers: {'Content-Type': 'application/json'}
    }
    const response = http.post(url, reqBody, params);
    checkStatusCode(response);

}

function checkStatusCode(response) {
    if (!(check(response, {'response status code check': res => res.status < 400}))) {
        fail(`api call ${response.url} failed with response ${response.body}`)
    }
}