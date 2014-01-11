# Custom pages of HTTP response

With the custom pages of HTTP responses your can replace the standard pages of web servers such as Apache, Nginx, lighttpd, etc. Custom pages support multilanguage and simple installation.

---

## Configuration

You can configure following settings in the **config.js** file:
* "*lang*" - the language of pages text. You can select one of language from translation folder ("/src/lang").


## Pages compilation
For pages compilation using [Node.JS](http://nodejs.org/). After installing the Node.JS in custom pages folder run following command: `node compile.js`.

After completion of compile, in **output** folder will be created static html files - upload it to yours server.


## Web server configuration
Example of Nginx configuration:

    error_page 400 /401.html;
    error_page 401 /401.html;
    error_page 403 /403.html;
    error_page 404 /404.html;
    error_page 410 /410.html;
    error_page 500 /500.html;
    error_page 503 /503.html;
    error_page 505 /505.html;

    location ~^\/(401|403|404|500|503|505)\.html$ {
        charset utf-8;
    	auth_basic off;
    	root /usr/share/nginx/www;
    }
