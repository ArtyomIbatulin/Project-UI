import { $host } from "../http"
import { UserType } from "../types/UserType"

const getUsers = () => {
    return $host.get<Array<UserType>>('/api/v1/get-users');
}

const signUp = (data: UserType) => {
    return $host.post<UserType>('/api/v1/sign-up', data);
}

const signIn = () => {
    return $host.get<UserType>("/api/v1/sign-in");
}

const UserServices = {getUsers, signUp, signIn};

export default UserServices;