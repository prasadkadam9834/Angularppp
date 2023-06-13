import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordvalidator(control: AbstractControl): ValidationErrors | null {

    const conformpassword = control.value
    const password = control.root.get('password')?.value
    console.log(conformpassword, password)
    if (conformpassword != "" && (password != conformpassword)) {
        return { 'passwordmissmatch': true }
    } else {

        return null
    }
}

export function agedefine(control:AbstractControl):ValidationErrors|null{
   const age=control.value
   if(age&&age<18){
    return {'ageisnot':true}
   }else{
    return null
   }
}



// export function verifyemail(control: AbstractControl): ValidationErrors | null {
   
//  const confirm=control.value
//  const email=control.root.get('CEmail')?.value
//  if(confirm!= "" && (email != confirm)){
//     return {'gmail':true}
//  }
//  else{
//     return null
//  }

// }

export function verifyemail (control: AbstractControl): ValidationErrors | null{
    
   
    const email = control.value;
    const atIndex = email.indexOf('@gmail.com');
    // if(email !='' && (email != atIndex)){
    //   return {valid:true}
    
      
    
    if (atIndex === -1 || atIndex === 0) {
      return { gmail: 'true' };
    } else {
      return null;
    }
    
}
