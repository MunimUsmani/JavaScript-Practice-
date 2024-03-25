// let day = 4;

// switch(day){
//     case 1:
//         console.log("it is monday");
//         break;

//             case 2:
//                 console.log("it is tuesday");
//                 break;

//                 case 3:
//                     console.log("it is wednesday");
//                     break;

//                     case 4:
//                         console.log("it is thursday");
//                         break;

//                         case 5:
//                             console.log("it is friday");
//                             break;

//                             case 6:
//                                 console.log("it is saturday");
//                                 break;

//                                 case 7:
//                                     console.log("it is Sunday");
//                                     break;

//                                     default:
//                                         console.log(day, "is not a day");
// }



let Score = 86;
let grade;

switch (true) {
    case Score >=90:
        grade = "A";
        break;

        case Score >=80:
        grade = "B";
        break;

        case Score >=70:
        grade = "C";
        break;

        case Score >=60:
        grade = "D";
        break;

        case Score >=50:
        grade = "E";
        break;

        case Score >=40:
        grade = "F";
        break;

    default:
        console.log(Score, "is not score");
        break;
}

console.log(grade);