type LoginParams = {
    email: string;
    password: string;
};

type MePayload = {
    id: string;
    code: string;
    email: string;
    name: string;
};

type Me = MePayload & {
    token: string;
};

export { Me, MePayload, LoginParams };
