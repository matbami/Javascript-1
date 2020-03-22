let name = 'Adeleke Ayobami'

const courses = ['Html','Css','Javascript', 'Node js','Python']

//Print name and courses
console.log(`Name =====> ${name}`)
console.log(`courses =======> ${courses}`)

//if number of courses is odd
if(courses.length % 2 != 0){
    for(number=1; number<=200; number++){

        if(number%2 != 0){
            console.log(number)
        }
    }
}

//else, if it is even
else{
    for(number=1; number<=200; number++){

        if(number%2 == 0){
            console.log(number)
        }
    }
}

