const { ApolloError } = require('apollo-server-errors');
const users = [
    {
        id:1,
        username: 'john',
        password: "pass1234",
        opt:12345,
        authorizationtoken:"othsample",
        items:[
            {
            firstname:"john",
            lastname:"smith",
            mobile: 12345678,
            address: "#20 unit k street" ,
            location: "usa",
            balanceRecord: 1234456,
            payment:3000,
            datecreation:"02-20-2022",
            gender:"male",
            age:30,
            birthday:"10/10/2022",
            job:"engineer",
            record:"verify",             
        }
       ]
    },
    {
        id:2,
        username: 'jayson',
        password: "pass4567",
        opt:23456,
        authorizationtoken:"othsample",
        items:[
        {
            firstname:"jayson",
            lastname:"gonzales",
            mobile: 12345678,
            address: "#20 unit k street" ,
            location: "uk",
            balanceRecord: 1234456,
            payment:4000,
            datecreation:"05-20-2022",
            gender:"male",
            age:19,
            birthday:"10/10/2022",
            job:"student",
            record:"verify",             
        }  
       ]
    },
    {
        id:3,
        username: 'jenn',
        password: "pass891",
        opt:34567,
        authorizationtoken:"othsample",
        items: [
        {
            firstname:"jenn",
            lastname:"paul",
            mobile: 12345678,
            address: "#20 unit k street" ,
            location: "usa",
            balanceRecord: 1234456,
            payment:4000,
            datecreation:"05-20-2022",
            gender:"male",
            age:19,
            birthday:"10/10/2022",
            job:"student",
            record:"verify",             
        }  
       ]
    },
];

const resolvers = {
    Query: {
        getAllUser: () => {
            return users;
        },
        getUser: (_, { username , password }) => {
            // Check to see if the inputted name matches a dog in our data
            let user = users.filter( user => user.username === username && user.password === password );
            console.log("user",user);
            if (user.length > 0) {
                // If we have a dog, return it to the user!
                return user[0];
            } else {
                // If we don't have a dog, return an error saying there is no dog with that name
                return new ApolloError('No user with the name ' + username, 'DOG_DOESNT_EXIST');
            }
        }
       
    }
    
}

module.exports = { resolvers }
