describe('telephoneCheck', function(){
  it('If "555-555-5555" is passed return true', function(){
  expect(telephoneCheck("555-555-5555")).toEqual(true);
});
  it('If ("1 555-555-5555") is passed return true', function(){
  expect(telephoneCheck("1 555-555-5555")).toEqual(true);

});
  it('If ("555-5555") is passed return false', function(){
  expect(telephoneCheck("555-5555")).toEqual(false);

});
  it('If ("10 (757) 622-7382") is passed return false', function(){
  expect(telephoneCheck("10 (757) 622-7382")).toEqual(false);

});
  it('If ("2(757)622-7382") is passed return false', function(){
  expect(telephoneCheck("2(757)622-7382")).toEqual(false);
});
  it('If ("555)-555-5555") is passed return false', function(){
      expect(telephoneCheck("555)-555-5555")).toEqual(false);
  });
  it('If ("1 555)-555-5555") is passed return false', function(){
      expect(telephoneCheck("1 555)-555-5555")).toEqual(false);
  });
  it('If ("(555)5(55?)-5555") is passed return false', function(){
      expect(telephoneCheck("(555)5(55?)-5555")).toEqual(false);
  });
});

