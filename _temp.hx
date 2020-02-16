w = 12; v = "d";
switch [w,v] {
  case [_,"d"]:return v;
  case [_, _]:return w;
}
