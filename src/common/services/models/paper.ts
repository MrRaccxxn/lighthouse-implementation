import axiosClient from "../axiosClient";

export async function createPaper(data: FormData) {
    axiosClient.defaults.headers.post['Content-Type'] = 'multipart/form-data';
    return axiosClient.post(`/paper`, data)
        .then(response => response)
        .catch(error => console.log(error));
}