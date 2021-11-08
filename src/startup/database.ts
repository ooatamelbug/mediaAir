// import monggose and config
import monggose from 'mongoose';
import config from 'config';


// create connect to database  
export const databaseConnect = {
    connect: () => {
        // create new variable and carry the uri of database from config
        const uri: string = config.get('database.uri');
        console.log(uri);
        // create connect 
        monggose.connect(uri, {}, err => {
            if(err) throw err;
            console.log("conenct");
        });
    }
}
