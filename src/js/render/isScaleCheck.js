export default function isScaleCheck(sky, element){
  if(sky == 'fog' || sky == 'wind'){
    element.classList.add('scale_class');
  }
  else{
    element.classList.remove('scale_class');
  }
}