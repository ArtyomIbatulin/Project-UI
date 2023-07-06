export enum RoleEnum {
    user,
    admin
}

export type UserType = {
    id: number;
    login: string;
    password: string;
    role: RoleEnum;
}