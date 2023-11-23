const dbOperationUserAccount = require('./SQLServerFiles/dbOperationUserAccount');
const dbOperationEvent = require('./SQLServerFiles/dbOperationEvent');
const dbOperationEventAttendees = require('./SQLServerFiles/dbOperationEventAttendees');
const dbOperationVenues = require('./SQLServerFiles/dbOperationVenues');
const dbOperationEventHosting = require('./SQLServerFiles/dbOperationEventHosting');
const dbOperationOrganizerEvents = require('./SQLServerFiles/dbOperationOrganizerEvents');
const dbOperationCaterers = require('./SQLServerFiles/dbOperationCaterer');

const userAccountController = {
    createUserAccount: async(req,res) => {
        console.log('Called /api/account/addaccount');
        const result = await dbOperationUserAccount.addAccount(req.body);  
        try {
            res.send(result.toString());
        } catch {
            res.send(''.toString());
        }
    },
    verifyEmail: async(req,res) => {
        console.log('Called /api/account/verifyemail');
        const result = await dbOperationUserAccount.verifyEmail(req.body.email);
        console.dir(result[0]);
        res.send(result);
    }, 
    changePassword: async(req,res) => {
        console.log('Called /api/account/changepassword');
        console.log(req.body['email']);
        const result = await dbOperationUserAccount.changePassword(req.body['email'],req.body['password']);  
        try {
            console.log(result.toString());
            res.send(result.toString());
        } catch {
            res.send(''.toString());
        }
    },
    addOrganizerAccount: async(req,res) => {
        console.log('Called /api/account/addorganizeraccount');
        // console.log('c',req.body['userId']);
        const result = await dbOperationUserAccount.addOrganizerAccount(req.body['userId']);  
        try {
            res.send(result.toString());
        } catch {
            res.send(''.toString());
        }
    },
    addCatererAccount: async(req,res) => {
        console.log('Called /api/account/addcatereraccount');
        // console.log('c',req.body['userId']);
        const result = await dbOperationUserAccount.addCatererAccount(req.body['userId']);  
        try {
            res.send(result.toString());
        } catch {
            res.send(''.toString());
        }
    },
    getUserAccount: async(req,res) => {
        console.log('Called /api/account/getuseraccount');
        const result = await dbOperationUserAccount.getUserAccount(req.body.email);
        console.dir(result);
        res.send(result);
    },    
    getAccountType: async(req,res) => {
        console.log('Called /api/account/getaccounttype');
        const result = await dbOperationUserAccount.getAccountType(req.body.email);
        console.dir(result);
        res.send(result);
    },  
    getAccounts: async(req,res) => {
        console.log('Called /api/account/getaccounts');
        const result = await dbOperationUserAccount.getAccounts();
        console.dir(result);
        res.send(result);
    },    
    getUserIdByEmail: async(req,res) => {
        console.log('Called /api/account/getuseridbyemail');
        console.log('input',req.body.email);
        const result = await dbOperationUserAccount.getUserIdByEmail(req.body.email);
        console.log('result',result[0]['User_id'].toString());
        res.send(result[0]['User_id'].toString());
    },
    updateUserAccount: async(req,res) => {
        console.log('Called /api/account/updateuseraccount');
        const result = await dbOperationUserAccount.updateUserAccount(req.body);  
        try {
            res.send(result);
        } catch {
            res.send(''.toString());
        }
    },
    // noDupEmails: async(req,res) => {
    //     console.log('Called /api/account/nodupemails');
    //     const result = await dbOperationUserAccount.noDupEmails(req.body.email);
    //     const emailExists = result.toString().length > 0;
    //     // console.dir(`Email exists: ${emailExists}`);
    //     res.send(emailExists.toString());
    // }
    
    verifyLogin: async (req, res) => {
      console.log('Called /api/account/verifylogin');
      const result = await dbOperationUserAccount.verifyLogin(req.body.email, req.body.password);
      if (result > 0) {
        res.send('True');
      } else {
        res.send('False');
      }
    }
};


