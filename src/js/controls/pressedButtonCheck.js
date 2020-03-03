import searchClick from './searchClick';

export default function pressedButtonCheck(event){
  if (event.keyCode === 13){
    searchClick();
  }
}