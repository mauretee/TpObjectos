// Test01
bool = new Bool();
flec_bool_bool = new flec(bool, bool);
flec_bool_bool.toString() == "Bool -> Bool";


absDeBool = new abs(new vars("x"),flec_bool_bool, new TT);

absDeBool.toString() == "(\\x.Bool -> Bool: TT)";
