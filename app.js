'use strict';

  // Populate all Stations with its code and location

  var listOfStations = [ { code: 'A1', name: 'Miyapur', line: 1 },
  { code: 'A2', name: 'JNTU College', line: 1 },
  { code: 'A3', name: 'KPHB Colony', line: 1 },
  { code: 'A4', name: 'Kukatpally', line: 1 },
  { code: 'A5', name: 'Balanagar', line: 1 },
  { code: 'A6', name: 'Moosapet', line: 1 },
  { code: 'A7', name: 'Bharat Nagar', line: 1 },
  { code: 'A8', name: 'Erragadda', line: 1 },
  { code: 'A9', name: 'ESI Hospital', line: 1 },
  { code: 'A10', name: 'S R Nagar', line: 1 },
  { code: 'X1', name: 'Ameerpet', isJunction: true, line: 1 },
  { code: 'A12', name: 'Punjagutta', line: 1 },
  { code: 'A13', name: 'Irrum Manzil', line: 1 },
  { code: 'A14', name: 'Khairatabad', line: 1 },
  { code: 'A15', name: 'Lakdikapul', line: 1 },
  { code: 'A16', name: 'Assembly', line: 1 },
  { code: 'A17', name: 'Nampally', line: 1 },
  { code: 'A18', name: 'Gandhi Bhavan', line: 1 },
  { code: 'A19', name: 'Osmania Medical College', line: 1 },
  { code: 'X2', name: 'MG Bus station', isJunction: true, line: 1},
  { code: 'A21', name: 'Malakpet', line: 1 },
  { code: 'A22', name: 'New Market', line: 1 },
  { code: 'A23', name: 'Musarambagh', line: 1 },
  { code: 'A24', name: 'Dilsukhnagar', line: 1 },
  { code: 'A25', name: 'Chaitanyapuri', line: 1 },
  { code: 'A26', name: 'Victoria Memorial', line: 1 },
  { code: 'A27', name: 'L B Nagar', line: 1 },
  { code: 'B1', name: 'JBS', line: 2 },
  { code: 'X3', name: 'Parade Grounds', isJunction: true, line: 2 },
  { code: 'B3', name: 'Secunderabad', line: 2 },
  { code: 'B4', name: 'Gandhi Hospital', line: 2 },
  { code: 'B5', name: 'Musheerabad', line: 2 },
  { code: 'B6', name: 'RTC Cross Roads', line: 2 },
  { code: 'B7', name: 'Chikkadpally', line: 2 },
  { code: 'B8', name: 'Narayanguda', line: 2 },
  { code: 'B9', name: 'Sultan Bazar', line: 2 },
  { code: 'X2', name: 'MG Bus station', isJunction: true, line: 2},
  { code: 'B11', name: 'Salarjung Museum', line: 2 },
  { code: 'B12', name: 'Charminar', line: 2 },
  { code: 'B13', name: 'Shalibanda', line: 2 },
  { code: 'B14', name: 'Shamsher Gunj', line: 2 },
  { code: 'B15', name: 'Jungametta', line: 2 },
  { code: 'B16', name: 'Falaknuma', line: 2 },
  { code: 'C1', name: 'Nagole', line: 3 },
  { code: 'C2', name: 'Uppal', line: 3 },
  { code: 'C3', name: 'Survey of India', line: 3 },
  { code: 'C4', name: 'NGRI', line: 3 },
  { code: 'C5', name: 'Habsiguda', line: 3 },
  { code: 'C6', name: 'Tarnaka', line: 3 },
  { code: 'C7', name: 'Mettuguda', line: 3 },
  { code: 'C8', name: 'Secunderabad', line: 3 },
  { code: 'X3', name: 'Parade Grounds', isJunction: true, line: 3 },
  { code: 'C10', name: 'Paradise', line: 3 },
  { code: 'C11', name: 'Rasool Pura', line: 3 },
  { code: 'C12', name: 'Prakash Nagar', line: 3 },
  { code: 'C13', name: 'Begumpet', line: 3 },
  { code: 'X1', name: 'Ameerpet', isJunction: true, line: 3 },
  { code: 'C15', name: 'Madhura Nagar', line: 3 },
  { code: 'C16', name: 'Yusuf Guda', line: 3 },
  { code: 'C17', name: 'Road No 5 Jubilee Hills', line: 3 },
  { code: 'C18', name: 'Jubilee Hills Check Post', line: 3 },
  { code: 'C19', name: 'Pedamma Temple', line: 3 },
  { code: 'C20', name: 'Madhapur', line: 3 },
  { code: 'C21', name: 'Durgam Chervu', line: 3 },
  { code: 'C22', name: 'HITEC City', line: 3 },
  { code: 'C23', name: 'Shilparamam', line: 3 } ];



  var junctionsBetweenLines = {
    1: {
      2: 'X2',
      3: 'X1'
    },
    2: {
      1: 'X2',
      3: 'X3'
    },
    3: {
      1: 'X1',
      2: 'X3'
    }
  };

