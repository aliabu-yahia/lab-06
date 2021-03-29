'use strict';

require('dotnev').config();

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
    res.send(location)
}

function Location(datas) {
    this.search_querry='Lynnwood'
    this.formatted_querry= datas[0].display_name;
    this.latitude=dates[0].lat;
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
    this.forecast=datas.weater.description;
    this.time=dats.datetime;
}


