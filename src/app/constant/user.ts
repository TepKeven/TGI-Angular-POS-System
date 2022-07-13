export class User {
    private id: number;
    private name: string;
    private age: number;
    private dob: string;
    private description: string;
    private profile:string;

    constructor(id:number,name:string,age:number,dob:string,description:string,profile:string){
        this.id = id;
        this.name = name;
        this.age = age;
        this.dob = dob;
        this.description = description;
        this.profile = profile;
    }

    getId(){
      return this.id;
    }

    getName(){
      return this.name;
    }

    getAge(){
      return this.age;
    }

    getDOB(){
      return this.dob;
    }

    getDescription(){
      return this.description;
    }

    getProfile(){
      return this.profile;
    }

    setName(name:string): void{
      this.name = name;
    }

    setAge(age:number){
      this.age = age
    }

    setDOB(dob:string){
      this.dob = dob;
    }

    setDescription(description:string){
      this.description = description;
    }

    setProfile(profile:string){
      this.profile = profile;
    }
}
