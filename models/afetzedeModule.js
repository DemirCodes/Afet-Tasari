const mongoose = require('mongoose');

const afetSchema = mongoose.Schema(
    {
        id : {
            type : Number,
            unique: true
        },
        isim:{
            type: String,
            required : [true,"Lutfen isminizi giriniz ..."]
        },
        soyIsim:{
            type: String,
            required : [true,"Lutfen soy isminizi giriniz ..."]
        },
        tc:{
            type: Number,
            required : [true,"Lutfen soy isminizi giriniz ..."],
            
        },
        anneIsmi:{
            type: String,
            required:[true,"Lutfen anne adini giriniz ..."]
        },
        babaIsmi:{
            type: String,
            required:[true,"Lutfen baba adini giriniz ..."]
        }
        
    },
    {
        timestamps:true
    }
)

const Afetzede = mongoose.model('Afetzede',afetSchema);
module.exports = Afetzede;