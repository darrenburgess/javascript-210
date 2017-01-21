function rott13(string) {

}

function rott13Test(string) {
  string2 = rott13(rott13(string))

  if (string === string2) {
    return true;
  } else {
    return false;
  }
}
