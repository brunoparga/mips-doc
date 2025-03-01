var highlightON = false;
var highRedON = false;
var highGreenON = false;

var highlight = 0;
var previous = 0;
highlightDISABLE = false;

function doHighlight()
{
  if ( highlightDISABLE )
  {
    highlightDISABLE = false;
    return;
  }
  
  // Yellow Highlights
  var highLights = document.getElementsByClassName('highlight');
  for ( var j=0; j<highLights.length; j++ )
    if ( !highlightON )
     highLights[j].style.backgroundColor = 'yellow';
    else
      highLights[j].style.backgroundColor = 'transparent';
  highlightON = !highlightON;

  // Red Highlights
  var highLightsred = document.getElementsByClassName('highlightred');
  for ( var j=0; j<highLightsred.length; j++ )
    if ( !highRedON )
     highLightsred[j].style.backgroundColor = 'pink';
    else
      highLightsred[j].style.backgroundColor = 'transparent';
  highRedON = !highRedON;

  // Green Highlights
  var highLightsgreen = document.getElementsByClassName('highlightgreen');
  for ( var j=0; j<highLightsgreen.length; j++ )
    if ( !highGreenON )
     highLightsgreen[j].style.backgroundColor = 'PaleGreen';
    else
      highLightsgreen[j].style.backgroundColor = 'transparent';
  highGreenON = !highGreenON;

  var highLights = document.getElementsByClassName('highlightSeq');  
  var len = highLights.length ;

  for ( var j=0; j<len; j++ )
  {
    // out.println( "    console.log('j: ' + j + '  highlight:' + highlight );
    if ( previous === len-1)
      highLights[len-1].style.backgroundColor = '#ffffcc';
    if ( j <= highlight )
    {   
      highLights[j].style.backgroundColor = '#ffffcc';
    }
    if ( j === highlight )
      highLights[j].style.backgroundColor = '#ffff00';    
  }
  previous  = highlight;
  highlight = (highlight+1) % len;
}

var soundOn = false;
function doAudio()
{
  if ( !soundOn )
  {
    document.getElementById('player').play();
  }
  else
  {
    document.getElementById('player').pause();
  }
  soundOn = !soundOn;
}