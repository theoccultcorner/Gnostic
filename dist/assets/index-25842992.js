import{r as d,b as f,u as w,a as i,j as b,c as E,p as S,e as o}from"./index-1a3dc146.js";import{A as x,a as A,b as I,c as y,f as L,s as c,v as W}from"./signIn-ec8de3d8.js";const j=()=>{const[s,l]=d.useState({email:"",password:""}),[r,u]=d.useState({email:!0}),{enqueueSnackbar:e}=f(),n=w(),h=a=>{a.preventDefault(),!r.email&&s.password!==""?E.signInWithEmailAndPassword(s.email,s.password).then(()=>{S(),e("Login successful!",{variant:"success"}),n("/")}).catch(t=>{t.code==="auth/invalid-email"?(o(),e("Invalid email address",{variant:"error"})):t.code==="auth/user-not-found"?(o(),e("User not found",{variant:"error"})):t.code==="auth/wrong-password"?(o(),e("Wrong password",{variant:"error"})):t.code==="auth/account-exists-with-different-credential"?(o(),e("Account exists with a different credential",{variant:"error"})):(o(),e(t.message,{variant:"error"}))}):(o(),e("Please fill all fields with valid data",{variant:"error"}))},g=()=>{n("/forgot-password")},m=()=>{n("/signup")},p=(a,t)=>{const _=W[a](t);u(v=>({...v,..._}))};return i(x,{children:i("form",{"aria-label":"Sign Up Form",children:b("div",{className:"form__bottom",children:[i(A,{label:"Email",id:"email",type:"email",placeholder:"Enter your email",value:s.email,handleChange:a=>{l({...s,email:a.target.value}),p(a.target.name,a.target.value)},maxLength:64,fieldName:"email",aria_dsc_by:"email-error",isError:r.email&&r.emailError,errorMesssage:r.emailError,error_border:!r.emailError}),i(I,{label:"Password",id:"password",name:"password",maxLength:30,placeholder:"Enter your password",value:s.password,handleChange:a=>l({...s,password:a.target.value}),aria_dsc_by:"password-error",errorMesssage:r.passwordError,isError:r.password&&r.passwordError}),i(y,{handleSubmit:h,btn__label:"LogIn",submit__icon:L,handleSignInWithGoogle:a=>c(a,e,n),handleSignInWithFacebook:a=>c(a,e,n,!1),have_acct_question:"Don't have an account? ",have_acct_nav:m,have__acct_action:"Sign up",forgot_pass_nav:g,showGuestSignIn:!1})]})})})};export{j as default};
