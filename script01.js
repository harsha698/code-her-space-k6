import http from "k6/http";

export default function getCall() {
    http.get('https://reqres.in/api/users?page=2');
}