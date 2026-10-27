/*
  WEDDING CONFIGURATION
  Update names, dates, family details, venue and events here.
  Date format: YYYY-MM-DD. Time format: HH:mm (24-hour clock).
  The example wedding date is a placeholder; replace it with the real date.
*/
const weddingConfig = {
  groom: {
    nameMr: "आदित्य",
    nameEn: "Aditya",
    parentsMr: "श्री. व सौ. देशमुख",
    parentsEn: "Mr. & Mrs. Deshmukh",
    familyLineMr: "देशमुख परिवार",
    familyLineEn: "The Deshmukh Family"
  },
  bride: {
    nameMr: "सायली",
    nameEn: "Sayali",
    parentsMr: "श्री. व सौ. पाटील",
    parentsEn: "Mr. & Mrs. Patil",
    familyLineMr: "पाटील परिवार",
    familyLineEn: "The Patil Family"
  },
  wedding: {
    date: "2027-02-14",
    time: "10:30",
    timeZone: "Asia/Kolkata",
    displayDateMr: "१४ फेब्रुवारी २०२७",
    displayDateEn: "14 February 2027",
    timeDisplayMr: "सकाळी १०:३० वाजता",
    timeDisplayEn: "10:30 AM"
  },
  venue: {
    name: "शुभमंगल सभागृह",
    nameEn: "Shubhmangal Hall",
    address: "आपला पूर्ण पत्ता येथे जोडा, पुणे, महाराष्ट्र",
    addressEn: "Add the full venue address here, Pune, Maharashtra",
    latitude: null,
    longitude: null,
    mapsUrl: ""
  },
  events: [
    {
      nameMr: "हळदी समारंभ",
      nameEn: "Haldi Ceremony",
      dateMr: "१३ फेब्रुवारी २०२७",
      dateEn: "13 February 2027",
      timeMr: "सायंकाळी ५:०० वाजता",
      timeEn: "5:00 PM",
      locationMr: "कुटुंबीयांच्या निवासस्थानी",
      locationEn: "At the family residence",
      descriptionMr: "हळदीच्या रंगात रंगूया आणि आनंद साजरा करूया.",
      descriptionEn: "Join us for a joyful celebration filled with turmeric, laughter and family."
    },
    {
      nameMr: "शुभविवाह",
      nameEn: "Wedding Ceremony",
      dateMr: "१४ फेब्रुवारी २०२७",
      dateEn: "14 February 2027",
      timeMr: "सकाळी १०:३० वाजता",
      timeEn: "10:30 AM",
      locationMr: "शुभमंगल सभागृह",
      locationEn: "Shubhmangal Hall",
      descriptionMr: "आपल्या उपस्थितीने आमचा मंगल सोहळा अधिक सुंदर करा.",
      descriptionEn: "Celebrate our wedding day with your presence and blessings."
    },
    {
      nameMr: "स्वागत समारंभ",
      nameEn: "Reception",
      dateMr: "१४ फेब्रुवारी २०२७",
      dateEn: "14 February 2027",
      timeMr: "सायंकाळी ६:३० वाजता",
      timeEn: "6:30 PM",
      locationMr: "शुभमंगल सभागृह",
      locationEn: "Shubhmangal Hall",
      descriptionMr: "नव्या प्रवासाच्या आनंदात आमच्यासोबत सहभागी व्हा.",
      descriptionEn: "Join us as we celebrate the beginning of our new journey."
    }
  ],
  invitingFamily: ["दोन्ही परिवार"],
  invitingFamilyEn: ["Both families"],
  gallery: [],
  musicEnabled: false,
  musicPath: "assets/audio/wedding-instrumental.mp3"
};
