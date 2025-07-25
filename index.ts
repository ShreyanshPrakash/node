import server from "src/server";




server.listen(
    4200,
    (error) => {
        if(error){
            console.error(error);
            return;
        }

        console.log("Listening at port :", 4200);
    }
)