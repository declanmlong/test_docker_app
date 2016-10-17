/*var employees = [
    {"id": 0, "firstName": "James", "lastName": "King", "reports": 4, "title": "President and CEO", "department": "Corporate", "cellPhone": "617-000-0001", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "James_King.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
    {"id": 1, "firstName": "Julie", "lastName": "Taylor", "managerId": 0, "managerName": "James King", "reports": 2, "title": "VP of Marketing", "department": "Marketing", "cellPhone": "617-000-0002", "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com", "city": "Boston, MA", "pic": "Julie_Taylor.jpg", "twitterId": "@fakejtaylor", "blog": "http://coenraets.org"},
    {"id": 2, "firstName": "Eugene", "lastName": "Lee", "managerId": 0, "managerName": "James King", "reports": 0, "title": "CFO", "department": "Accounting", "cellPhone": "617-000-0003", "officePhone": "781-000-0003", "email": "elee@fakemail.com", "city": "Boston, MA", "pic": "Eugene_Lee.jpg", "twitterId": "@fakeelee", "blog": "http://coenraets.org"},
    {"id": 3, "firstName": "John", "lastName": "Williams", "managerId": 0, "managerName": "James King", "reports": 3, "title": "VP of Engineering", "department": "Engineering", "cellPhone": "617-000-0004", "officePhone": "781-000-0004", "email": "jwilliams@fakemail.com", "city": "Boston, MA", "pic": "John_Williams.jpg", "twitterId": "@fakejwilliams", "blog": "http://coenraets.org"},
    {"id": 4, "firstName": "Ray", "lastName": "Moore", "managerId": 0, "managerName": "James King", "reports": 2, "title": "VP of Sales", "department": "Sales", "cellPhone": "617-000-0005", "officePhone": "781-000-0005", "email": "rmoore@fakemail.com", "city": "Boston, MA", "pic": "Ray_Moore.jpg", "twitterId": "@fakermoore", "blog": "http://coenraets.org"},
    {"id": 5, "firstName": "Paul", "lastName": "Jones", "managerId": 3, "managerName": "John Williams", "reports": 0, "title": "QA Manager", "department": "Engineering", "cellPhone": "617-000-0006", "officePhone": "781-000-0006", "email": "pjones@fakemail.com", "city": "Boston, MA", "pic": "Paul_Jones.jpg", "twitterId": "@fakepjones", "blog": "http://coenraets.org"},
    {"id": 6, "firstName": "Paula", "lastName": "Gates", "managerId": 3, "managerName": "John Williams", "reports": 0, "title": "Software Architect", "department": "Engineering", "cellPhone": "617-000-0007", "officePhone": "781-000-0007", "email": "pgates@fakemail.com", "city": "Boston, MA", "pic": "Paula_Gates.jpg", "twitterId": "@fakepgates", "blog": "http://coenraets.org"},
    {"id": 7, "firstName": "Lisa", "lastName": "Wong", "managerId": 1, "managerName": "Julie Taylor", "reports": 0, "title": "Marketing Manager", "department": "Marketing", "cellPhone": "617-000-0008", "officePhone": "781-000-0008", "email": "lwong@fakemail.com", "city": "Boston, MA", "pic": "Lisa_Wong.jpg", "twitterId": "@fakelwong", "blog": "http://coenraets.org"},
    {"id": 8, "firstName": "Gary", "lastName": "Donovan", "managerId": 1, "managerName": "Julie Taylor", "reports": 0, "title": "Marketing Manager", "department": "Marketing", "cellPhone": "617-000-0009", "officePhone": "781-000-0009", "email": "gdonovan@fakemail.com", "city": "Boston, MA", "pic": "Gary_Donovan.jpg", "twitterId": "@fakegdonovan", "blog": "http://coenraets.org"},
    {"id": 9, "firstName": "Kathleen", "lastName": "Byrne", "managerId": 4, "managerName": "Ray Moore", "reports": 0, "title": "Sales Representative", "department": "Sales", "cellPhone": "617-000-0010", "officePhone": "781-000-0010", "email": "kbyrne@fakemail.com", "city": "Boston, MA", "pic": "Kathleen_Byrne.jpg", "twitterId": "@fakekbyrne", "blog": "http://coenraets.org"},
    {"id": 10, "firstName": "Amy", "lastName": "Jones", "managerId": 4, "managerName": "Ray Moore", "reports": 0, "title": "Sales Representative", "department": "Sales", "cellPhone": "617-000-0011", "officePhone": "781-000-0011", "email": "ajones@fakemail.com", "city": "Boston, MA", "pic": "Amy_Jones.jpg", "twitterId": "@fakeajones", "blog": "http://coenraets.org"},
    {"id": 11, "firstName": "Steven", "lastName": "Wells", "managerId": 3, "managerName": "John Williams", "reports": 0, "title": "Software Architect", "department": "Engineering", "cellPhone": "617-000-0012", "officePhone": "781-000-0012", "email": "swells@fakemail.com", "city": "Boston, MA", "pic": "Steven_Wells.jpg", "twitterId": "@fakeswells", "blog": "http://coenraets.org"}
];
*/
// var employees = [{
//     "employee": "Ronald",
//     "Manager": "Jonathan",
//     "imageFile": "http://icons.iconarchive.com/icons/icons-land/vista-people/256/Office-Customer-Male-Light-icon.png",
//     "linkedin": "http://google.com",
//     "facebook": "http://google.com"
//   }, {
//     "employee": "Anne",
//     "Manager": "Jonathan",
//     "imageFile": "http://icons.iconarchive.com/icons/icons-land/vista-people/128/Person-Male-Light-icon.png",
//     "linkedin": "http://google.com",
//     "facebook": "http://google.com"
//   }, {
//     "employee": "Evan",
//     "Manager": "Jonathan",
//     "imageFile": "http://icons.iconarchive.com/icons/icons-land/vista-people/128/Office-Customer-Female-Light-icon.png",
//     "linkedin": "http://google.com",
//     "facebook": "http://google.com"
//   }, {
//     "employee": "Jonathan",
//     "Manager": null,
//     "imageFile": "http://icons.iconarchive.com/icons/icons-land/vista-people/128/Office-Customer-Female-Light-icon.png",
//     "linkedin": "http://google.com",
//     "facebook": "http://google.com"
//   }, {
//     "employee": "Declan",
//     "Manager": "Evan",
//     "imageFile": "http://icons.iconarchive.com/icons/icons-land/vista-people/128/Office-Customer-Female-Light-icon.png",
//     "linkedin": "http://google.com",
//     "facebook": "http://google.com"
//   }, {
//     "employee": "Elena",
//     "Manager": "Evan",
//     "imageFile": "http://icons.iconarchive.com/icons/icons-land/vista-people/128/Office-Customer-Female-Light-icon.png",
//     "linkedin": "http://google.com",
//     "facebook": "http://google.com"
//   }, {
//     "employee": "Jim",
//     "Manager": "Evan",
//     "imageFile": "http://icons.iconarchive.com/icons/icons-land/vista-people/128/Office-Customer-Female-Light-icon.png",
//     "linkedin": "http://google.com",
//     "facebook": "http://google.com"
//   },{
//     "employee": "phil",
//     "Manager": "Jonathan",
//     "imageFile": "http://icons.iconarchive.com/icons/icons-land/vista-people/128/Office-Customer-Female-Light-icon.png",
//     "linkedin": "http://google.com",
//     "facebook": "http://google.com"
//   }, {
//     "employee": "con",
//     "Manager": "Jonathan",
//     "imageFile": "http://icons.iconarchive.com/icons/icons-land/vista-people/128/Office-Customer-Female-Light-icon.png",
//     "linkedin": "http://google.com",
//     "facebook": "http://google.com"
//   },
//    {
//     "employee": "monkia",
//     "Manager": "Jonathan",
//     "imageFile": "http://icons.iconarchive.com/icons/icons-land/vista-people/128/Office-Customer-Female-Light-icon.png",
//     "linkedin": "http://google.com",
//     "facebook": "http://google.com"
//   },

