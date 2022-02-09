require("./db/connection");
const mongoose = require("mongoose");

const yargs = require('yargs/yargs');
const{hideBin} = require('yargs/helpers');
const { addMovie, list } = require("./film/filmMethods");
const { find } = require("./film/filmModel");
const argv = yargs(hideBin(process.argv)).argv;


const app = async() =>{
    if(argv.add){
        await addMovie({
            name:argv.title,
            actor:argv.actor,
            year:argv.year,
            oscar:argv.oscar
        })
    } else if{

     Movie.find({}).then(data => console.log(data))

    }

    else if {
        Movie.find({year: {$gte:1980}}).then(data => console.log(data))
    }

    else if{
        Movie.updateOne({title: "The Revenant"},{year: 2015}).then(res => console.log(res))
    }
                else{
                    res.send(data);
                }
        
        
    else(
        console.log('wrong command')
    )
    