var junctionsMeetingLines = {
    'X1': {
      'X2': 1,
      'X3': 3
    },
    'X2': {
      'X1': 1,
      'X3': 2
    },
    'X3': {
      'X1': 3,
      'X2': 2
    }
  };


  // Data Structure to hold lines with the station code and position
  var Lines = { 
  '1':{
    stations:[ 
     { code: 'A1', position: 1 },
     { code: 'A2', position: 2 },
     { code: 'A3', position: 3 },
     { code: 'A4', position: 4 },
     { code: 'A5', position: 5 },
     { code: 'A6', position: 6 },
     { code: 'A7', position: 7 },
     { code: 'A8', position: 8 },
     { code: 'A9', position: 9 },
     { code: 'A10', position: 10 },
     { code: 'X1', position: 11 },
     { code: 'A12', position: 12 },
     { code: 'A13', position: 13 },
     { code: 'A14', position: 14 },
     { code: 'A15', position: 15 },
     { code: 'A16', position: 16 },
     { code: 'A17', position: 17 },
     { code: 'A18', position: 18 },
     { code: 'A19', position: 19 },
     { code: 'X2', position: 20 },
     { code: 'A21', position: 21 },
     { code: 'A22', position: 22 },
     { code: 'A23', position: 23 },
     { code: 'A24', position: 24 },
     { code: 'A25', position: 25 },
     { code: 'A26', position: 26 },
     { code: 'A27', position: 27 } ],
     fare: 2.5
   },
  '2':
  {
   stations:[
     { code: 'B1', position: 1 },
     { code: 'X3', position: 2 },
     { code: 'B3', position: 3 },
     { code: 'B4', position: 4 },
     { code: 'B5', position: 5 },
     { code: 'B6', position: 6 },
     { code: 'B7', position: 7 },
     { code: 'B8', position: 8 },
     { code: 'B9', position: 9 },
     { code: 'X2', position: 10 },
     { code: 'B11', position: 11 },
     { code: 'B12', position: 12 },
     { code: 'B13', position: 13 },
     { code: 'B14', position: 14 },
     { code: 'B15', position: 15 },
     { code: 'B16', position: 16 } ],
    fare: 2
  },

  '3': {
    stations:[
     { code: 'C1', position: 1 },
     { code: 'C2', position: 2 },
     { code: 'C3', position: 3 },
     { code: 'C4', position: 4 },
     { code: 'C5', position: 5 },
     { code: 'C6', position: 6 },
     { code: 'C7', position: 7 },
     { code: 'C8', position: 8 },
     { code: 'X3', position: 9 },
     { code: 'C10', position: 10 },
     { code: 'C11', position: 11 },
     { code: 'C12', position: 12 },
     { code: 'C13', position: 13 },
     { code: 'X1', position: 14 },
     { code: 'C15', position: 15 },
     { code: 'C16', position: 16 },
     { code: 'C17', position: 17 },
     { code: 'C18', position: 18 },
     { code: 'C19', position: 19 },
     { code: 'C20', position: 20 },
     { code: 'C21', position: 21 },
     { code: 'C22', position: 22 },
     { code: 'C23', position: 23 } ],
    fare: 3 
    },
   fixedFare: {
    hops: 3,
    fare: 10
   }    
   };



  $(document).ready(function() {
    // Do all the UI Initialization part here
    listOfStations.forEach(station => {
      let innerHtml = `<option value=${station.code}>${station.name}</option>`;
      $('#source').append(innerHtml);
      $('#dest').append(innerHtml);
    })
    $('select').material_select();
    $('#result').hide();

    $('#fareBtn').on('click', () => {
      var result = calculateFare(
        getStationFromCode($('#source')[0].value, listOfStations), 
        getStationFromCode($('#dest')[0].value,listOfStations),
        Lines,
        junctionsBetweenLines,
        junctionsMeetingLines,
        listOfStations
        );
      $('#startStation').html(getStationFromCode($('#source')[0].value, listOfStations).name);
      $('#endStation').html(getStationFromCode($('#dest')[0].value, listOfStations).name);
      $('#fare').html(result.fare);
      $('#numberOfHops').html(result.hops);
      if (result.hopJunction) {
        $('#junction').html(result.hopJunction);
      } else {
        $('#junction').html('No Hops');
      }
      $('#result').show();
    })

  });



