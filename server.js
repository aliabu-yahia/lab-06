'use strict';

require('dotenv').config();

const express=require('express')
const cors =require('cors')

const PORT =process.env.PORT;
const app = express();

app.use(cors());

app.get('/location', locationReq)
app.get('/weather', weatherReq)


function locationReq(req,res){
    const info= require('./data/location.json')
    const location=new Location(info) 
    if(!location){
        res.status(500).send("Sorry, something went wrong")
    }else{
    res.send(location)
}
}

function Location(datas) {
    this.search_querry= datas.city
    this.formatted_querry= datas[0].display_name;
    this.latitude=datas[0].lat;
    this.longitude= datas[0].lon;
}

function weatherReq(req,res){
    const info= require('./data/weather.json')
    const allweather=[];
    info.data.forEach(element =>{
        allweather.push(new Data(element))
    });
    res.send(allweather)
}

function Data(datas) {
    this.forecast=datas.weather.description;
    this.time=datas.datastime;
}


app.listen(PORT,()=>{
console.log('hi');
});


