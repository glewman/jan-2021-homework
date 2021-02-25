const userData = [
    {
        userId: 1,
        id: 1,
        phoneNumber: "867-5309",
        website: "TheAthletic.com",
        email:"user1@yahoo.com",
    },
    {
        userId: 2,
        id: 2,
        phoneNumber: "555-1234",
        website: "stltoday.com",
        email: "user2@gmail.com"
    },
    {
        userId: 3,
        id: 3,
        phoneNumber: "235-0159",
        website: "spotify.com",
        email: "user3@yahoo.com"
    },
    {
        userId: 4,
        id: 4,
        phoneNumber: "555-0910",
        website: "spotify.com",
        email: "user4@gmail.com",
    }
];
const phone = userData.map((user) => {
    return user.phoneNumber;
}
)
const data = userData.map((user) => {
    return [user.website, user.email];
})
//console.log(phone);
//console.log(data);
    
const toDo = [
{
    userId: 9,
    task: "Take out the trash",
    completed: true
},
{
userId: 9,
task: "Take out the recycling",
completed: true
},
{
userId: 9,
task: "stain the cabinet",
completed: false
},
{
    userId: 9,
    task: "rake the leaves",
    completed: true
},
{
    userId: 9,
    task: "clean fish tank",
    completed: false
},
{
    userId: 9,
    task: "clean litter boxes",
    completed: true
},
{
    userId: 9,
    task: "vacuum",
    completed: true
},
{
    userId: 9,
    task: "wash laundry",
    completed: false
},
{
    userId: 9,
    task: "empty dishwasher",
    completed: false
}
];
const incomplete = toDo.filter((user) => (task.completed === false));
console.log(incomplete);