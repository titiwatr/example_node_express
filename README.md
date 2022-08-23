# Node.js & Express Examples

This is a simple example of Node.js + Express basic setup. It covers
- create endpoints
- setup Express to use static folder
- setup Express to use view engine to render ejs
- how to use router
- how to use middleware
- how to handle form data
- how to handle query string

How to generate selfsigned certificate for https
```
openssl req -x509 -newkey rsa:2048 -keyout ./selfsigned.key -out ./selfsigned.crt -days 365 -nodes 
```
-nodes .. will skip pass phrase. This will result in private key not encrypted.
