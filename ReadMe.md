# REST

What are we learning today?

-  We are going to talk about what exactly is REST, what is a RESTful API, and what makes an api RESTful?

- Demo examples of RESTful endpoints

-Query String Parameters
    - What they are
    - How are they useful
    - Breaking the anatomy of a Query String Paramater

-Demo of an example using Query String parameters.


## REST
- representational state transfer
- is a way to organize our routes, in our server there is a particular way that we can write our endpoints that follows a RESTful pattern.
    -Scalable - we can re-use routes for multiple and various situations
    -Easy to read and understand

- RESTful pattern<br>
    - 1.verbs <br>
   
    verbs - http methods
    Create - .post
    Read - .get
    Update - .put 
    Destroy - .delete

    app.verb

    - 2.nouns - only reserved for the url <br>

    - ex: Restful<br>
    app.get('/dogs/', async (req, res, next) => {
        try {
        res.send('arf');
        } catch (error) {
        next(error)
        }
    });

    - ex: NOT RESTFUL<br>
    app.get('/get-dogs/', async (req, res, next) => {
        try {
        res.send('arf');
        } catch (error) {
        next(error)
        }
    });

    - 3. broad -> specific <br>

    app.get('/animals/dogs/', async (req, res, next) => {
        try {
        res.send('arf');
        } catch (error) {
        next(error)
        }
    });   
