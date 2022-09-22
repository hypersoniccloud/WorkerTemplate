const mongoose = require("mongoose");
const config = require("../config")

const mongooseUrl = `${config.get('mongoUrl')}/${config.get('mongoDatabase')}`
let hypersonicSchema = null;

getConnection = async function() {
    if (!mongoose.connection.readyState) {
        try {
            await mongoose.connect(mongooseUrl, {
                useNewUrlParser: true,
                authSource:"admin",
                user: config.get('mongoLogin'),
                pass: config.get('mongoPassword')
            })
            console.log("Connected to MongoDB");
        }
        catch (error) {
            console.log("Unable to connect to mongodb");
            console.log(error);
        }
    }
    return mongoose;
}

getHypersonicSchema = function() {
    if (hypersonicSchema === null) {
        Schema = mongoose.Schema
        hypersonicSchema = new Schema({
            idComponent: { type: String, index: true, required: true, unique: false },
            subidComponent: { type: String, index: true, required: true, unique: false },
            flowId: { type: mongoose.Schema.Types.ObjectId, index: true, required: true, unique: false },
            eventId: {type: mongoose.Schema.Types.ObjectId, index: true, required: true, unique: true},
            previousEventId: {type: mongoose.Schema.Types.ObjectId, index: true, required: false, unique: false},
            status : {type: String, require:true, index:true, unique: false},
            creationDate: {type: Date, require: true, index: true},
            type: {type: String, require: true, index:false},
            eventTypeInfo : {type: Object, require: false, index:false},
            content: { type: String, unique: false, index: false, required: false }
        })
    }

    return hypersonicSchema;
}

getHypersonicModel = async function() {
    if (! mongoose.connection.readyState) {
        console.error("Unable to store event in mongoose - not connected");
        throw {
            error : true,
            errorMessage : "Mongoose not connected"
        }
    }
    return await mongoose.model("Event", getHypersonicSchema());
}

saveEvent = async function(event) {
    const HypersonicModel = await getHypersonicModel();
    const currentEvent = await HypersonicModel.create({
        idComponent : event.idComponent,
        subidComponent : event.subidComponent,
        flowId : event.flowId,
        eventId : event.eventId,
        previousEventId : null,
        status: event.status,
        creationDate : event.creationDate,
        type : event.type,
        eventTypeInfo : event.eventTypeInfo,
        content : event.content
    })

    //send event to mongo
    //currentEvent.save((err) => {

    //})

}


module.exports = {getConnection, getHypersonicModel, saveEvent}
