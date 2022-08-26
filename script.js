// Question no - 01 : For thegiven  JSON iterate over all for loops (for,for in, for of)




var arr = [
  {
    "id": "1",
    "name": "Lura Senger",
    "email": "Xander_Collier@yahoo.com",
    "age": "18"
  },
  {
    "id": "2",
    "name": "Wilburn Weber",
    "email": "Bennett_Kreiger11@yahoo.com",
    "age": "24"
  },
  {
    "id": "3",
    "name": "Tyrique Hahn",
    "email": "Juston.Altenwerth@yahoo.com",
    "age": "30"
  },
  {
    "id": "4",
    "name": "Lenny Bailey",
    "email": "Guiseppe_Hegmann@yahoo.com",
    "age": "27"
  },
  {
    "id": "5",
    "name": "Vladimir Keeling",
    "email": "Louisa_Walsh18@hotmail.com",
    "age": "31"
  },
  {
    "id": "6",
    "name": "Kellie Crona",
    "email": "Chandler_Abernathy@yahoo.com",
    "age": "21"
  },
  {
    "id": "7",
    "name": "Carolina White",
    "email": "Royal50@hotmail.com",
    "age": "28"
  },
  {
    "id": "8",
    "name": "Alfredo Conn",
    "email": "Clarabelle34@hotmail.com",
    "age": "35"
  },
  {
    "id": "9",
    "name": "Stan Shanahan",
    "email": "Lamar.McClure@hotmail.com",
    "age": "25"
  },
  {
    "id": "10",
    "name": "Marvin Fay",
    "email": "Osbaldo58@hotmail.com",
    "age": "29"
  },
  {
    "id": "11",
    "name": "Torrance Rau",
    "email": "Orin45@gmail.com",
    "age": "30"
  },
  {
    "id": "12",
    "name": "Harold Gutmann MD",
    "email": "Alyce.Stracke37@yahoo.com",
    "age": "33"
  },
  {
    "id": "13",
    "name": "Taryn Torphy",
    "email": "Dean_Breitenberg71@hotmail.com",
    "age": "26"
  },
  {
    "id": "14",
    "name": "Bryana Lang",
    "email": "Tatum.Ullrich@yahoo.com",
    "age": "18"
  },
  {
    "id": "15",
    "name": "Nyasia Green DDS",
    "email": "Dino83@gmail.com",
    "age": "34"
  }
]
for (var i = 10; i < 15; i++) {
  console.log(arr[i].id, arr[i].name, arr[i].email, arr[i].age);
}

for (var i in arr) {
  console.log(arr[i]["id"], arr[i]["name"], arr[i]["email"], arr[i]["age"]);
}


for (var i of arr) {
  console.log(i["id"], i["name"], i["email"], i["age"]);
}


// Question no - 02 : Create your own resume data in JSON format.

let resume = [
  {
    "name": "sultha hijas ahamed",
    "age": "26"
    
    
  },
  {
    "key competencies": "Have more than 2 years Experience  as HSE Document Controller in MEP Projects. Have Knowledge in computer software/ hardware for work and effective communication skills. Has strong background in document control, specifications, calculations, reports, final documentations, etc"
  },

  {
    "qualifications": "HVAC Diploma",
    "college": "mohamed sathak polytechnic college"
  },

  {
    "languages": "english, hindi, tamil"
  },

  {
    "computer skills": "Familiar with a range of proprietary software including Microsoft Office (Words, excel, PowerPoint, Outlook) Adobe Acrobat, etc."
  },

  {
    "work experience": "AG Engineering MEP (Mar 16 2019 to may 10 2021) Abu Dhabi, UAE"
  },

  {
    "Position": "HSE Document Controller"
  },

  {
    "Key Responsibilities": "As a HSE Document Controller following are my job Responsibilities. Received, issued, log, update and keeping of all the project HSE related documentations, Specifications , Data sheets, calculations etc. Provide the ability to control the documentations flow, filing/archiving, and document handover activities for the project sites, both for the head office and project sites throughout all HSE phases. Provide a review of all the HSE documentation being generated, in both hard copy and electronic versions by project sub-contractors and suppliers in order to ensure that all contractual requirements will be met. Day to Day liaison with project HSE Officer to ensure efficient and effective control of all project HSE documentation from any source either internally or externally. Responsible in arranging and filing all project HSE documents in site. Takes HSE Minutes of meeting in site HSE staff weekly and monthly. Responsible in checking site emoloyee's man hours, accidents, incidents & nearmiss report. Submit and follow up Notice of HSE Inspection and HSE weekly & monthly report."
  }
]


