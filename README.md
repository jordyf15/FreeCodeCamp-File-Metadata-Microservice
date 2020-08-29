# File Metadata Microservice
For the fifth project of FreeCodeCamp's API and Microservice Curriculum, we have to make a File Metadata Microservice with basic Node and Basic Express.

## Live Demo on Repl
https://file-metadata-microservice.jordyf15.repl.co/

## Test/User-Stories
1. I can submit a form object that includes a file upload.
2. The form file input field has the "name" attribute set to "upfile". We rely on this in testing.
3. When I submit something, I will receive the file name, and size in bytes within the JSON response.

## Example Usage
### Example File Upload
example_pic.jpg
### Example Output
```
{
name:	"example_pic.jpg",
type:	"image/jpeg",
size:	361977
}
```

## Technology Used:
1. HTML
2. CSS
3. Javascript
4. Express version 4.17.1
5. Express-fileupload version 1.2.0
6. Font Awesome version 4.7.0