const organizerController = {

};


const eventController = {
    getEventByName: async (req, res) => {
        console.log('Called /api/event/getEventByName');
        const result = await dbOperationEvent.getEventByName(req.body.name);
        console.dir(result);
        res.send(result.recordset);
    },
    getEvents: async (req, res) => {
        console.log('Called /api/event/getEvents');
        const result = await dbOperationEvent.getEvents(req.body.name);
        console.dir(result);
        res.send(result.recordset);
    },
    createEvent: async (req, res) => {
        console.log('Called /api/event/createEvent');
        console.dir(req.body);
        //create and return event
        await dbOperationEvent.createEvent(req.body);
        const result = await dbOperationEvent.getEventByName(req.body.Event_name);

        //stop if event is virtual
        if(req.body.eventFormat == "Virtual"){
            console.log('1event'+ JSON.parse(JSON.stringify(result.recordset[0]))['Event_id']);
            await dbOperationOrganizerEvents.createOrganizerEvent(JSON.parse(JSON.stringify(result.recordset[0]))['Event_id'], req.body.OrganizerId);
        }else{
            console.log('hosting ' + JSON.parse(JSON.stringify(result.recordset[0]))['Event_id']);
            await dbOperationEventHosting.createEventHosting(JSON.parse(JSON.stringify(result.recordset[0]))['Event_id'], req.body.VenueId);
            console.log('2event'+ JSON.parse(JSON.stringify(result.recordset[0]))['Event_id']);
            await dbOperationOrganizerEvents.createOrganizerEvent(JSON.parse(JSON.stringify(result.recordset[0]))['Event_id'], req.body.OrganizerId);
        }
        console.dir(result);
        res.send(result.recordset);
    },
    getCapacity: async (req, res) => {
        console.log('Called /api/event/getCapacity');
        const result = await dbOperationEvent.getCapacity(req.body.id);
        console.dir(result);
        res.send(result.recordset);
    },
    getEventInfo: async (req, res) => {
        console.log('Called /api/event/getEventInfo');
        const result = await dbOperationEvent.getEventInfo(req.body.id);
        console.dir(result);
        res.send(result.recordset);
    },
};

const eventAttendeeController = {
    getAttendeeQuantity: async (req, res) => {
        console.log('Called /api/eventAttendee/getAttendeeQuantity');
        const result = await dbOperationEventAttendees.getAttendeeQuantity(req.body.eventID,req.body.userID);
        console.dir(result);
        res.send(result.recordset);
    },
    updateEventAttendee: async (req, res) => {
        console.log('Called /api/eventAttendee/updateEventAttendee');
        const result = await dbOperationEventAttendees.updateEventAttendee(req.body);
        console.dir("result: "+result);
        res.send(result);
    },
    getTicketsSold: async (req, res) => {
        console.log('Called /api/eventAttendee/getTicketsSold');
        const result = await dbOperationEventAttendees.getTicketsSold(req.body.id);
        console.dir(result);
        res.send(result.recordset);
    },
    getUserEvents: async (req, res) => {
        console.log('Called /api/eventAttendee/getUserEvents');
        const result = await dbOperationEventAttendees.getUserEvents(req.body.id);
        console.dir(result);
        res.send(result);
    },
};

const venueController = {
    getVenues: async (req, res) => {
        console.log('Called /api/venue/getVenues');
        const result = await dbOperationVenues.getVenues(req.body);
        console.dir(result);
        res.send(result);
    }
};


const catererController = {
    getCaterers: async(req,res) => {
        console.log('Called /api/caterer/getCaterers');
        const result = await dbOperationCaterers.getCaterers(req.body);
        console.dir(result);
        res.send(result);
    }

};


module.exports = {
    userAccountController,
    organizerController,
    eventController,
    eventAttendeeController,
    venueController,
    catererController
}
