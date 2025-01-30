<div align="center">
  <img alt="Logo" src="./public/logo1000.webp" width="100" />
</div>

<h1 align="center">
  My Developer Portfolio V 1.0
</h1>

<div align="center">
  <img src="./public/preview.gif"/>
</div>


## Getting Started
If you need any help with this project, don't hesitate to contact me, 
I'll be more than happy to help. All my contact info are on the project under the contact page. 
### #1. Setting EmailJS:
_If you're not familiar with emailJS I describe the steps in detail  [Setting Up EmailJS](https://github.com/rashash-io/developer-portfolio/wiki/Setting-Up-EmailJS)_
save your service ID, Email Template, Public Key for the next step.
### 2. .env File:
create a .env file at the root of the project. Paste the following code into it and replace the values you got the replace the service_name , template_name, & key with the corrosponding variables you got from emailJS
```
NEXT_PUBLIC_EMAILJS_SERVICE = service_name
NEXT_PUBLIC_EMAILJS_TEMPLATE = template_name
NEXT_PUBLIC_EMAILJS_KEY = key
```
_make sure the extension is `.env`_

## Starting the dev server  
open a terminal at the root of the project & install all the dependenncies 
```bash
npm install
#OR
npm i
```
Then run the developmetnt enviroment
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
check everything is running correctly, Edit it to your preference & put it in your data.
Now its ready for production

##
Yes, you can fork this repo & use it as your own, but please give me proper credit by linking back to (RASHASH.IO)[https://rashash.io]Thanks!





