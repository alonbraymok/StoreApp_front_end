export class User{

  constructor(public email: string, public password: string,
    public username: string, public address: string) { }


}

export class UserWithId{

  constructor(public id: string, public email: string, public password: string,
    public username: string, public address: string) { }


}