import fetch from 'node-fetch';
const starting_doodle_year = 2000;

async function getDoodleJson(year, month) {
   let url = `https://www.google.com/doodles/json/${year}/${month}?hl=en`;
   let response = await fetch(url);
   let data = await response.json();
   return data;
}

export async function getRandomDoodle() {
   var thisYear = new Date().getFullYear();
   let randomYear = randomNumber(thisYear, starting_doodle_year);
   let randomMonth = randomNumber(1, 12);

   let doodle_obj_list = await getDoodleJson(randomYear, randomMonth);
   if(doodle_obj_list.length<=0){
      console.log("ERROR! NO DATA")
     return await getRandomDoodle();
   }
      

   let random_doodle_obj = getRandomElement(doodle_obj_list);
   console.log("_____________START_____________________")
   console.log(random_doodle_obj);
   console.log("______________END____________________")

   return {
      title: random_doodle_obj["title"],
      imgUrl: random_doodle_obj["high_res_url"].replace('//www', "https://www"),
      query: getSearchLink(random_doodle_obj)
   };
}

function getSearchLink(doodle) {
   return 'https://www.google.com/search?q=' + doodle["title"].split(" ").join("+")
}

export async function getRandomDoodleList(numberOfDoodles=2) {
   let correct_doodle = await getRandomDoodle();
   let incorrect_doodles = [];
   for(let i=0;i<=numberOfDoodles;i++){
      let doodle = await getRandomDoodle();
      incorrect_doodles.push(doodle.title);
   }

   return {
      ...correct_doodle,
      options: insertElement(incorrect_doodles, correct_doodle.title)
   }

}

function randomNumber(max, min = 1) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function insertElement(array, element) {
   const index = Math.floor(Math.random() * array.length);
   array.splice(index, 0, element);
   return array;
 }

 function getRandomElement(array) {
   const index = Math.floor(Math.random() * array.length);
   return array[index];
 }