function calculateFare(source, dest, Lines, junctionsBetweenLines, junctionsMeetingLines, listOfStations) {

  if (source.code == dest.code) {
    return {
      fare: 0,
      hops: 0
    }
  }
  // Separate Logic when junction is involved in source/dest
  if (isJunction(source) || isJunction(dest)) {
    return computeFareInvolvingJunctions(source, dest, Lines, junctionsBetweenLines, junctionsMeetingLines, listOfStations);
  } else {
    if (isSameLine(source, dest)){
      return computeSameLineFare(source, dest, Lines);
    } else {
      return computeDifferentLineFare(source, dest, Lines, junctionsBetweenLines, listOfStations);      
    }
  }
 }

function computeSameLineFare(source, dest, Lines) {
  return {
    fare: (findNoOfStationsBetween(source, dest, source.line, Lines) > Lines.fixedFare.hops ? getFareForSameLine(source, dest, source.line, Lines) : Lines.fixedFare.fare),
    hops: findNoOfStationsBetween(source, dest, source.line, Lines)
  };
}

function computeDifferentLineFare(source, dest, Lines, junctionsBetweenLines, listOfStations) {
  var junction = findNearestJunctionToSwitchBetween(
    source.line, dest.line, junctionsBetweenLines, listOfStations);
  return {
    fare: (findNoOfStationsAcrossHop(source, dest, junction, Lines) > Lines.fixedFare.hops ? getFareAcrossHop(source, dest, junction, Lines) : Lines.fixedFare.fare ),
    hops: findNoOfStationsAcrossHop(source, dest, junction, Lines),
    hopJunction: junction.name
  }
}

 function computeFareInvolvingJunctions(source, dest, Lines, junctionsBetweenLines, junctionsMeetingLines, listOfStations){
    // Case 1 when both are junctions
    if (isJunction(source) && isJunction(dest)) {
      // Find the common line
      let commonLine = junctionsMeetingLines[source.code][dest.code];
      let newSource = getStationForLine(source, commonLine, listOfStations);
      let newDest = getStationForLine(dest, commonLine, listOfStations);
      return computeSameLineFare(newSource, newDest, Lines);
    } // Case 2 when source is junction
    else if (isJunction(source)) {
      return computeJunctionFare(source, dest, Lines, junctionsBetweenLines, listOfStations);  
    } // Case 3 when destination is a junction
    else {
      return computeJunctionFare(dest, source, Lines, junctionsBetweenLines, listOfStations);
    }
 }

 function computeJunctionFare(source, dest, Lines, junctionsBetweenLines, listOfStations) {
      // Check if junction is in the same line as of dest
      if (source.line != dest.line) {
        // Find if the source is also a part of destination line
        if (isStationPartOfLine(source, dest.line, Lines)) {
          let newSource = getStationForLine(source, dest.line, listOfStations);
          return computeSameLineFare(newSource, dest, Lines);
        } else {
          return computeDifferentLineFare(source, dest, Lines, junctionsBetweenLines, listOfStations);
        }
      }
      else {
        return computeSameLineFare(source, dest, Lines);
      }
    } 

