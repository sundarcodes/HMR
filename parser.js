var str="A1:Miyapur;A2:JNTU College;A3:KPHB Colony;A4:Kukatpally;A5:Balanagar;A6:Moosapet;A7:Bharat Nagar;A8:Erragadda;A9:ESI Hospital;A10:S R Nagar;X1:Ameerpet;A12:Punjagutta;A13:Irrum Manzil;A14:Khairatabad;A15:Lakdikapul;A16:Assembly;A17:Nampally;A18:Gandhi Bhavan;A19:Osmania Medical College;X2:MG Bus station;A21:Malakpet;A22:New Market;A23:Musarambagh;A24:Dilsukhnagar;A25:Chaitanyapuri;A26:Victoria Memorial;A27:L B Nagar;B1: JBS     ;X3: Parade Grounds    ;B3: Secunderabad;B4: Gandhi Hospital   ;B5: Musheerabad   ;B6: RTC Cross Roads;B7: Chikkadpally    ;B8: Narayanguda   ;B9: Sultan Bazar;X2: M G Bus Station   ;B11:Salarjung Museum  ;B12:Charminar;B13:Shalibanda    ;B14:Shamsher Gunj   ;B15:Jungametta;B16:Falaknuma;C1: Nagole      ;C2: Uppal       ;C3: Survey of India;C4: NGRI      ;C5: Habsiguda     ;C6: Tarnaka;C7: Mettuguda   ;C8: Secunderabad      ;X3: Parade Grounds;C10:Paradise    ;C11:Rasool Pura     ;C12:Prakash Nagar;C13:Begumpet    ;X1: Ameerpet      ;C15:Madhura Nagar;C16:Yusuf Guda    ;C17:Road No 5 Jubilee Hills   ;C18:Jubilee Hills Check Post;C19:Pedamma Temple    ;C20:Madhapur      ;C21:Durgam Chervu;C22:HITEC City    ;C23:Shilparamam";

var stationsLineMapper = {
  'A' : 1,
  'B' : 2,
  'C' : 3,
  'X' : 4
}

// console.log(str.split(''));

var stationList = [];
var linesList = {};
str.split(';').forEach(function(stationDetail) {
  var arr = stationDetail.split(':');
  var lineNo = stationsLineMapper[arr[0][0]];
  var stationObj = {};
  stationObj.code = arr[0];
  stationObj.name = arr[1].trim();

  if (lineNo in linesList) {
    linesList[lineNo].push({
      stationCode: stationObj.code,
      position: parseInt(arr[0].substring(1))
    });
  } else {
    arr1 = [];
    arr1.push({
      code: stationObj.code,
      position: parseInt(arr[0].substring(1))
    });
    linesList[lineNo] = arr1;
  }
  if (lineNo === 4) {
    // Its a junction
    stationObj.isJunction = true;
  } else {
    stationObj.line = parseInt(lineNo);
    // stationObj.position = parseInt(arr[0].substring(1));
  }

  stationList.push(stationObj);
});

console.log(stationList);
// console.log(linesList);