var employees = [
    {"employee":"Ronald","Manager":"Jonathan", "name":"Ronald", "surname":"blogss", "imageFile":"http://icons.iconarchive.com/icons/icons-land/vista-people/256/Office-Customer-Male-Light-icon.png", "linkedin":"http://google.com", "facebook":"http://google.com"},
    {"employee":"Anne","Manager":"Jonathan", "name":"Anne", "surname":"blogss", "imageFile":"http://icons.iconarchive.com/icons/icons-land/vista-people/128/Person-Male-Light-icon.png", "linkedin":"http://google.com", "facebook":"http://google.com"},    {"employee":"Evan","Manager":"Jonathan", "name":"Evan", "surname":"blogss","imageFile":"http://icons.iconarchive.com/icons/icons-land/vista-people/128/Office-Customer-Female-Light-icon.png", "linkedin":"http://google.com", "facebook":"http://google.com"},  {"employee":"Jonathan","Manager":null,"name":"Johnathan", "surname":"blogss","imageFile":"http://icons.iconarchive.com/icons/icons-land/vista-people/128/Office-Customer-Female-Light-icon.png", "linkedin":"http://google.com", "facebook":"http://google.com"},
    {"employee":"Declan","Manager":"Evan","name":"Declan", "surname":"blogss","imageFile":"http://icons.iconarchive.com/icons/icons-land/vista-people/128/Office-Customer-Female-Light-icon.png", "linkedin":"http://google.com", "facebook":"http://google.com"},
    {"employee":"Elena","Manager":"Evan","name":"Elena", "surname":"blogss","imageFile":"http://icons.iconarchive.com/icons/icons-land/vista-people/128/Office-Customer-Female-Light-icon.png", "linkedin":"http://google.com", "facebook":"http://google.com"},
    {"employee":"jim","Manager":"Evan","name":"jim", "surname":"blogss","imageFile":"http://icons.iconarchive.com/icons/icons-land/vista-people/128/Office-Customer-Female-Light-icon.png", "linkedin":"http://google.com", "facebook":"http://google.com"},
    {"employee":"phil","Manager":"Jonathan","name":"phil", "surname":"blogss","imageFile":"http://icons.iconarchive.com/icons/icons-land/vista-people/128/Office-Customer-Female-Light-icon.png", "linkedin":"http://google.com", "facebook":"http://google.com"},
    {"employee":"con","Manager":"Jonathan","name":"Con", "surname":"blogss","imageFile":"http://icons.iconarchive.com/icons/icons-land/vista-people/128/Office-Customer-Female-Light-icon.png", "linkedin":"http://google.com", "facebook":"http://google.com"},
    {"employee":"david","Manager":"Ronald","name":"David", "surname":"blogss","imageFile":"http://icons.iconarchive.com/icons/icons-land/vista-people/128/Office-Customer-Female-Light-icon.png", "linkedin":"http://google.com", "facebook":"http://google.com"},
    {"employee":"michael","Manager":"Ronald","name":"David", "surname":"blogss","imageFile":"http://icons.iconarchive.com/icons/icons-land/vista-people/128/Office-Customer-Female-Light-icon.png", "linkedin":"http://google.com", "facebook":"http://google.com"},
    {"employee":"Barry","Manager":"Anne","name":"Barry", "surname":"blogss","imageFile":"http://icons.iconarchive.com/icons/icons-land/vista-people/128/Office-Customer-Female-Light-icon.png", "linkedin":"http://google.com", "facebook":"http://google.com"},
    {"employee":"Ovidiu","Manager":"Anne","name":"Ovidiu", "surname":"blogss","imageFile":"http://icons.iconarchive.com/icons/icons-land/vista-people/128/Office-Customer-Female-Light-icon.png", "linkedin":"http://google.com", "facebook":"http://google.com"},]




exports.findAll = function (req, res, next) {
    var name = req.query.name;
    if (name) {
        res.send(employees.filter(function(employee) {
            return (employee.firstName + ' ' + employee.lastName).toLowerCase().indexOf(name.toLowerCase()) > -1;
        }));
    } else {
        res.send(employees);
    }
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(employees[id]);
};

exports.findReports = function (req, res, next) {
    var id = parseInt(req.params.id),
        response,
        reports = [],
        employee;

    response = {
        id: id,
        firstName: employees[id].firstName,
        lastName: employees[id].lastName,
        title: employees[id].title,
        pic: employees[id].pic
    }

    for (var i=0; i<employees.length; i++) {
        employee = employees[i];
        if (employee.managerId === id) {
            reports.push({id: employee.id, firstName: employee.firstName, lastName: employee.lastName, title: employee.title, pic: employee.pic});
        }
    }

    response.reports = reports;

    res.send(response);
};