function isJunction(station) {
  return !!station.isJunction;
}

function isStationPartOfLine(stn, line, Lines) {
  return !!Lines[line].stations.find(station => station.code === stn.code);
}

function getStationForLine(stn, line, listOfStations) {
  return listOfStations.find(station => station.code == stn.code && 
    station.line == line);
}

function findNoOfStationsAcrossHop(source, dest, junction, Lines) {
  return findNoOfStationsBetween(source, junction, source.line, Lines) + 
      findNoOfStationsBetween(junction, dest, dest.line, Lines)
}

function getFareAcrossHop(source, dest, junction, Lines) {
  return getFareForSameLine(source, junction, source.line, Lines) +
        getFareForSameLine(junction, dest, dest.line, Lines)
}

function getFareForSameLine(source, dest, line, Lines) {
  return getFareForLine(findNoOfStationsBetween(source, dest, line, Lines), 
    line, Lines);
}

function findNoOfStationsBetween(source, dest, line, Lines) {
  var stationsList = Lines[line].stations;
  var sourceStationPosition = 
  stationsList.find(station => station.code == source.code).position;
  var destStationPosition = 
  stationsList.find(station => station.code == dest.code).position;  
  return Math.abs(sourceStationPosition - destStationPosition);
}

function getFareForLine(numStations, line, Lines) {
  return numStations * Lines[line].fare;
}

function isSameLine(source, dest) {
  return source.line === dest.line;
}

function findNearestJunctionToSwitchBetween(line1, line2, junctionsBetweenLines, listOfStations) {
  return getStationFromCode(junctionsBetweenLines[line1][line2], listOfStations);
}

function getStationFromCode(stationCode, listOfStations) {
  return listOfStations.find(station => station.code == stationCode);
}



// Test Cases

// let arrInputs = [
//   {
//     source: 'A21',
//     dest: 'A2'
//   },
//   {
//     source: 'B1',
//     dest: 'B12'
//   },
//   {
//     source: 'C1',
//     dest: 'A2'
//   },
//   {
//     source: 'A17',
//     dest: 'B13'
//   },
//   {
//     source: 'A12',
//     dest: 'A12'
//   },
//   {
//     source: 'A12',
//     dest: 'A14'
//   },
//   {
//     source: 'X3',
//     dest: 'X1'
//   },
// ];

// arrInputs.forEach(input => {
//   console.log('*************************************************');
//   console.log('                 Hyderabad Metro Rail            ');
//   console.log('Source: ' + getStationFromCode(input.source, listOfStations).name +'             ');
//   console.log('Destination: ' + getStationFromCode(input.dest, listOfStations).name +'             ');
//   let result = calculateFare
//   (getStationFromCode(input.source, listOfStations), 
//     getStationFromCode(input.dest, listOfStations),
//     Lines,
//     junctionsBetweenLines,
//     listOfStations
//     );
//   console.log('Cost:  Rs ' + result.fare);
//   console.log('Hops: ' + result.hops);
//   if (result.hopJunction) {
//     console.log('Hop Junction: ' + result.hopJunction);
//   }
//   console.log('*************************************************');
// });

