<div align="center">
  <img alt="Logo" src="./public/logo1000.webp" width="100" />
</div>

<h1 align="center">
  My Developer Portfolio V 1.0
</h1>
<img src="./public/preview.gif"/>

## Getting Started
If you need any help with this project, don't hesitate to contact me, 
I'll be more than happy to help. All my contact info are on the project under the contact page. 
### #1. Setting EmailJS
<img align="center" src="https://i.sstatic.net/hzFZ9.png"/>
Set up an account at https://www.emailjs.com/
Connect an email account to emailJS and get YOUR_SERVICE_ID
Connect an email by adding a service, in this case I used gmail.

note the id next to `Service ID`



<img align="center" src="https://i.sstatic.net/zqDWr.png"/>
Thats How I set my template
```
Name: {{{name}}}
Email: {{{email}}}
Phone: {{{phone}}}
Selection: {{{select}}}
Message: {{{message}}}
```
<img align="center" src="https://i.sstatic.net/Jlyjq.png"/>

Get YOUR_USER_ID
You can find your API Keys by going to Account
Replace 'YOUR_USER_ID'(step 2) with the id under API Keys -> Public Key

<img src="https://i.sstatic.net/0pc1M.png"/>

### .env Variables
At the root of your app, create a .env folder to store secrets safely & add the following to it 
```
NEXT_PUBLIC_EMAILJS_SERVICE = service_name
NEXT_PUBLIC_EMAILJS_TEMPLATE = template_name
NEXT_PUBLIC_EMAILJS_KEY = key
```
replace the service_name , template_name, & key with the corrosponding variables you got from emailJS

### Starting the dev server  
Install the dependenncies 
```bash
npm install
#OR
npm i
```
Runnding developmetnt wenviroment
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.





